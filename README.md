# µLearn CEC

The official web platform for the **GTech µLearn Campus Chapter** at **College of Engineering Chengannur (CEC)**.

µLearn CEC is a peer-to-peer learning community focused on building in public, breaking the traditional syllabus, and earning verifiable karma through public proof of work.

---

## ⚡ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Animation & Motion:** Motion (Framer Motion) + GSAP + Lenis Smooth Scroll
- **WebGL & Canvas:** OGL (Real-time rings shader on preloader)
- **Icons:** Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mulearn-cec/mulearn-cec.git

# Navigate to the project directory
cd mulearn-cec

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173/` (or the port assigned by Vite).

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

---

## 📂 Project Structure

```
mulearn-cec/
├── public/                 # Static assets & favicon
│   ├── favicon.jpg         # Chapter logo favicon
│   └── favicon.svg         # Legacy vector icon
├── src/
│   ├── components/         # Core UI & interactive modules
│   │   ├── Navbar.tsx      # Top floating pill navigation
│   │   ├── Preloader.tsx   # WebGL curtain intro preloader
│   │   ├── ScrollRail.tsx  # Custom HUD caliper scroll indicator
│   │   ├── SectionDivider.tsx # Chapter boundaries
│   │   ├── SplitText.tsx   # Fluid typography wave reveals
│   │   └── FlickerNumber.tsx # Rolling numeric counters
│   ├── config/
│   │   └── content.ts      # Single source of truth for chapter content
│   ├── styles/
│   │   └── globals.css     # Tailwind 4 themes, palettes & typography
│   ├── App.tsx             # Main editorial landing page
│   └── main.tsx            # Application entry point
├── package.json
└── vite.config.ts
```

---

## ✏️ Content Customization

All copy, stats, links, events, and circle descriptions are managed in:
- `src/config/content.ts`

Update this file to modify chapter statistics, lead names, social links, and upcoming workshops without touching JSX structure.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](file:///LICENSE) file for details.
