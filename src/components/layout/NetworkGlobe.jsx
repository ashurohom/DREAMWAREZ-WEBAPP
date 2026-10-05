import React, { useRef, useEffect, useCallback } from 'react';

/**
 * NetworkGlobe — an interactive, continuously-rotating 3D network sphere
 * rendered on a <canvas>.  Nodes orbit the sphere surface and are connected
 * by translucent lines.  On hover the globe tilts toward the cursor and
 * nearby nodes glow brighter.
 */
export function NetworkGlobe({ size = 420 }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, inside: false });
  const animRef = useRef(null);

  /* ── build nodes on a unit sphere (Fibonacci distribution for even spacing) ── */
  const buildNodes = useCallback((count) => {
    const nodes = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      nodes.push({
        bx: Math.cos(theta) * radiusAtY,
        by: y,
        bz: Math.sin(theta) * radiusAtY,
        x: 0, y2: 0, z: 0,
        size: 2.5 + Math.random() * 2.5,
        phase: Math.random() * Math.PI * 2,
        isAccent: Math.random() < 0.25,
      });
    }
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.38;
    const NODE_COUNT = 65;
    const CONNECTION_DIST = 0.6;
    const nodes = buildNodes(NODE_COUNT);

    /* ── precompute neighbour pairs ── */
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].bx - nodes[j].bx;
        const dy = nodes[i].by - nodes[j].by;
        const dz = nodes[i].bz - nodes[j].bz;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECTION_DIST) pairs.push([i, j, d]);
      }
    }

    let t = 0;
    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, size, size);

      /* tilt toward cursor when hovered */
      let tiltX = 0;
      let tiltY = 0;
      if (mouse.current.inside) {
        tiltX = ((mouse.current.y - cy) / cy) * 0.4;
        tiltY = ((mouse.current.x - cx) / cx) * 0.4;
      }

      const cosA = Math.cos(t + tiltY);
      const sinA = Math.sin(t + tiltY);
      const cosB = Math.cos(tiltX * 0.5);
      const sinB = Math.sin(tiltX * 0.5);

      /* project every node */
      for (const n of nodes) {
        let x1 = n.bx * cosA + n.bz * sinA;
        let z1 = -n.bx * sinA + n.bz * cosA;
        let y1 = n.by;
        let y2 = y1 * cosB - z1 * sinB;
        let z2 = y1 * sinB + z1 * cosB;
        n.x = cx + x1 * R;
        n.y2 = cy + y2 * R;
        n.z = z2;
      }

      /* ── draw outer glowing ring ── */
      const pulseScale = 1 + Math.sin(t * 6) * 0.025;
      


      // Pulsing ring
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.arc(cx, cy, R * pulseScale + 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Inner ring
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.98, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      /* ── equator ellipse ── */
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, R, R * Math.abs(cosB) * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      const drawLines = (isFront) => {
        for (const [i, j] of pairs) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.z < -0.15 && b.z < -0.15) continue;
          
          const avgZ = (a.z + b.z) / 2;
          if ((avgZ >= 0) !== isFront) continue;

          // Fade lines near the center text area
          const midX = (a.x + b.x) / 2;
          const midY = (a.y2 + b.y2) / 2;
          const distFromCenter = Math.hypot(midX - cx, (midY - cy) * 2.5);
          const textFade = Math.min(1, Math.max(0, (distFromCenter - 160) / 180));

          const depthAlpha = Math.max(0, Math.min(1, (a.z + b.z + 1.2) * 0.5));
          let lineAlpha = 0.6;
          let lineWidth = 1.2;
          
          if (mouse.current.inside) {
            const dm = Math.hypot(mouse.current.x - midX, mouse.current.y - midY);
            if (dm < 100) {
              lineAlpha = 1.0;
              lineWidth = 2.0;
            }
          }

          ctx.save();
          ctx.globalAlpha = depthAlpha * lineAlpha * textFade;
          ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y2);
          ctx.lineTo(b.x, b.y2);
          ctx.stroke();
          ctx.restore();
        }
      };

      const drawNodes = (isFront) => {
        const now = performance.now() / 1000;
        for (const n of nodes) {
          if (n.z < -0.25) continue;
          if ((n.z >= 0) !== isFront) continue;

          const alpha = Math.max(0, Math.min(1, (n.z + 0.6) * 1.5));
          // Fade nodes near the center text area
          const distFromCenter = Math.hypot(n.x - cx, (n.y2 - cy) * 2.5);
          const textFade = Math.min(1, Math.max(0, (distFromCenter - 160) / 180));
          const pulse = 1 + Math.sin(now * 2.5 + n.phase) * 0.2;
          const r = n.size * pulse * 1.5;

          let isNear = false;
          if (mouse.current.inside) {
            const dm = Math.hypot(mouse.current.x - n.x, mouse.current.y - n.y2);
            if (dm < 70) isNear = true;
          }

          ctx.save();
          ctx.globalAlpha = alpha * textFade;

          // Outer glow
          const glowR = r * (isNear ? 5 : 3);
          const grad = ctx.createRadialGradient(n.x, n.y2, 0, n.x, n.y2, glowR);
          if (isNear) {
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          } else if (n.isAccent) {
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          } else {
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          }
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.x, n.y2, glowR, 0, Math.PI * 2);
          ctx.fill();

          // Node dot
          ctx.fillStyle = isNear
            ? 'rgba(255, 255, 255, 1)'
            : n.isAccent
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(255, 255, 255, 0.85)';
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
          ctx.shadowBlur = isNear ? 12 : 6;
          ctx.beginPath();
          ctx.arc(n.x, n.y2, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.restore();
        }
      };

      /* ── draw back elements ── */
      drawLines(false);
      drawNodes(false);

      /* ── draw front elements ── */
      drawLines(true);
      drawNodes(true);

      /* ── draw center text (on top of everything) ── */
      ctx.save();
      ctx.font = "800 40px 'Open Sans', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
      ctx.shadowBlur = 12;
      if (ctx.letterSpacing !== undefined) {
        ctx.letterSpacing = "6px";
        ctx.fillText("DREAMWAREZ", cx, cy);
      } else {
        ctx.fillText("D R E A M W A R E Z", cx, cy);
      }
      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.inside = true;
    };
    const onLeave = () => { mouse.current.inside = false; };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [size, buildNodes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'grab',
      }}
    />
  );
}
