# LK Technical Services Website

A modern portfolio website for LK Technical Services - Complete CNC Machine Support.

## Features
- **Dynamic Forms:** Powered by Netlify Forms (No backend required)
- **Responsive Design:** Premium UI for all devices
- **SEO Optimized:** Ready for search engines

## Hosting Instructions (Netlify)

This website is optimized to be hosted on **Netlify** without needing a separate backend or database.

### 1. Connect to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Connect your **GitHub** account and select this repository.

### 2. Configure Build Settings
Netlify should automatically detect the settings, but if not, use these:
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `build`

### 3. Forms
- Form submissions will automatically appear in your **Netlify Dashboard** under the **Forms** tab.
- You can enable email notifications in the Netlify settings to get an email every time someone contacts you.

## Local Development

### Prerequisites
- Node.js (v14 or higher)

### Steps
1. Open a terminal in the `frontend` folder
2. Run: `npm install`
3. Run: `npm start`
4. The website will open at http://localhost:3000

---

## Customization

To update company information:
1. Edit contact details in `frontend/src/components/sections/Footer.jsx`
2. Update GSTIN number in each page's hero section
3. Modify services list in `frontend/src/pages/ServicesPage.jsx`

## Support

For issues or questions, reach out to your development team.
