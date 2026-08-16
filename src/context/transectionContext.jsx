import { createContext, useState } from "react";

export const Transecton = createContext();

export const TransectionProvider = ({ children }) => {
  const [transection, setTransection] = useState(
    () => JSON.parse(localStorage.getItem("transections")) || [],
  );
  const [seletcedTransection,setSelectedTransection]= useState(null);

  return (
    <Transecton.Provider value={{transection,setTransection,seletcedTransection,setSelectedTransection}}>
        {children}
    </Transecton.Provider>
  )
};
