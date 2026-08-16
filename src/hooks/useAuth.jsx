import { useContext } from "react";
import { Auth } from "../context/authContext";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const { users, setUsers, loggedIn, setLoggedIn } = useContext(Auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm();

  const handleRegister = (data) => {
    let arr = [...user, data];
    setUsers(arr);
    toast.success("User Register Successfully");
    localStorage.setItem("User", JSON.stringify(arr));
    localStorage.setItem("loggedIn", JSON.stringify(data));
    navigate("/dashboard");
  };

  const handleLogin = (data) => {
    let user = users.find((u) => {
      return u.email === data.email && u.password === data.password;
    });
    if (!user) {
      toast.error("Invelid  Credintials");
      reset();
      return;
    }
    setLoggedIn(data);
    localStorage.setItem("loggedIn", JSON.stringify(user));
    toast.success("login Successful");
    navigate("/dashboard");
  };
  const handleLogOut = () => {
    setLoggedIn(null)
    localStorage.removeItem("loggedIn")
    toast.success("user logout Successfully")
    navigate("/login")

  };

  const editUser= (data)=>{
console.log(data)
    const updarteProfie = users.map((user)=>{

    if  (user.email ===loggedIn.email){
      return {
        ...user,...data
      }
    }
    return user;

    })
    setUsers(updarteProfie);
    localStorage.setItem("User",JSON.stringify(updarteProfie));

    const updatedLoginUser= {
      ...loggedIn,...data
    };
    setLoggedIn(updarteProfie);
    localStorage.setItem("loggedIn",JSON.stringify(data));
    toast.success("Profile Updated Successfully")
  };

  return {
    users,
    setUsers,
    register,
    reset,
    errors,
    isValid,
    getValues,
    handleRegister,
    handleSubmit,
    handleLogOut,
    handleLogin,
    loggedIn, 
    setLoggedIn,
    editUser
  };
};
