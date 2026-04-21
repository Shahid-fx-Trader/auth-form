# 🔐 Auth Form

A modern, fully functional Authentication UI built with **React** and **Tailwind CSS**.  
Clean design with Login & SignUp flow, form validation, and in-memory user management.

---

## 📸 Preview

<img width="1600" height="769" alt="image" src="https://github.com/user-attachments/assets/66b7ddc8-3a14-4711-8cf6-2aac8c3aed8b" />

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
auth-form/<b>
├── public/<b>
│   └── preview.png<b>
├── src/<b>
│   ├── components/<b>
│   │   └── AuthForm.jsx      # Main auth component<b>
│   ├── App.jsx               # Root component<b>
│   ├── main.jsx              # Entry point<b>
│   └── index.css             # Tailwind imports<b>
├── index.html<b>
├── tailwind.config.js<b>
├── vite.config.js<b>
└── README.md<b>

---

## ⚙️ How It Works<b>

User visits app<b>
│<b>
▼<b>
[ Login Tab ]  ←──────────────────────┐<b>
│                                  │<b>
Enter Email                            │<b>
Enter Password                         │<b>
│                                  │<b>
✅ Valid? ──► Login Success            │<b>
❌ Invalid? ──► Show Error             │<b>
│<b>
"Not a member? SignUp" ──────────────► │<b>
│<b>
[ SignUp Tab ]                         │<b>
│                                  │<b>
Enter Email                            │<b>
Enter Password                         │<b>
Confirm Password                       │<b>
│                                  │<b>
✅ Valid? ──► Account Created ─────────┘<b>
Auto redirect (1.8s)<b>
❌ Invalid? ──► Show Error<b>
---
<b>
## 🧠 Component State Overview<b>

| State | Type | Purpose |<b>
|---|---|---|<b>
| `activeTab` | String | Tracks current tab (login/signup) |<b>
| `users` | Object | In-memory user database |<b>
| `loginEmail` | String | Login email input value |<b>
| `loginPass` | String | Login password input value |<b>
| `loginErrors` | Object | Login field error messages |<b>
| `loginSuccess` | Boolean | Login success flag |<b>
| `signupEmail` | String | Signup email input value |<b>
| `signupPass` | String | Signup password input value |<b>
| `signupConfirm` | String | Confirm password input value |<b>
| `signupErrors` | Object | Signup field error messages |<b>
| `signupSuccess` | Boolean | Signup success flag |<b>

---

## ⚠️ Important Note
<b>
> User data is stored **in-memory only**.  <b>
> Data will reset on page refresh.  <b>
> For production use, integrate a backend (Node.js, Firebase, Supabase, etc.) or `localStorage`.<b>

---

## 🔮 Future Improvements<b>

- [ ] Connect to a real backend / database<b>
- [ ] Add JWT authentication<b>
- [ ] Add "Forgot Password" flow<b>
- [ ] Add Google / GitHub OAuth<b>
- [ ] Add dark mode support<b>
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
