import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Squirrel, Eye, EyeOff, Loader2, Lock, Mail, } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      toast.success("Logged in!");
    } catch (err) {
      toast.error("Failed to log in.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left panel */}
      <div className="bg-[#1a1a1a] flex flex-col justify-center items-center w-full mt-10 lg:w-1/2 h-[300px] lg:h-full px-6 py-10">
        <Squirrel className="text-white size-14" />
        <h1 className="text-4xl font-bold text-white mt-6 text-center">
          Welcome Back!
        </h1>
        <p className="text-lg text-white mt-2 text-center max-w-xs">
          Please login to your account
        </p>
      </div>

      {/* Right panel */}
      <div className="bg-[#1a1a1a] flex flex-col justify-center items-center w-full lg:w-1/2 h-full px-6 py-10">
        <div className="w-full max-w-[450px] text-white">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold mb-2">Login</h3>
            <p className="text-lg">Login to Start Chatting</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 size-5" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 size-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-white/40" />
                  ) : (
                    <Eye className="size-5 text-white/40" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Signup link */}
          <div className="text-center mt-6 text-base-content/60">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="link link-primary">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
