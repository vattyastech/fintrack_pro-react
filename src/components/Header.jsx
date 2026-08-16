import React from "react";
import {
  Wallet,
  Search,
  LogOut,
  User,
  Bell,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const {handleLogOut,loggedIn}= useAuth();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
            <Wallet size={20} className="text-slate-950" />
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Finance<span className="text-emerald-400">Flow</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden w-full max-w-md md:block">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400/50 focus:bg-white/[0.06]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Notification */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Bell size={19} />
          </button>

          {/* User */}
          <div className="hidden items-center gap-3 border-l border-white/10 pl-4 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
              <User size={18} />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-medium text-white">
                {loggedIn.name}
              </p>

              <p className="text-xs text-slate-500">
                Personal Account
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
          onClick={handleLogOut}
            type="button"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400"
          >
            <LogOut size={17} />
            <span className="hidden sm:inline">
              Logout
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t border-white/10 px-4 py-3 md:hidden">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/50"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;