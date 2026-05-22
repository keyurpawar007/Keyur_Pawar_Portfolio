# Keyur Pawar — AI/ML Engineer Portfolio

A clean, professional portfolio website built for AI/ML engineering job applications.

---

## 📁 Folder Structure

```
MyWebsite/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All styles (responsive, theme)
├── script.js       ← Navbar, scroll reveal, contact form
├── resume.pdf      ← Add your resume here (rename to resume.pdf)
└── README.md       ← This file
```

---

## 🚀 Deploy FREE on Vercel (5 minutes)

### Step 1 — Push to GitHub

```bash
# Inside the MyWebsite folder
git init
git add .
git commit -m "Initial portfolio commit"

# Create a repo on github.com then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to **https://vercel.com** → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Select your `portfolio` repository
4. Leave all settings as default → Click **"Deploy"**
5. ✅ Your site is live at: `https://your-username-portfolio.vercel.app`

### Step 3 — Custom Domain (optional, free)

- In Vercel dashboard → **Domains** → Add a custom domain
- Or use the free `.vercel.app` URL

---

## ✏️ Customisation Checklist

- [ ] Replace `resume.pdf` with your actual resume file
- [ ] Update GitHub URLs in project cards (`href="https://github.com/YOUR_USERNAME/REPO"`)
- [ ] Add real demo URLs for projects
- [ ] Update LinkedIn URL if needed
- [ ] Add a profile photo: replace `.avatar-inner` emoji with `<img src="images/photo.jpg" />`

---

## 🎨 Theme Variables (style.css)

Edit these at the top of `style.css` to change the entire look:

```css
--navy:    #0a1628;   /* dark background */
--accent:  #2563eb;   /* blue highlights  */
```

---

## 📬 Contact Form

The contact form uses `mailto:` — it opens the visitor's email client pre-filled.
No backend or API key needed. Works instantly on Vercel.

For a proper form backend, connect **Formspree** (free):
1. Sign up at formspree.io
2. Change `<form id="contact-form">` to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

---

Built with pure HTML, CSS, JavaScript — no frameworks, no build step.
