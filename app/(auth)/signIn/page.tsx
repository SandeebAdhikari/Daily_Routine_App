"use server";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import { apiCall } from "@/utils/api";

export const handleSignIn = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const { data, status } = await apiCall("/api/auth/signin", "POST", {
      username,
      password,
    });

    if (status === 200) {
      console.log("Sign-in successful!");
      redirect("/calendar");
    } else {
      throw new Error("Sign-in failed");
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};

const SignInPage: React.FC = () => (
  <div className="auth-align">
    <AuthForm type="signIn" action={handleSignIn} />
  </div>
);

export default SignInPage;
