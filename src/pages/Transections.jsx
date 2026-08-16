import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddTransection from "../components/AddTransection";
import { useTransection } from "../hooks/useTransection";

const Transections = () => {
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const { transection, deleteTransection } = useTransection();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Transactions
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your income and expenses
          </p>
        </div>

        <button
          onClick={() => setIsOpenPopup(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Title
                </th>

                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Category
                </th>

                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Type
                </th>

                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Amount
                </th>

                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Date
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {transection.map((trans) => (
                <tr
                  key={trans.id}
                  className="border-b border-gray-100 last:border-0 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {trans.title}
                  </td>

                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {trans.category}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        trans.type === "income"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {trans.type}
                    </span>
                  </td>

                  <td
                    className={`px-6 py-4 font-semibold ${
                      trans.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {trans.type === "income" ? "+" : "-"}₹{trans.amount}
                  </td>

                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {trans.date}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteTransection(trans.id);
                      }}
                      className="px-5 py-2 mt-2 text-gray-600 dark:text-gray-300 bg-red-500 rounded-2xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isOpenPopup && <AddTransection setIsOpenPopup={setIsOpenPopup} />}
    </div>
  );
};

export default Transections;
