# DatC.DEV | Mobile Developer Portfolio

![DatC.DEV Portfolio Banner](https://img.shields.io/badge/Status-Active-39FF14?style=for-the-badge&logo=astro&labelColor=1a1a1a)
![Astro](https://img.shields.io/badge/Astro-FF7E33?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A high-performance, dark-editorial style personal portfolio built for **Cap Tan Dat**, a Mobile Developer specializing in Flutter, Kotlin, and React Native.

Designed with a custom "Neon Luminary" design system focusing on extreme contrast, vibrant neon-green accents (`#39FF14`), glassmorphism, and buttery smooth micro-interactions.

---

## ✨ Features

- **Extreme Performance**: Built on top of **Astro**, delivering near-zero JavaScript overhead by default. Uses Astro's native `<Image>` components for automatic optimization and lazy loading.
- **Custom Design System**: Powered by **Tailwind CSS v4** with tailored semantic color tokens (`primary`, `surface`, `on-surface`, `outline-variant`).
- **Interactive "Skills" View**: Progress bars implement custom `IntersectionObserver` logic to animate dynamically as they scroll into view. 
- **Reactive Form Validation**: A fully custom client-side validation logic for the Contact Form featuring real-time input/blur validation and UX-friendly feedback.
- **Dark-Mode Native Maps**: Seamless Google Maps integration in the Contact page that utilizes advanced CSS masking and filtering to perfectly match the Neon Dark theme. 
- **Tech Brand Logos**: Integration with the [Devicon](https://devicon.dev/) library to render vibrant, high-fidelity brand logos (React, Flutter, Firebase, NodeJS, etc.) exactly when users engage with them.

---

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS v4 (@tailwindcss/vite)](https://tailwindcss.com/)
- **Typography**: [Google Fonts (Manrope)](https://fonts.google.com/specimen/Manrope)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons) & [Devicons](https://devicon.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📂 Project Structure

```text
/
├── public/                # Static assets & Favicon
├── src/
│   ├── assets/            # Local images (e.g., avatar.png)
│   ├── components/        # Reusable Astro components (Nav, Footer, Card, Button, Chip)
│   ├── layouts/           # Global layouts (BaseLayout.astro handling meta & CDNs)
│   ├── pages/             # Route pages (index, projects, skills, contact)
│   └── styles/            # Global Tailwind & Theme configurations (global.css)
├── astro.config.mjs       # Astro & Vite integrations configuration
├── package.json           # Dependencies and scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Penz7/penz-portfolio.git
   cd penz-portfolio
   ```

2. Install dependencies
   ```sh
   yarn install
   ```

3. Run the development server
   ```sh
   yarn dev
   ```
   *The server will start at `http://localhost:4321`.*

### Building for Production
To generate a highly-optimized static build for deployment:
```sh
yarn build
```
After building, you can preview the production bundle locally:
```sh
yarn preview
```

---

## 📬 Contact

If you have any questions or want to collaborate, feel free to reach out via:
- **Email**: [tandatkt002@gmail.com](mailto:tandatkt002@gmail.com)
- **LinkedIn**: [Dat Cap](https://www.linkedin.com/in/datcap1401/)
- **GitHub**: [@Penz7](https://github.com/Penz7)

> *© 2026 DatC.DEV. All rights reserved.*
