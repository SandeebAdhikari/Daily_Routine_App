"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import { apiCall } from "@/utils/api";

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<AuthFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, status } = await apiCall(
        "/api/auth/signin",
        "POST",
        formData
      );
      if (status === 200) {
        console.log("Sign In successful:", status);
        router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during sign-in:", error.message);
      } else {
        console.error("Error during sign-in:", error);
      }
      alert("Sign-in failed!");
    }
  };

  return (
    <div className="auth-align">
      <AuthForm
        type="signIn"
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSignIn}
      />
    </div>
  );
};

export default SignInPage;
