import React from 'react';

/**
 * Interactive3DSticker
 * Renders a transparent PNG sticker.
 * Updated to be static (no hover tilt, shift, or scale effect) per user request.
 */
export function Interactive3DSticker({ src, alt }) {
  return (
    <div className="interactive-sticker-container relative select-none w-full max-w-[450px]">
      {/* Frame with static drop shadow */}
      <div 
        className="sticker-wrapper relative w-full h-full flex justify-center items-center"
        style={{
          filter: 'drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.2))',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="sticker-image w-full h-auto object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
