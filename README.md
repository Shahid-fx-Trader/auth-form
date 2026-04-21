# 🔐 Auth Form

A modern, fully functional Authentication UI built with **React** and **Tailwind CSS**.  
Clean design with Login & SignUp flow, form validation, and in-memory user management.

---

## 📸 Preview

![Auth Form Preview](.<img width="1600" height="769" alt="image" src="https://github.com/user-attachments/assets/66b7ddc8-3a14-4711-8cf6-2aac8c3aed8b" />
)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔄 Tab Switching | Smooth Login ↔ SignUp toggle |
| ✅ Validation | Email format, password length, confirm match |
| 💾 User Store | In-memory signup & login verification |
| ❌ Error Messages | Real-time field-level error display |
| 🎉 Success Banners | Feedback on successful login / signup |
| ↩️ Auto Redirect | Redirects to Login after SignUp (1.8s) |
| 📱 Responsive | Works on all screen sizes |

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/auth-form.git

# 2. Go into the project directory
cd auth-form

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
## 📁 Project Structure
auth-form/
├── public/
│   └── preview.png
├── src/
│   ├── components/
│   │   └── AuthForm.jsx      # Main auth component
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind imports
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md

---

## ⚙️ How It Works

User visits app
│
▼
[ Login Tab ]  ←──────────────────────┐
│                                  │
Enter Email                            │
Enter Password                         │
│                                  │
✅ Valid? ──► Login Success            │
❌ Invalid? ──► Show Error             │
│
"Not a member? SignUp" ──────────────► │
│
[ SignUp Tab ]                         │
│                                  │
Enter Email                            │
Enter Password                         │
Confirm Password                       │
│                                  │
✅ Valid? ──► Account Created ─────────┘
Auto redirect (1.8s)
❌ Invalid? ──► Show Error
---

## 🧠 Component State Overview

| State | Type | Purpose |
|---|---|---|
| `activeTab` | String | Tracks current tab (login/signup) |
| `users` | Object | In-memory user database |
| `loginEmail` | String | Login email input value |
| `loginPass` | String | Login password input value |
| `loginErrors` | Object | Login field error messages |
| `loginSuccess` | Boolean | Login success flag |
| `signupEmail` | String | Signup email input value |
| `signupPass` | String | Signup password input value |
| `signupConfirm` | String | Confirm password input value |
| `signupErrors` | Object | Signup field error messages |
| `signupSuccess` | Boolean | Signup success flag |

---

## ⚠️ Important Note

> User data is stored **in-memory only**.  
> Data will reset on page refresh.  
> For production use, integrate a backend (Node.js, Firebase, Supabase, etc.) or `localStorage`.

---

## 🔮 Future Improvements

- [ ] Connect to a real backend / database
- [ ] Add JWT authentication
- [ ] Add "Forgot Password" flow
- [ ] Add Google / GitHub OAuth
- [ ] Add dark mode support
- [ ] Add loading spinner on submit

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

## 👨‍💻 Author

**Your Name**  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_USERNAME)

---

<p align="center">Made with ❤️ using React + Tailwind CSS</p>
