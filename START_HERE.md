# 🚀 START HERE - Quick Setup Guide

## ✅ What's Already Done

- ✅ Backend dependencies installed
- ✅ Frontend dependencies installed
- ✅ MongoDB detected on your system
- ✅ Project structure verified

## 🔧 Final Setup Steps

### Step 1: Create .env File (IMPORTANT!)

1. Navigate to `backend` folder
2. Create a file named `.env` (if it doesn't exist)
3. Add this content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=your_openai_api_key_here
```

**Replace `your_openai_api_key_here` with your actual OpenAI API key:**
- Get your key from: https://platform.openai.com/api-keys
- It should start with `sk-`

### Step 2: Start MongoDB (if not running)

```bash
# Check if MongoDB is running
brew services list | grep mongodb

# If not running, start it:
brew services start mongodb-community
```

**OR use MongoDB Atlas (Cloud - Easier!):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env` file

### Step 3: Start the Application

**Option A: Use Helper Scripts (Easiest)**

Terminal 1:
```bash
chmod +x start-backend.sh
./start-backend.sh
```

Terminal 2:
```bash
chmod +x start-frontend.sh
./start-frontend.sh
```

**Option B: Manual Start**

Terminal 1 - Backend:
```bash
cd backend
npm start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

### Step 4: Use the App!

1. Browser will open at http://localhost:3000
2. Add your first property
3. Click "Analyze with AI"
4. View comparative charts!

---

## 📝 Quick Checklist

- [ ] Created `.env` file in `backend/` folder
- [ ] Added your OpenAI API key to `.env`
- [ ] MongoDB is running (local or Atlas)
- [ ] Backend server started (Terminal 1)
- [ ] Frontend server started (Terminal 2)
- [ ] Browser opened to http://localhost:3000

---

## 🆘 Need Help?

Check these files:
- `HOW_TO_USE.md` - Complete usage guide
- `README.md` - Full documentation
- `SETUP.md` - Setup instructions

---

## 🎯 Ready to Go!

Everything is installed and ready. Just:
1. Add your OpenAI API key to `.env`
2. Start MongoDB
3. Run both servers
4. Start analyzing properties! 🏠✨

