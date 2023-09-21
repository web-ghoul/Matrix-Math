"use client";
import { createContext } from "react";

export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
  const teacher_name = "Mr.Mohamed Salama";
  const teacher_email = "info@matrixmath.com";
  const teacher_phone = "+20 XXXXXXXXX";
  return (
    <TeacherContext.Provider value={{teacher_phone, teacher_name,teacher_email }}>
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherProvider;
