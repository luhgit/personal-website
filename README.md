# Amit Tyagi — Personal Website

This is the source code for my personal website and portfolio, built with [Astro](https://astro.build).  
It serves as a hub for my work, projects, and selected writing, with links to my Substack for more in-depth blog posts.

🌐 **Live site:** [https://www.amittyagi.com](https://www.amittyagi.com)

---

## 🚀 Tech Stack
- [Astro](https://astro.build) (static site generator)
- [Tailwind CSS](https://tailwindcss.com) (styling)
- [TypeScript](https://www.typescriptlang.org)
- [Cloudflare Pages](https://pages.cloudflare.com) (hosting/CDN)

---

## 📂 Structure
- `src/pages/` → site pages (home, work, projects, blog, legal)
- `src/layouts/` → shared layouts
- `src/components/` → UI components
- `content/` → markdown entries for Work, Projects, Education, Legal
- `public/` → static assets (logo, favicon, headers/redirects)

---

## 🛠️ Development

Clone and install dependencies:

```bash
git clone https://github.com/luhgit/personal-website.git
cd personal-website
npm install
```

**Run Locally:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```