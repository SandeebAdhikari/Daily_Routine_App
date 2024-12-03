"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";
import { apiCall } from "@/utils/api";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    ssn: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, status } = await apiCall(
        "/api/auth/signup",
        "POST",
        formData
      );

      if (status === 201) {
        console.log("Sign-up successful:", status);

        router.push("/signIn");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during sign-up:", error.message);
      } else {
        console.error("Error during sign-up:", error);
      }
      alert("Sign-up failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <AuthForm
        type="signUp"
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSignUp}
      />
    </div>
  );
};

export default SignUpPage;
