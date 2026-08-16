import React from "react";
import { Wallet, Mail, Lock, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const {
    register,
    getValues,
    reset,
    errors,
    isValid,
    handleLogin,
    handleSubmit,
  } = useAuth();
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
              <Wallet size={22} className="text-slate-950" />
            </div>

            <NavLink to="/">
              <span className="text-xl font-bold tracking-tight">
                Finance<span className="text-emerald-400">Flow</span>
              </span>
            </NavLink>
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back</h1>

            <p className="mt-2 text-sm text-slate-400">
              Login to manage your finances
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("email", { required: "email is required" })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-300">
                  Password
                </label>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              className="text-xs text-emerald-400 hover:text-emerald-300"
            >
              Forgot password?
            </button>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Login
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <NavLink to="/register">
              <button className="font-medium text-emerald-400 hover:text-emerald-300">
                Create account
              </button>
            </NavLink>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Manage better. Spend smarter. Build your future.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
