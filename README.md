# Real Estate Property Analysis with AI Insights

A comprehensive MERN stack application that uses OpenAI's GPT-4 to analyze real estate properties and provide market insights, comparative analysis, and price recommendations.

## 🚀 Features

- **Property Management Dashboard**: Add, view, and manage property listings with detailed information
- **AI-Powered Market Analysis**: Integrates with OpenAI API to analyze market value and provide insights
- **Comparative Market Analysis**: Visual charts comparing listed prices vs. market values
- **Price Recommendations**: AI suggests optimal listing prices based on market conditions
- **Interactive Charts**: Multiple chart types using Recharts for data visualization
- **Real-time Updates**: Automatic updates when properties are analyzed

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI framework
- **Recharts** - Data visualization library
- **Axios** - HTTP client (via fetch API)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **OpenAI API** - GPT-4 for property analysis

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)
- OpenAI API key

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Real Estate"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: Replace `your_openai_api_key_here` with your actual OpenAI API key. You can get one from [OpenAI Platform](https://platform.openai.com/api-keys).

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system. If installed locally:

```bash
# On macOS (using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# Or use MongoDB Atlas cloud database
```

## 🚀 Running the Application

### Terminal 1 - Backend Server

```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:5000`

### Terminal 2 - Frontend Development Server

```bash
cd frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`

## 📖 Usage Guide

### Adding a Property

1. Fill in the property form with:
   - Location (e.g., "New York, NY")
   - Property Type (Residential, Commercial, Condo, etc.)
   - Size in square feet
   - Price in USD
   - Optional: Bedrooms, Bathrooms, Year Built

2. Click "Add Property" to save the listing

### Analyzing a Property

1. Find the property in the property list
2. Click "Analyze with AI" button
3. Wait for the AI analysis to complete (typically 5-10 seconds)
4. View detailed insights including:
   - Market value estimation
   - Recommended listing price
   - Price adjustment percentage
   - Confidence level
   - Detailed market insights

### Viewing Comparative Analysis

1. Analyze multiple properties
2. Navigate to the "Comparative Market Analysis" section
3. Switch between different chart types:
   - **Price Comparison**: Bar chart comparing listed price, market value, and recommended price
   - **Price per Sqft**: Line chart showing price per square foot trends
   - **Price Adjustment**: Bar chart showing percentage adjustments needed

### Viewing Property Details

1. Click on any property card to select it
2. View detailed information and AI analysis in the property details section

## 📁 Project Structure

```
Real Estate/
├── backend/
│   ├── models/
│   │   └── Property.js          # MongoDB schema
│   ├── routes/
│   │   ├── properties.js        # Property CRUD routes
│   │   └── analysis.js          # AI analysis routes
│   ├── services/
│   │   └── openaiService.js     # OpenAI API integration
│   ├── server.js                # Express server setup
│   ├── package.json
│   └── .env                     # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── PropertyForm.js      # Property input form
│   │   │   ├── PropertyList.js      # Property listing display
│   │   │   ├── PropertyCard.js      # Individual property card
│   │   │   ├── PropertyDetails.js   # Detailed property view
│   │   │   └── AnalysisChart.js     # Comparative charts
│   │   ├── App.js                   # Main app component
│   │   ├── App.css
│   │   └── index.js                 # React entry point
│   └── package.json
│
└── README.md
```

## 🔑 API Endpoints

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create new property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Analysis
- `POST /api/analysis/:id` - Analyze property with AI
- `GET /api/analysis/comparative` - Get comparative market data

## 🎨 Features in Detail

### AI Analysis Includes:
- **Market Value Estimation**: AI analyzes comparable properties
- **Price Recommendations**: Suggests optimal listing price
- **Adjustment Percentage**: Shows if price should be increased or decreased
- **Confidence Level**: High/Medium/Low confidence in analysis
- **Market Insights**: Detailed written analysis
- **Comparative Notes**: Notes about similar properties

### Charts Include:
- **Price Comparison Bar Chart**: Visual comparison of listed, market, and recommended prices
- **Price per Square Foot Line Chart**: Trends across properties
- **Price Adjustment Bar Chart**: Percentage adjustments needed
- **Interactive Tooltips**: Hover for detailed information
- **Responsive Design**: Works on all screen sizes

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod --version`
- Check connection string in `.env` file
- For MongoDB Atlas, ensure IP is whitelisted

### OpenAI API Errors
- Verify API key is correct in `.env`
- Check API key has sufficient credits
- Ensure internet connection is active
- Fallback analysis will be provided if API fails

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: React will prompt to use different port

## 📸 Demo Screenshots

The application includes:
- Property input form
  <img width="2808" height="1472" alt="image" src="https://github.com/user-attachments/assets/bffe05b6-647a-4975-902f-f176b3d3ce0a" />

- Property listing cards
  <img width="2810" height="1332" alt="image" src="https://github.com/user-attachments/assets/f3eb1bf0-ae95-4e61-ad50-3a1ec656cd27" />

- AI analysis results
  <img width="1086" height="1516" alt="image" src="https://github.com/user-attachments/assets/f642da06-3f5e-492f-b054-f155139875aa" />

- Comparative market analysis charts
  <img width="2744" height="1542" alt="image" src="https://github.com/user-attachments/assets/4756a607-bf81-4584-b7f9-b781438a4930" />

- Detailed property insights

## 🔒 Environment Variables

Create a `.env` file in the `backend` directory with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=sk-...
```

**Important**: Never commit `.env` files to version control. The `.gitignore` files are configured to exclude them.

## 🚀 Deployment

### Backend Deployment (Heroku/Netlify/Vercel)
1. Set environment variables in deployment platform
2. Update `MONGODB_URI` to production database
3. Deploy backend

### Frontend Deployment
1. Build production bundle: `npm run build`
2. Deploy `build` folder to hosting service
3. Update API endpoint URLs if needed

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue in the GitHub repository.

## 🎯 Future Enhancements

- User authentication
- Save favorite properties
- Export analysis reports
- Email notifications
- Historical price tracking
- Neighborhood comparisons
- Integration with real estate APIs

---

**Built with ❤️ using MERN Stack and OpenAI**

