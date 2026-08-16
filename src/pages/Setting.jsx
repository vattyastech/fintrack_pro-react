import React, { useEffect } from "react";
import { User, Mail, Lock, Save } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Setting = () => {
  const { loggedIn, editUser, register, reset, errors,handleSubmit } = useAuth();

  useEffect(() => {
    if (loggedIn) {
      reset({
        name: loggedIn.name,
        email: loggedIn.email,
      });
    }
  }, [loggedIn, reset]);

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage your account details and security settings.
        </p>
      </div>

      {/* Profile Information */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            Profile Information
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Update your personal information.
          </p>
        </div>

        <form onSubmit={handleSubmit(editUser)}>
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("name")}
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:bg-white/[0.06]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  {...register("email")}
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/50 focus:bg-white/[0.06]"
                />
              </div>
            </div>

            {/* Save Profile */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.03] p-6">
        <h2 className="text-lg font-semibold text-white">Account</h2>

        <p className="mt-1 text-sm text-slate-500">
          Permanently remove your account and all associated data.
        </p>

        <button className="mt-5 rounded-xl border border-red-400/30 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-400/10">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Setting;
