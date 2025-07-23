# Chatrix 🔥

A modern, full‑stack real‑time chat application built with React, Zustand, Tailwind CSS, Node.js, Express, MongoDB, and Socket.io.

---

## 🧩 Features

- **Real-time messaging** with typing indicators and message broadcasting using Socket.io  
- **User authentication** with JWT and secure login/register flows  
- **Modern UI** built using React, Zustand for state management, and Tailwind CSS + DaisyUI  
- **Persistent storage** with MongoDB for users and chat history  
- **Online/offline presence**, showing active users in real time  

---

## 🛠️ Tech Stack

| Layer       | Technology                                            |
|-------------|-------------------------------------------------------|
| Frontend    | React, Zustand, Tailwind CSS, DaisyUI                |
| Backend     | Node.js, Express, Socket.io                           |
| Database    | MongoDB                                               |
| Auth        | JWT, bcrypt                                           |
| Dev Tools   | Docker (optional), nodemon, ESLint                    |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/NeerajKumar1001/Chatrix-fullstack-chat-app.git
cd Chatrix-fullstack-chat-app
2. Backend setup
bash
Copy
Edit
cd Backend
npm install
Create a .env file with:

env
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


