# Valentine's Day Website 💕

A small static site with **index.html**, **styles.css**, **script.js**, and other pages — ready to host on **GitHub Pages** so you get a live link.

---

## How to upload to GitHub and get your link

### 1. Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** (top right) → **New repository**.
3. Name it (e.g. `valentines-day-website`).
4. Leave it **empty** (no README, no .gitignore — we already have files).
5. Click **Create repository**.

### 2. Upload your folder from your computer

**Option A — Using GitHub website (easiest)**

1. On the new repo page, click **“uploading an existing file”**.
2. Drag and drop your **entire project folder** (all files and folders: `index.html`, `styles.css`, `script.js`, `images`, etc.).
3. Add a short commit message (e.g. “Initial upload”) and click **Commit changes**.

**Option B — Using Git in terminal**

In your project folder, run (replace `YOUR_USERNAME` and `valentines-day-website` with your GitHub username and repo name):

```bash
git init
git add .
git commit -m "Initial upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentines-day-website.git
git push -u origin main
```

### 3. Turn on GitHub Pages to get the link

1. In your repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select **main** (or **master**) and **/ (root)**.
4. Click **Save**.

After a minute or two, your site will be live at:

**`https://YOUR_USERNAME.github.io/valentines-day-website/`**

(Use your GitHub username and your actual repo name.)

---

## What GitHub needs for the link

GitHub Pages will serve your site as long as the repo has an **index.html** at the root (and your other files like **styles.css**, **script.js**, images, etc.). Your project already has this structure, so once you upload and enable Pages, you get the link above.
