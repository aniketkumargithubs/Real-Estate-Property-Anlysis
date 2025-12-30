# Quick Setup Guide

## Step 1: Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Replace `your_openai_api_key_here` with your actual OpenAI API key from https://platform.openai.com/api-keys

## Step 2: Frontend Setup

1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

## Step 3: Start MongoDB

Make sure MongoDB is running on your system. If you don't have MongoDB installed:

**Option A: Local Installation**
- Install MongoDB Community Edition
- Start the service:
  - macOS: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`
  - Windows: Start MongoDB service from Services panel

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Update `MONGODB_URI` in `.env` file

## Step 4: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will open at http://localhost:3000

## Troubleshooting

- **MongoDB connection error**: Ensure MongoDB is running or check your connection string
- **OpenAI API error**: Verify your API key is correct and has credits
- **Port already in use**: Change PORT in `.env` or let React suggest alternative port

