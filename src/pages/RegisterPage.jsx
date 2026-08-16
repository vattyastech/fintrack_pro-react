import React from "react";
import { Wallet, User, Mail, Lock, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const {
    register,
    getValues,
    reset,
    errors,
    isValid,
    handleRegister,
    handleSubmit,
  } = useAuth();
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-10">
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

        {/* Register Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create Account</h1>

            <p className="mt-2 text-sm text-slate-400">
              Start managing your finances today
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("name", {
                    required: "name is required",
                    minLength: {
                      value: 3,
                      message: "name must be have 3 cher.",
                    },
                  })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.name && (
                  <p className="text-red-500"> {errors.name.message}</p>
                )}
              </div>
            </div>

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
                  {...register("email", {
                    required: "email  is required",
                    minLength: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.email && (
                  <p className="text-red-500"> {errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("password", {
                    required: "password is requires",
                    minLength: {
                      value: 6,
                      message: "password must be 6 cherector",
                    },
                  })}
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.password && (
                  <p className="text-red-500"> {errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Password Do not Match",
                  })}
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-emerald-500"
              />

              <p className="text-xs leading-5 text-slate-400">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Terms & Conditions
                </button>{" "}
                and Privacy Policy.
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <NavLink to="/login">
              <button
                type="button"
                className="font-medium text-emerald-400 hover:text-emerald-300"
              >
                Login
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

export default RegisterPage;
