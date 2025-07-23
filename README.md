# Chatrix 🔥

A modern, full‑stack real‑time chat application built with React, Zustand, Tailwind CSS, Node.js, Express, MongoDB, and Socket.io.

Preview:- https://chatrix-fullstack-chat-app.onrender.com/

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
```
2. Backend setup
  ```bash   
  cd Backend
  npm instal
  ```
  Create a .env file with:
  ```bash
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```
  Then start the backend:
  ```bash
  npm run dev
  ```

3. Frontend setup
 ```bash
   cd ../Frontend
   npm install
   npm start
   ```

💡 Folder Structure
```bash
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
```

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






