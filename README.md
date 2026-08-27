# Accelerate RVCE Official Portal

> **INNOVATE · CONNECT · INSPIRE**
> 
> The official developer-centric portal for **Accelerate** — The Computer Science Club of RV College of Engineering (RVCE), Bengaluru. Live at [accelerate-rvce.github.io](https://accelerate-rvce.github.io).

---

## 🚀 Overview

Accelerate is a premium, modern tech portal designed to represent our student technology community as a serious engineering organization. The portal serves as a platform to share resources, list open-source projects, detail team structures, showcase upcoming hackathons/events, and guide student developers on open-source contributions.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, TypeScript, Vite, React Router
- **Styling**: Tailwind CSS (custom HSL theme variables, sleek dark theme `#08080c`)
- **Components & Accessibility**: Radix UI (Primitives, Tabs, Dialogs, Tooltips)
- **Icons**: Lucide React + custom SVGs
- **Animations**: Framer Motion & custom high-performance HTML5 Canvas renderers
- **Linter**: Oxlint (Oxc fast linting system)

---

## ✨ Features

### 1. Interactive Canvas Logo Background
An interactive 3D-like wireframe particle engine rendering the club's logo:
- **Boundary-aware drift**: Particles move naturally with micro-rotations.
- **Cursor interaction**: Particles are repelled by the mouse, flare up in opacity, and rotate faster based on cursor proximity.
- **Click-to-Spawn**: Clicking anywhere on the hero background spawns a burst of `1–4` new logo particles that explode outwards.
- **Performance**: Built using standard HTML5 Canvas & `requestAnimationFrame` with safety caps. Respects browser `prefers-reduced-motion` settings.

### 2. Contributor Portal
A comprehensive workspace for developer onboarding:
- Accessible Radix tabs showing the Git Workflow and Coding guidelines.
- One-click click-to-copy terminal commands for cloning, checkout, and building.

### 3. Resources Directory
A structured category index of roadmap tutorials and materials:
- Categorized filters with smooth rendering transitions.
- Styled badges denoting difficulty levels (Beginner, Intermediate, Advanced).

### 4. Team Directory
An interactive grid showcasing student contributors:
- Accessible Radix Tooltips displaying members' names, roles, and profiles.

---

## ⚙️ Local Development

### 1. Prerequisites
Ensure you have **Node.js (v20+)** installed on your system.

### 2. Setup
Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/accelerate-rvce.github.io.git
cd accelerate-rvce.github.io
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 5. Build for Production
```bash
npm run build
```
This runs the TypeScript compiler `tsc` and bundles the assets into the `/dist` folder.

---

## 🌐 Deployments (CI/CD)

The project uses a fully automated deployment pipeline managed via GitHub Actions:
- The configuration is defined in [deploy.yml](.github/workflows/deploy.yml).
- **Triggers**: Every push to the `main` or `master` branches automatically triggers the build process and deploys the contents of `/dist` to GitHub Pages.

---

## 🤝 Contributing

We welcome contributions from all club members and RVCE students!
1. **Fork** the repository to your personal profile.
2. **Clone** your fork locally.
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Implement your changes, verifying there are no compilation errors (`npm run build`).
5. Commit and push to your fork, then open a **Pull Request**.

Refer to the **Contribute** section on the live portal for full guidelines.
