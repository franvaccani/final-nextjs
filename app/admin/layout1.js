"use client";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Principal from "./@principal/page";

export default function AdminLayout({ children, login }) {
    const {user} = useContext(AuthContext);
  
    return (
      <>
        {user.logged ? children : <Principal />}
      </>
    );
  }
  