"use server";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import { apiCall } from "@/utils/api";

export const handleSignUp = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const dob = formData.get("dob") as string;
  const ssn = formData.get("ssn") as string;

  try {
    const { status } = await apiCall("/api/auth/signup", "POST", {
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      dob,
      ssn,
    });

    if (status === 201) {
      console.log("Sign-up successful:", status);
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
