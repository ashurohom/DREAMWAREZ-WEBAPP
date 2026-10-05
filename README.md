# Dreamwarez — Official Enterprise Website

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-F56565?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-10B981?style=for-the-badge)

<p align="center">
  <strong>The Simplified Software Company</strong><br />
  Custom ERP, Enterprise Cloud Platforms, Mobile Applications & Digital Transformation Solutions.
</p>

[Explore Website](https://dreamwarez.in) • [Contact Us](https://dreamwarez.in/contact/) • [Our Softwares](https://dreamwarez.in/our-softwares/)

</div>

---

## 📖 About The Project

This repository hosts the official production-grade web application for **Dreamwarez** ([dreamwarez.in](https://dreamwarez.in)), an enterprise software engineering company based in Pune, India. 

Designed and engineered with modern web standards, the platform provides interactive product showcases, detailed architectural modules for 30+ enterprise services, lead generation channels, interactive 3D elements, and real-time contact touchpoints.

### ✨ Key Highlights

- 🏢 **Modular Enterprise ERP Suite**: In-depth subpages and feature breakdowns for Sales, Purchase, Warehouse & Inventory, Accounting, Manufacturing (MRP), HR Management, and Point of Sale (POS).
- 📱 **Mobile & Custom Solutions**: Dedicated portals for Android Development, iOS Native Apps, AR/VR Solutions, Custom Web Apps, Odoo Partnerships, and Cybersecurity/Digital Forensics.
- 🌐 **Interactive Visual Engineering**:
  - Live 3D Canvas Network Globe on landing pages.
  - Custom interactive 3D product stickers and micro-animations.
  - Interactive multi-select service inquiry selectors.
- ⚡ **Real-Time Client Lead Generation**:
  - Integrated EmailJS lead submission with instant fallbacks.
  - Floating dual AI Chat Widget and WhatsApp direct support.
  - One-click copy-to-clipboard contact shortcuts for HQ address, hotline, and email.
- 🚀 **Performance & Modern Tech**:
  - Built with **React 19** and bundled with **Vite 8** for sub-second build times.
  - Zero-bloat utility styling powered by **Tailwind CSS v4**.
  - Asynchronous Head/Meta management with **React Helmet Async** for SEO optimization.
  - Client-side routing with clean scroll-restoration via **React Router v7**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library & declarative component architecture |
| **[Vite 8](https://vite.dev/)** | High-performance frontend tooling & fast HMR development |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation utility-first styling engine |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing and deep-linking system |
| **[React Helmet Async](https://github.com/staylor/react-helmet-async)** | Dynamic title, metadata, and SEO tag management |
| **[Lucide React](https://lucide.dev/)** | Modern, accessible vector icon toolkit |
| **[EmailJS](https://www.emailjs.com/)** | Serverless client-side email delivery for inquiry forms |

---

## 📂 Project Directory Structure

```text
dreamwarez/
├── public/                           # Static assets served at root
│   ├── favicon.svg                   # Brand favicon
│   └── stickers/                     # Interactive SVG/PNG stickers
│
├── src/
│   ├── assets/                       # High-resolution illustrations, diagrams & logos
│   │
│   ├── components/
│   │   └── layout/                   # Global layout and interactive widgets
│   │       ├── ChatWidget.jsx        # Floating contact & inquiry widget
│   │       ├── Interactive3DSticker.jsx # 3D perspective sticker container
│   │       ├── NetworkGlobe.jsx      # Interactive 3D Canvas rotating globe
│   │       ├── SEO.jsx               # Dynamic title & OpenGraph metadata injector
│   │       ├── SiteFooter.jsx        # Global responsive footer
│   │       ├── siteFooter.module.css # Footer styling
│   │       ├── SiteHeader.jsx        # Navigation header with responsive mobile drawer
│   │       └── WhatsAppWidget.jsx    # WhatsApp quick-chat floating trigger
│   │
│   ├── data/
│   │   ├── pagesContent.js           # Legal, Terms, and Privacy Policy content
│   │   └── teamMembers.js            # Dreamwarez leadership and engineering team data
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Main flagship homepage
│   │   ├── styles/                   # Specialized page stylesheets
│   │   │   ├── Home.css              # Home rotating ring & hero styles
│   │   │   └── OurSoftwaresPage.css  # Logo marquee track & card styles
│   │   │
│   │   └── subpages/                 # 31 Dedicated Modular Pages
│   │       ├── AboutUsPage.jsx
│   │       ├── AccountingPage.jsx
│   │       ├── AndroidAppPage.jsx
│   │       ├── ArVrPage.jsx
│   │       ├── BusinessIntelligencePage.jsx
│   │       ├── CareerOpportunitiesPage.jsx
│   │       ├── ContactPage.jsx       # Refreshed interactive contact hub & form
│   │       ├── CrmPage.jsx
│   │       ├── CustomSoftwarePage.jsx
│   │       ├── CybersecurityPage.jsx
│   │       ├── DigitalMarketingPage.jsx
│   │       ├── EnterpriseSocialNetworkPage.jsx
│   │       ├── ErpPage.jsx
│   │       ├── HumanResourcesPage.jsx
│   │       ├── IosAppPage.jsx
│   │       ├── LoginPage.jsx
│   │       ├── MediaAnimationPage.jsx
│   │       ├── MrpPage.jsx
│   │       ├── OdooPartnerPage.jsx
│   │       ├── OurAppsPage.jsx
│   │       ├── OurSoftwaresPage.jsx
│   │       ├── PointOfSalePage.jsx
│   │       ├── PolicyPage.jsx
│   │       ├── ProjectManagementPage.jsx
│   │       ├── PurchaseManagementPage.jsx
│   │       ├── QualityConstructionPage.jsx
│   │       ├── SalesManagementPage.jsx
│   │       ├── ServicesDirectoryPage.jsx
│   │       ├── TeamDreamwarezPage.jsx
│   │       ├── WarehouseStockManagementPage.jsx
│   │       └── WebsiteDevelopmentPage.jsx
│   │
│   ├── App.jsx                       # Application routing & viewport reveal observers
│   ├── index.css                     # Global Tailwind tokens & design system
│   └── main.jsx                      # App root mount with StrictMode & HelmetProvider
│
├── .env.example                      # Template for environment configuration
├── eslint.config.js                  # ESLint flat configuration
├── index.html                        # HTML5 document template
├── package.json                      # Node packages & NPM scripts
└── vite.config.js                    # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/dreamwarez.git
   cd dreamwarez
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the sample environment file and add your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Launches local Vite development server with HMR |
| **Production Build** | `npm run build` | Compiles optimized production bundle in `/dist` |
| **Preview** | `npm run preview` | Locally serves the optimized production build |
| **Lint** | `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🌐 Pushing to a New Git Repository

To push this codebase to a brand new Git / GitHub repository, run the following commands in your project root:

```bash
# 1. Initialize git
git init

# 2. Stage all project files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Dreamwarez corporate web application"

# 4. Set default branch to main
git branch -M main

# 5. Connect your remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/dreamwarez.git

# 6. Push to remote
git push -u origin main
```

---

## 👨‍💻 Author & Developer Credits

This website is designed, built, and maintained by:

<div align="left">

### **Ashitosh B Rohom**
**Software Developer at Dreamwarez**

- 🏢 **Company**: [Dreamwarez](https://dreamwarez.in)
- 📍 **Location**: 518, 5th Floor, Wakad Business Bay, Wakad, Pune - 411057, Maharashtra, India
- 💼 **Focus**: Enterprise Full-Stack Engineering, ERP Solutions, and Scalable Web Platforms
- 🌐 **Social Channels**:
  - [Facebook](https://www.facebook.com/dreamwarez.in/)
  - [X (Twitter)](https://x.com/Dreamwarez)
  - [YouTube](https://www.youtube.com/@dreamwarezsoftware6102)
  - [LinkedIn](https://www.linkedin.com/company/dreamwarez/)

</div>

---

## 📄 License & Rights

Copyright © 2026 **Dreamwarez - The Simplified Software Company**. All rights reserved.  
Unauthorized duplication, distribution, or reproduction of any proprietary software code, brand assets, or website graphics is strictly prohibited without prior written permission.
