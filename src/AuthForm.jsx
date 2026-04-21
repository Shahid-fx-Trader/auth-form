import React, { useState } from "react";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [users, setUsers] = useState({});

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginErrors, setLoginErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [signupErrors, setSignupErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setLoginErrors({});
    setSignupErrors({});
    setLoginSuccess(false);
    setSignupSuccess(false);
  };

  const handleLogin = () => {
    const errors = {};
    setLoginSuccess(false);

    if (!loginEmail || !/\S+@\S+\.\S+/.test(loginEmail)) {
      errors.email = "Please enter a valid email.";
    }
    if (!loginPass) {
      errors.pass = "Password is required.";
    }
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    if (users[loginEmail] && users[loginEmail] === loginPass) {
      setLoginSuccess(true);
      setLoginEmail("");
      setLoginPass("");
      setLoginErrors({});
    } else {
      setLoginErrors({
        pass: "Invalid email or password. Please signup first.",
      });
    }
  };

  const handleSignup = () => {
    const errors = {};
    setSignupSuccess(false);

    if (!signupEmail || !/\S+@\S+\.\S+/.test(signupEmail)) {
      errors.email = "Please enter a valid email.";
    }
    if (signupPass.length < 6) {
      errors.pass = "Password must be at least 6 characters.";
    }
    if (signupPass !== signupConfirm) {
      errors.confirm = "Passwords do not match.";
    }
    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      return;
    }

    if (users[signupEmail]) {
      setSignupErrors({ email: "Email already registered. Please login." });
      return;
    }

    setUsers((prev) => ({ ...prev, [signupEmail]: signupPass }));
    setSignupSuccess(true);
    setSignupEmail("");
    setSignupPass("");
    setSignupConfirm("");
    setSignupErrors({});

    setTimeout(() => switchTab("login"), 1800);
  };

  return (
    <div className="bg-cyan-700 min-h-screen flex justify-center items-center">
      <div className="w-[430px] bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Tabs */}
        <div className="flex bg-blue-300 px-5 pt-4 gap-1">
          <button
            onClick={() => switchTab("login")}
            className={`flex-1 py-3 rounded-t-xl text-2xl font-semibold transition-all duration-200 ${
              activeTab === "login"
                ? "bg-white text-cyan-700"
                : "text-white hover:bg-white/20"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchTab("signup")}
            className={`flex-1 py-3 rounded-t-xl text-2xl font-semibold transition-all duration-200 ${
              activeTab === "signup"
                ? "bg-white text-cyan-700"
                : "text-white hover:bg-white/20"
            }`}
          >
            SignUp
          </button>
        </div>

        <div className="px-10 py-9">
          {/* LOGIN PANEL */}
          {activeTab === "login" && (
            <div>
              {loginSuccess && (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-xl px-4 py-3 mb-5 text-sm">
                  ✅ Login successful! Welcome back.
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-3xl font-light text-slate-800 mb-2">
                  Email
                </h2>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full border-b border-slate-300 focus:border-cyan-400 outline-none py-2 px-1 text-sm text-slate-600 placeholder-slate-400 bg-transparent"
                />
                {loginErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginErrors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-light text-slate-800 mb-2">
                  Password
                </h2>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full border-b border-slate-300 focus:border-cyan-400 outline-none py-2 px-1 text-sm text-slate-600 placeholder-slate-400 bg-transparent"
                />
                {loginErrors.pass && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginErrors.pass}
                  </p>
                )}
              </div>

              <button
                onClick={handleLogin}
                className="w-full py-3.5 bg-cyan-300 hover:bg-cyan-400 active:scale-95 rounded-2xl text-lg font-semibold text-slate-800 transition-all duration-200 mt-2"
              >
                Submit
              </button>

              <p className="text-center mt-5 text-sm text-slate-500">
                Are you not a member?{" "}
                <span
                  onClick={() => switchTab("signup")}
                  className="text-cyan-600 font-bold underline cursor-pointer hover:text-cyan-800"
                >
                  SignUp
                </span>
              </p>
            </div>
          )}

          {/* SIGNUP PANEL */}
          {activeTab === "signup" && (
            <div>
              {signupSuccess && (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-xl px-4 py-3 mb-5 text-sm">
                  🎉 Account created! Redirecting to login...
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-3xl font-light text-slate-800 mb-2">
                  Email
                </h2>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full border-b border-slate-300 focus:border-cyan-400 outline-none py-2 px-1 text-sm text-slate-600 placeholder-slate-400 bg-transparent"
                />
                {signupErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {signupErrors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-light text-slate-800 mb-2">
                  Password
                </h2>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={signupPass}
                  onChange={(e) => setSignupPass(e.target.value)}
                  className="w-full border-b border-slate-300 focus:border-cyan-400 outline-none py-2 px-1 text-sm text-slate-600 placeholder-slate-400 bg-transparent"
                />
                {signupErrors.pass && (
                  <p className="text-red-500 text-xs mt-1">
                    {signupErrors.pass}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-light text-slate-800 mb-2">
                  Confirm Password
                </h2>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  value={signupConfirm}
                  onChange={(e) => setSignupConfirm(e.target.value)}
                  className="w-full border-b border-slate-300 focus:border-cyan-400 outline-none py-2 px-1 text-sm text-slate-600 placeholder-slate-400 bg-transparent"
                />
                {signupErrors.confirm && (
                  <p className="text-red-500 text-xs mt-1">
                    {signupErrors.confirm}
                  </p>
                )}
              </div>

              <button
                onClick={handleSignup}
                className="w-full py-3.5 bg-cyan-300 hover:bg-cyan-400 active:scale-95 rounded-2xl text-lg font-semibold text-slate-800 transition-all duration-200 mt-2"
              >
                SignUp
              </button>

              <p className="text-center mt-5 text-sm text-slate-500">
                Already a member?{" "}
                <span
                  onClick={() => switchTab("login")}
                  className="text-cyan-600 font-bold underline cursor-pointer hover:text-cyan-800"
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
