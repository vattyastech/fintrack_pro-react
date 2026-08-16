import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ArrowDownToLine,
  ArrowUpFromLine,
  WalletCards,
  Target,
  ReceiptText,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-64 border-r border-white/10 bg-slate-950 lg:block">
      <div className="flex h-full flex-col px-4 py-6">
        {/* Main Navigation */}
        <div>
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            Overview
          </p>

          <nav className="space-y-1">
            <NavLink to="/dashboard" end>
              {({ isActive }) => (
                <SidebarItem
                  icon={<LayoutDashboard size={19} />}
                  label="Dashboard"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="/dashboard/transection">
              {({ isActive }) => (
                <SidebarItem
                  icon={<ReceiptText size={19} />}
                  label="Transactions"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="/dashboard/income">
              {({ isActive }) => (
                <SidebarItem
                  icon={<ArrowDownToLine size={19} />}
                  label="Income"
                  active={isActive}
                />
              )}
            </NavLink>

            <NavLink to="/dashboard/expance">
              {({ isActive }) => (
                <SidebarItem
                  icon={<ArrowUpFromLine size={19} />}
                  label="Expenses"
                  active={isActive}
                />
              )}
            </NavLink>
          </nav>
        </div>

        {/* Planning */}
        <div className="mt-8">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            Planning
          </p>

          <nav className="space-y-1">
            
                <SidebarItem
                  icon={<WalletCards size={19} />}
                  label="Budgets"
                  
                />
            
            
              
                <SidebarItem
                  icon={<Target size={19} />}
                  label="Financial Goal"
                 
                />
             
           
            
             
                <SidebarItem
                  icon={<BarChart3 size={19} />}
                  label="Reports"
                  
                />
             
            
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-auto">
          <div className="mb-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
            <p className="text-sm font-semibold text-white">Stay on track</p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Keep tracking your finances to build better money habits.
            </p>
          </div>

          <NavLink to="/dashboard/setting">
            {({ isActive }) => (
              <SidebarItem
                icon={<Settings size={19} active={isActive} />}
                label="Settings"
              />
            )}
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active = false }) => {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-emerald-500 text-slate-950"
          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
};

export default Sidebar;
