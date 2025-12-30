# How to Use - Real Estate Property Analysis

## 🚀 Quick Start Guide

### Prerequisites Check
Before starting, make sure you have:
- ✅ Node.js installed (v14 or higher)
- ✅ MongoDB running (local or Atlas account)
- ✅ OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

---

## 📦 Step 1: Installation

### Install Backend Dependencies
```bash
cd backend
npm install
```

### Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## ⚙️ Step 2: Configuration

### Create Backend Environment File
1. Navigate to `backend` folder
2. Create a file named `.env`
3. Add the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

**Important Notes:**
- Replace `mongodb://localhost:27017/realestate` with your MongoDB connection string
- For MongoDB Atlas (cloud): Use the connection string from your Atlas dashboard
- Replace `sk-your-actual-openai-api-key-here` with your real OpenAI API key

### MongoDB Setup Options

**Option A: Local MongoDB**
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows - Start MongoDB service from Services panel
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier available)
4. Get your connection string
5. Update `MONGODB_URI` in `.env` file

---

## 🎯 Step 3: Start the Application

### Terminal 1 - Start Backend Server
```bash
cd backend
npm start
```

You should see:
```
MongoDB connected successfully
Server is running on port 5000
```

### Terminal 2 - Start Frontend Server
```bash
cd frontend
npm start
```

The browser should automatically open at `http://localhost:3000`

If not, manually navigate to `http://localhost:3000`

---

## 📝 Step 4: Using the Application

### Adding a Property

1. **Fill in the Property Form:**
   - **Location** (Required): Enter property location (e.g., "New York, NY", "Los Angeles, CA")
   - **Property Type** (Required): Select from dropdown
     - Residential
     - Commercial
     - Condo
     - Townhouse
     - Luxury
   - **Size** (Required): Enter square footage (e.g., 2000)
   - **Price** (Required): Enter listing price in USD (e.g., 500000)
   - **Bedrooms** (Optional): Number of bedrooms
   - **Bathrooms** (Optional): Number of bathrooms
   - **Year Built** (Optional): Construction year

2. **Click "Add Property"**
   - The property will appear in the Property Listings section
   - It will be automatically selected

### Analyzing a Property with AI

1. **Find the property** in the Property Listings section
2. **Click "Analyze with AI"** button on the property card
3. **Wait for analysis** (takes 5-10 seconds)
4. **View results** in the Property Details section:
   - **Market Value**: AI-estimated market value
   - **Recommended Price**: Suggested listing price
   - **Price Adjustment**: Percentage change needed (+ means increase, - means decrease)
   - **Confidence Level**: High/Medium/Low
   - **Key Insights**: Detailed market analysis
   - **Comparative Notes**: Notes about similar properties

### Viewing Property Details

1. **Click on any property card** to select it
2. **View detailed information** in the Property Details panel:
   - All property information
   - Full AI analysis (if analyzed)
   - Market insights
   - Recommended actions

### Viewing Comparative Market Analysis

The chart section shows comparative analysis for all analyzed properties.

**Switch between chart types:**

1. **Price Comparison Chart** (Default)
   - Shows: Listed Price, Market Value, Recommended Price
   - Bar chart for easy comparison
   - Helps identify pricing opportunities

2. **Price per Sqft Chart**
   - Shows: Listed $/sqft vs Market $/sqft
   - Line chart showing trends
   - Useful for understanding value per square foot

3. **Price Adjustment Chart**
   - Shows: Percentage adjustment needed
   - Green bars = price increase recommended
   - Red bars = price decrease recommended

**Chart Summary** shows:
- Total number of analyzed properties
- Average market value
- Average price adjustment percentage

### Managing Properties

- **Delete Property**: Click "Delete" button on property card
- **Re-analyze**: Click "Re-analyze" button to get updated insights
- **View Multiple Properties**: Scroll through property list to see all properties

---

## 💡 Usage Tips

### Best Practices

1. **Add Multiple Properties**
   - Add at least 3-5 properties for meaningful comparative analysis
   - Mix different property types and locations

2. **Complete Property Information**
   - The more details you provide, the more accurate the AI analysis
   - Include bedrooms, bathrooms, and year built when available

3. **Analyze All Properties**
   - Analyze all properties to see full comparative market analysis
   - Charts are more meaningful with multiple data points

4. **Review Insights Carefully**
   - AI analysis considers location, size, and market trends
   - Use insights as guidance, not absolute truth
   - Confidence levels indicate reliability

### Understanding AI Analysis

- **Market Value**: AI's estimate based on comparable properties
- **Recommended Price**: Optimal listing price suggested by AI
- **Price Adjustment**: Percentage change from current price
  - Positive (+) = Price too low, consider increasing
  - Negative (-) = Price too high, consider decreasing
- **Confidence Level**:
  - High = Strong confidence in analysis
  - Medium = Moderate confidence
  - Low = Limited data or uncertain market

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
```
Error: MongoDB connection error
```
**Solution:**
- Check if MongoDB is running: `mongod --version`
- Verify connection string in `.env`
- For Atlas: Check IP whitelist and credentials

**OpenAI API Error**
```
Error: Failed to analyze property
```
**Solution:**
- Verify API key in `.env` file
- Check API key has sufficient credits
- Ensure internet connection is active
- Note: App provides fallback analysis if API fails

**Port Already in Use**
```
Error: Port 5000 already in use
```
**Solution:**
- Change `PORT=5000` to `PORT=5001` in `.env`
- Or stop the process using port 5000

### Frontend Issues

**Cannot Connect to Backend**
```
Error: Failed to fetch
```
**Solution:**
- Ensure backend server is running on port 5000
- Check `proxy` setting in `frontend/package.json`
- Verify backend URL is correct

**Charts Not Displaying**
**Solution:**
- Ensure at least one property has been analyzed
- Check browser console for errors
- Refresh the page

---

## 📊 Example Workflow

1. **Add Property 1**: "123 Main St, New York, NY" - 2000 sqft - $500,000
2. **Add Property 2**: "456 Oak Ave, Los Angeles, CA" - 1800 sqft - $600,000
3. **Add Property 3**: "789 Pine Rd, Chicago, IL" - 2200 sqft - $450,000
4. **Analyze All Properties**: Click "Analyze with AI" on each
5. **View Comparative Charts**: Switch between chart types
6. **Review Insights**: Check Property Details for each property
7. **Make Decisions**: Use AI recommendations for pricing strategy

---

## 🎓 Next Steps

After you're comfortable with the basics:

1. **Experiment with Different Properties**
   - Try various locations and property types
   - Compare residential vs commercial properties

2. **Use for Real Analysis**
   - Add actual property listings
   - Use insights for pricing decisions

3. **Export Data** (Manual for now)
   - Take screenshots of charts
   - Copy analysis insights

---

## ❓ Need Help?

- Check `README.md` for detailed documentation
- Review `SETUP.md` for setup instructions
- Check browser console for error messages
- Verify all environment variables are set correctly

---

**Enjoy analyzing properties with AI! 🏠✨**

