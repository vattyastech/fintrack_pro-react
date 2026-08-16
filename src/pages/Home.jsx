import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  TrendingUp,
  Target,
  PieChart,
  ShieldCheck,
  Receipt,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
              <Wallet size={22} className="text-slate-950" />
            </div>
            <NavLink to="/">
              <span className="text-xl font-bold tracking-tight">
                Finance<span className="text-emerald-400">Flow</span>
              </span>
            </NavLink>
          </motion.div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <a href="#benefits" className="transition hover:text-white">
              Benefits
            </a>
          </div>
          <NavLink to="/login">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Get Started
            </motion.button>
          </NavLink>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32"
        >
          <motion.div variants={fadeInUp}>
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
            >
              <Sparkles size={16} />
              Smart way to manage your money
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Take control of your{" "}
              <span className="text-emerald-400">finances.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
            >
              FinanceFlow helps you track your income, control expenses, manage
              budgets and achieve your financial goals — all from one simple
              place.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Start Managing
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Features
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Easy to use
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Organized finances
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Better decisions
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-slate-950"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Financial Overview
                  </span>
                  <Wallet size={22} />
                </div>

                <p className="mt-8 text-sm opacity-80">
                  Your finances, simplified
                </p>
                <div className="mt-2 text-4xl font-bold">Stay in control</div>
              </motion.div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <TrendingUp size={20} />
                  </div>
                  <p className="mt-4 text-sm text-slate-400">Track Income</p>
                  <p className="mt-1 text-lg font-semibold">Monitor earnings</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Receipt size={20} />
                  </div>
                  <p className="mt-4 text-sm text-slate-400">Track Expenses</p>
                  <p className="mt-1 text-lg font-semibold">
                    Know where money goes
                  </p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="text-emerald-400" size={20} />
                    <span className="font-medium">Financial Goals</span>
                  </div>
                  <span className="text-sm text-emerald-400">
                    Stay consistent
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    className="h-full rounded-full bg-emerald-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="features" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Everything you need
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Manage your money with clarity
            </h2>
            <p className="mt-4 text-slate-400">
              Keep your financial life organized without complicated
              spreadsheets.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <FeatureCard
              icon={<Receipt />}
              title="Track Expenses"
              description="Record and organize your daily expenses so you always know where your money goes."
            />
            <FeatureCard
              icon={<TrendingUp />}
              title="Monitor Income"
              description="Keep your income sources organized and get a clear picture of your earnings."
            />
            <FeatureCard
              icon={<PieChart />}
              title="Understand Spending"
              description="See your spending patterns and identify areas where you can save more."
            />
            <FeatureCard
              icon={<Target />}
              title="Set Financial Goals"
              description="Create meaningful financial goals and stay focused on achieving them."
            />
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Simple workflow
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Your finances. One simple workflow.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                FinanceFlow gives you a simple system to understand your
                financial habits and make better decisions with your money.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-5"
            >
              <Step
                number="01"
                title="Add your income"
                text="Record your salary, business income or other sources of money."
              />
              <Step
                number="02"
                title="Track your expenses"
                text="Add daily expenses and organize them into useful categories."
              />
              <Step
                number="03"
                title="Plan your future"
                text="Create budgets and financial goals to build better money habits."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Make smarter financial decisions.
                </h2>
                <p className="mt-5 leading-7 text-slate-400">
                  When your income, expenses, budgets and goals are organized,
                  you can understand your financial habits and make decisions
                  with confidence.
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Start Your Journey
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Benefit
                  icon={<ShieldCheck />}
                  title="Stay Organized"
                  text="Keep all your financial information in one place."
                />
                <Benefit
                  icon={<PieChart />}
                  title="Know Your Spending"
                  text="Understand your spending habits clearly."
                />
                <Benefit
                  icon={<Target />}
                  title="Reach Your Goals"
                  text="Build habits that move you toward your goals."
                />
                <Benefit
                  icon={<Wallet />}
                  title="Take Control"
                  text="Make every financial decision more intentional."
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <Wallet size={18} className="text-emerald-400" />
            FinanceFlow
          </div>

          <p>Manage better. Spend smarter. Build your future.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-emerald-400/30 hover:bg-white/[0.05]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-slate-950">
        {React.cloneElement(icon, { size: 22 })}
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </motion.div>
  );
};

const Step = ({ number, title, text }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ x: 6 }}
      className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-bold text-emerald-400">
        {number}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
      </div>
    </motion.div>
  );
};

const Benefit = ({ icon, title, text }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
    >
      <div className="text-emerald-400">
        {React.cloneElement(icon, { size: 21 })}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </motion.div>
  );
};

export default Home;
