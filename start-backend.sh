#!/bin/bash

# Start Backend Server
echo "🚀 Starting Backend Server..."
cd "$(dirname "$0")/backend"

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "📝 Creating .env file template..."
    cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
OPENAI_API_KEY=your_openai_api_key_here
EOF
    echo "✅ .env file created! Please update OPENAI_API_KEY with your actual key."
fi

# Start server
npm start

