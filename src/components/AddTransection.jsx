import React, { useEffect, useState } from "react";
import { useTransection } from "../hooks/useTransection";

const AddTransection = ({ setIsOpenPopup }) => {
  const [type, setType] = useState("expense");

  const {
    register,
    reset,
    handleSubmit,
    errors,
    isValid,
    AddTransection,
    EditTransection,
    seletcedTransection,
    setSelectedTransection,
  } = useTransection();

  const typeRegister = register("type");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    typeRegister.onChange(e);
  };

  useEffect(() => {
    if (seletcedTransection) {
      setType(seletcedTransection.type);

      reset({
        type: seletcedTransection.type,
        amount: seletcedTransection.amount,
        date: seletcedTransection.date,
        title: seletcedTransection.title,
        category: seletcedTransection.category,
        description: seletcedTransection.description,
      });
    }
  }, [seletcedTransection, reset]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Transactions
          </h1>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Add your income and expenses
          </p>
        </div>
        <button
          onClick={() => setIsOpenPopup(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-700"
        >
          ✕
        </button>
        {/* Transaction Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white">
            Add Transaction
          </h2>

          {/* Type */}
          <form
            onSubmit={handleSubmit((data) => {
              if (seletcedTransection) {
                EditTransection(seletcedTransection.id, data);
                setIsOpenPopup(false);
              } else {
                AddTransection(data);
                setIsOpenPopup(false);
              }
            })}
            className=""
          >
            <div className="mb-5 grid grid-cols-2 gap-3">
              {/* Expense */}
              <label
                className={`cursor-pointer rounded-xl border px-4 py-3 text-center font-medium transition ${
                  type === "expense"
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
                }`}
              >
                <input
                  {...typeRegister}
                  onChange={handleTypeChange}
                  type="radio"
                  value="expense"
                  className="hidden"
                />
                Expense
              </label>

              {/* Income */}
              <label
                className={`cursor-pointer rounded-xl border px-4 py-3 text-center font-medium transition ${
                  type === "income"
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="income"
                  {...typeRegister}
                  onChange={handleTypeChange}
                  className="hidden"
                />
                Income
              </label>
            </div>

            <div className="flex w-full gap-4">
              {/* Amount */}
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount
                </label>

                <input
                  type="number"
                  {...register("amount", { required: "Amount is required" })}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                {errors.amount && (
                  <p className="text-red-500">{errors.amount.message}</p>
                )}
              </div>

              {/* Date */}
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date
                </label>

                <input
                  {...register("date", { required: "date is required" })}
                  type="date"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>

              <input
                {...register("title", { required: "title is required" })}
                type="text"
                placeholder={
                  type === "expense" ? "e.g. Grocery shopping" : "e.g. Salary"
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>

              <select
                {...register("category", { required: "category is required" })}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select category</option>

                {type === "expense" ? (
                  <>
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Bills</option>
                    <option>Entertainment</option>
                    <option>Other</option>
                  </>
                ) : (
                  <>
                    <option>Salary</option>
                    <option>Business</option>
                    <option>Freelance</option>
                    <option>Investment</option>
                    <option>Other</option>
                  </>
                )}
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                rows="3"
                placeholder="Add a note..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full rounded-xl px-4 py-3 font-semibold text-white transition ${
                type === "expense"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              Add {type === "expense" ? "Expense" : "Income"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransection;
