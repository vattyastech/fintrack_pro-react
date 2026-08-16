import React from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Wallet,
  Target,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useAuth } from "../hooks/useAuth";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";
import { useTransection } from "../hooks/useTransection";

const Dashboard = () => {
    
  const {transection, balance,totalExpance,filteredTransections,totalIncome,monthlyData,expenseCategoryData }= useTransection();

  console.log(expenseCategoryData)
  // -------------------------
  // Demo Data
  // -------------------------

  const overviewData = [
    {
      title: "Total Balance",
      amount: `₹${balance.toLocaleString()}`,
      change: "+8.2%",
      text: "from last month",
      icon: <Wallet size={21} />,
      iconStyle: "bg-emerald-400/10 text-emerald-400",
    },
    {
      title: "Total Income",
      amount: `₹${totalIncome.toLocaleString()}`,
      change: "+12.5%",
      text: "from last month",
      icon: <ArrowDownToLine size={21} />,
      iconStyle: "bg-blue-400/10 text-blue-400",
    },
    {
      title: "Total Expenses",
      amount: `₹${totalExpance.toLocaleString()}`,
      change: "-4.2%",
      text: "from last month",
      icon: <ArrowUpFromLine size={21} />,
      iconStyle: "bg-orange-400/10 text-orange-400",
    },
    
  ];

 
  
  const recentTransactions=  transection.slice(-5).reverse();

  const goals = [
    {
      name: "Emergency Fund",
      current: 45000,
      target: 100000,
    },
    {
      name: "New Laptop",
      current: 62000,
      target: 80000,
    },
    {
      name: "Vacation",
      current: 28000,
      target: 60000,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <WeatherCard/>
        <p className="mt-2 text-sm text-slate-400">
          Here's an overview of your financial activity.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {overviewData.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20"
          >
            <div className="flex items-start justify-between">

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconStyle}`}
              >
                {item.icon}
              </div>

              <button className="text-slate-600 hover:text-white">
                <MoreHorizontal size={19} />
              </button>

            </div>

            <p className="mt-5 text-sm text-slate-400">
              {item.title}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              {item.amount}
            </h2>

            <p className="mt-2 text-xs">
              <span
                className={
                  item.change.startsWith("-")
                    ? "text-red-400"
                    : "text-emerald-400"
                }
              >
                {item.change}
              </span>{" "}
              <span className="text-slate-500">
                {item.text}
              </span>
            </p>
          </div>
        ))}

      </div>
<div>
</div>
      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* Income Expense Chart */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">
                Income & Expenses
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your financial activity over the last 6 months
              </p>
            </div>

            <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 hover:bg-white/5">
              Last 6 months
            </button>
          </div>

          <div className="mt-6 h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>

                <defs>
                  <linearGradient
                    id="incomeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#34d399"
                      stopOpacity={0.25}
                    />

                    <stop
                      offset="95%"
                      stopColor="#34d399"
                      stopOpacity={0}
                    />
                  </linearGradient>

                  <linearGradient
                    id="expenseGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#fb923c"
                      stopOpacity={0.2}
                    />

                    <stop
                      offset="95%"
                      stopColor="#fb923c"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff10"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #ffffff15",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value) => `₹${value.toLocaleString()}`}
                />

                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#34d399"
                  strokeWidth={2}
                  fill="url(#incomeGradient)"
                />

                <Area
                  type="monotone"
                  dataKey="expense"
                  stroke="#fb923c"
                  strokeWidth={2}
                  fill="url(#expenseGradient)"
                />

              </AreaChart>
            </ResponsiveContainer>

          </div>

          {/* Legend */}
          <div className="mt-3 flex gap-6 text-xs text-slate-400">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Income
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Expenses
            </div>

          </div>

        </div>

        {/* Expense Distribution */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

          <div>
            <h2 className="font-semibold text-white">
              Expense Breakdown
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Where your money is going
            </p>
          </div>

          <div className="relative mt-4 h-[220px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={expenseCategoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {expenseCategoryData?.map((_, index) => (
                    <Cell
                      key={index}
                      fill={[
                        "#34d399",
                        "#60a5fa",
                        "#fb923c",
                        "#a78bfa",
                        "#f472b6",
                      ][index]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #ffffff15",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value) => `₹${value.toLocaleString()}`}
                />

              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs text-slate-500">
                  Total
                </p>

                <p className="text-lg font-bold text-white">
                  ₹28,450
                </p>
              </div>
            </div>

          </div>

          <div className="space-y-3">

            {expenseCategoryData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: [
                        "#34d399",
                        "#60a5fa",
                        "#fb923c",
                        "#a78bfa",
                        "#f472b6",
                      ][index],
                    }}
                  />

                  <span className="text-slate-400">
                    {item.name}
                  </span>
                </div>

                <span className="font-medium text-white">
                  ₹{item.value.toLocaleString()}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Transactions + Goals */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* Transactions */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] xl:col-span-2">

          <div className="flex items-center justify-between border-b border-white/10 p-5">

            <div>
              <h2 className="font-semibold text-white">
                Recent Transactions
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your latest financial activity
              </p>
            </div>

            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              View all
            </button>

          </div>

          <div className="divide-y divide-white/10">

            {recentTransactions.map((transaction) => (
              <div
                key={`${transaction.title}-${transaction.date}`}
                className="flex items-center justify-between gap-4 p-5"
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      transaction.type === "income"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-orange-400/10 text-orange-400"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowDownToLine size={18} />
                    ) : (
                      <ArrowUpFromLine size={18} />
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {transaction.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>

                </div>

                <p
                  className={`text-sm font-semibold ${
                    transaction.type === "income"
                      ? "text-emerald-400"
                      : "text-white"
                  }`}
                >
                  {transaction.amount}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Goals */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="font-semibold text-white">
                Financial Goals
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Keep moving forward
              </p>
            </div>

            <Target
              size={20}
              className="text-emerald-400"
            />

          </div>

          <div className="mt-6 space-y-6">

            {goals.map((goal) => {

              const percentage = Math.round(
                (goal.current / goal.target) * 100
              );

              return (
                <div key={goal.name}>

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-slate-300">
                      {goal.name}
                    </p>

                    <span className="text-xs text-emerald-400">
                      {percentage}%
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                  <div className="mt-2 flex justify-between text-xs text-slate-500">

                    <span>
                      ₹{goal.current.toLocaleString()}
                    </span>

                    <span>
                      ₹{goal.target.toLocaleString()}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

          <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
            Manage Goals
          </button>

        </div>

      </div>

      {/* Savings Insight */}
      <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-5">
        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <TrendingUp size={21} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              You're doing great!
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              You saved approximately 56% of your income this month.
              Keep maintaining your spending habits to reach your
              financial goals faster.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;