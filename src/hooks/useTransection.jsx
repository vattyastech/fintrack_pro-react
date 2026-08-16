import { useContext, useState } from "react";
import { Transecton } from "../context/transectionContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useTransection = () => {
  const [dateFilter, setDateFilter] = useState("thisMonth");

  const {
    transection,
    setTransection,
    seletcedTransection,
    setSelectedTransection,
  } = useContext(Transecton);
  console.log(seletcedTransection);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      type: "expense",
    },
  });

  const AddTransection = (data) => {
    console.log("added");
    const newData = { ...data, id: Date.now() };
    const arr = [...transection, newData];
    setTransection(arr);
    toast.success("Transection Create Successfully");
    localStorage.setItem("transections", JSON.stringify(arr));
  };

  const filterByDate = (transections, filter) => {
    const today = new Date();
    return transections.filter((transection) => {
      const transectionDate = new Date(transection.date);
      if (filter === "all") {
        return true;
      }

      if (filter === "thisMonth") {
        return (
          transectionDate.getMonth() === today.getMonth() &&
          transectionDate.getFullYear() === today.getFullYear()
        );
      }
      if (filter === "lastMonth") {
        const startOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1,
        );
        const endOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          0,
        );
        return (
          transectionDate >= startOfLastMonth &&
          transectionDate <= endOfLastMonth
        );
      }
      if (filter === "thisWeek") {
        const day = today.getDay();
        const week = day === 0 ? 6 : day - 1;
        const startWeek = new Date(today);

        startWeek.setDate(today.getDate() - week);
        const endWeek = new Date(startWeek);
        endWeek.setDate(startWeek.getDate() + 6);
        return transectionDate >= startWeek && transectionDate <= endWeek;
      }
      return true;
    });
  };

  const filteredTransections = filterByDate(transection, dateFilter);

  const totalIncome = filteredTransections
    .filter((item) => item.type === "income")
    .reduce((total, item) => {
      return total + Number(item.amount);
    }, 0);

  const totalExpance = filteredTransections
    .filter((item) => item.type === "expense")
    .reduce((total, item) => {
      return total + Number(item.amount);
    }, 0);

  const expenseCategoryData = Object.entries(
    filteredTransections
      .filter((item) => item.type === "expense")
      .reduce((total, item) => {
        const category = item.category;

        if (!total[category]) {
          total[category] = 0;
        }

        total[category] += Number(item.amount);

        return total;
      }, {}),
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const balance = totalIncome - totalExpance;

  const monthlyData = Array.from({ length: 6 }, (_, index) => {
    const today = new Date();

    const targetDate = new Date(
      today.getFullYear(),
      today.getMonth() - (5 - index),
      1,
    );

    const month = targetDate.toLocaleString("en-US", { month: "short" });

    const year = targetDate.getFullYear();

    const monthNumber = targetDate.getMonth();

    const monthTransections = transection.filter((item) => {
      const transectionDate = new Date(item.date);
      return (
        transectionDate.getMonth() === monthNumber &&
        transectionDate.getFullYear() === year
      );
    });

    const income = monthTransections
      .filter((item) => item.type === "income")
      .reduce((total, item) => total + Number(item.amount), 0);

    const expense = monthTransections
      .filter((item) => item.type === "expense")
      .reduce((total, item) => total + Number(item.amount), 0);

    return {
      month,
      income,
      expense,
    };
  });

  const EditTransection = (id, updateData) => {
    const editTransection = transection.map((item) => {
      if (item.id === id) {
        return { ...item, ...updateData };
      }

      return item;
    });
    setTransection(editTransection);
    localStorage.setItem("transections", JSON.stringify(editTransection));
    toast.success("transection Update Sucessfully");
  };

  const deleteTransection = (id) => {
    let deletetransection = transection.filter((item) => item.id !== id);
    setTransection(deletetransection);
    localStorage.setItem("transections", JSON.stringify(deletetransection));
    toast.success("transection delete succesfully");
  };

  return {
    register,
    reset,
    handleSubmit,
    errors,
    isValid,
    AddTransection,
    transection,
    setTransection,
    balance,
    totalExpance,
    filteredTransections,
    totalIncome,
    monthlyData,
    EditTransection,
    seletcedTransection,
    setSelectedTransection,
    expenseCategoryData,
    deleteTransection
  };
};
