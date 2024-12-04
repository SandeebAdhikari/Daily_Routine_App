"use server";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import { apiCall } from "@/utils/api";

export const handleSignUp = async (formData: FormData) => {
  const payload = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    address: formData.get("address") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zip: formData.get("zip") as string,
    dob: formData.get("dob") as string,
    ssn: formData.get("ssn") as string,
  };

  try {
    const { status } = await apiCall("/auth/signup", "POST", payload);

    if (status === 201) {
      console.log("Sign-up successful!");
      redirect("/signIn");
    } else {
      throw new Error("Sign-up failed");
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
  }
};

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <AuthForm type="signUp" action={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
