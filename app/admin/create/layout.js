"use client";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoginForm from "../@login/page";

export default function AdminLayout({ children, login }) {
    const {user} = useContext(AuthContext);
  
    return (
      <>
        {user.logged ? children : <LoginForm />}
      </>
    );
  }
  