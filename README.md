# LK Technical Services Website

A modern portfolio website for LK Technical Services - Complete CNC Machine Support.

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.11+
- MongoDB (optional - only needed if you want to save form submissions)

### Running the Website

#### Option 1: Frontend Only (Recommended for viewing)
1. Open a terminal in the `frontend` folder
2. Run: `npm start`
3. The website will open at http://localhost:3000

**Note:** Forms won't save to database without the backend, but you can still view the entire website.

#### Option 2: Full Stack (Frontend + Backend)

**Terminal 1 - Frontend:**
```bash
cd frontend
npm start
```

**Terminal 2 - Backend (optional):**
```bash
cd backend
python -m uvicorn server:app --reload
```

## Project Structure

```
website/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── App.js        # Main app
│   └── package.json
│
└── backend/           # Python FastAPI server (optional)
    ├── server.py      # API endpoints
    └── requirements.txt
```

## Customization

To update company information:
1. Edit contact details in `frontend/src/components/Footer.jsx`
2. Update GSTIN number in each page's hero section
3. Modify services list in `frontend/src/pages/ServicesPage.jsx`

## Troubleshooting

**If `npm start` doesn't work:**
- Make sure you're in the `frontend` folder
- Try: `npm install --legacy-peer-deps` first
- Then: `npm start`

**Forms not working:**
- This is normal if backend isn't running
- Forms will show in the UI but won't save data
- To enable saving, start the backend server

## Support

For issues or questions, check the code comments or reach out to your development team.
