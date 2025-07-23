Chatrix 🔥
A modern, full‑stack real‑time chat application built with React, Zustand, Tailwind CSS, Node.js, Express, MongoDB, and Socket.io.

🧩 Features
Real-time messaging with typing indicators and message broadcasting using Socket.io

User authentication with JWT and secure login/register flows

Modern UI built using React, Zustand for state management, and Tailwind CSS + DaisyUI

Persistent storage with MongoDB for users and chat history

Online/offline presence, showing active users in real time

🛠️ Tech Stack
Layer	Technology
Frontend	React, Zustand, Tailwind CSS, DaisyUI
Backend	Node.js, Express, Socket.io
Database	MongoDB
Auth	JWT, bcrypt
Dev Tools	Docker (optional), nodemon, ESLint

🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/NeerajKumar1001/Chatrix-fullstack-chat-app.git
cd Chatrix-fullstack-chat-app
2. Backend setup
bash
Copy
Edit
cd Backend
npm install
Create a .env file with:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Then start the backend:

bash
Copy
Edit
npm run dev
3. Frontend setup
bash
Copy
Edit
cd ../Frontend
npm install
npm start
Your frontend should now be running at http://localhost:3000, communicating with the backend.

🧪 Usage
Register/login a new user

Start chatting: Select a user from the list to initiate a conversation – messages are sent in real time

Typing indicator and online status give live feedback on user actions

💡 Folder Structure
css
Copy
Edit
/Backend
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middlewares/
  └── server.js

/Frontend
  ├── src/
      ├── components/
      ├── pages/
      ├── store/        ← Zustand state logic
      └── App.jsx
📦 Optional: Docker Setup
In the project root, run:

bash
Copy
Edit
docker-compose up --build
Visit http://localhost:3000 to use the app; backend runs on its own container.

🔜 Roadmap
Group chat support

File/image/video sharing

Read receipts and ability to edit/delete messages

Deployment scripts (Heroku, AWS, etc.)

Tests: Unit, integration, and E2E

🤝 Contributing
Contributions are welcome:

Fork the repository

Create a feature branch (git checkout -b feat/my-feature)

Commit your changes (git commit -m "feat: My feature")

Push to your branch (git push origin feat/my-feature)

Open a pull request describing your changes

📄 License
MIT © Neeraj Kumar

