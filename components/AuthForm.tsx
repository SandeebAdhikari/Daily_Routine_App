import React from "react";
import Link from "next/link";

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  onChange,
  onSubmit,
  formData,
}) => {
  return (
    <div
      className={`flex flex-col p-5 items-center justify-center w-[400px] gap-28  ${
        type === "signIn" ? "h-[373px] " : "max-h-screen"
      }  rounded-[20px]`}
    >
      <div className="relative w-full flex items-center justify-center">
        <Link href={"/signIn"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100px"
            height="100px"
          >
            <g transform="translate(26, 28) scale([0.5, 0.5,0.5, 0.5])">
              <circle style={{ fill: "#ffffff" }} cx="50" cy="50" r="48" />
              <circle style={{ fill: "#000000" }} cx="50" cy="50" r="44" />
              <circle
                style={{ strokeWidth: "4pt", stroke: "#222222", fill: "none" }}
                cx="50"
                cy="50"
                r="42"
              />
              <g style={{ fill: "#ffffff" }}>
                <circle cx="50" cy="9" r="3" />
                <circle cx="91" cy="50" r="3" />
                <circle cx="50" cy="91" r="3" />
                <circle cx="9" cy="50" r="3" />
              </g>
              <path
                style={{ stroke: "#ffffff", strokeWidth: 5, fill: "none" }}
                d="M 50 50 45 24"
              />
              <path
                style={{ stroke: "#ffffff", strokeWidth: 4, fill: "none" }}
                d="M 50 50 28 73"
              />
              <circle style={{ fill: "#ffffff" }} cx="50" cy="50" r="4.5" />
            </g>
          </svg>
        </Link>
        <h1 className="absolute top-12 text-[32px] text-white ml-4 font-bold text-stroke">
          DAILY <span className="text-[#aaaaaa] font-bold">ROUTINE</span>
        </h1>
      </div>
      <form onSubmit={onSubmit} className="-mt-32 flex flex-col w-full p-4">
        <h2 className="mt-8 text-[32px] text-white">
          {type === "signIn" ? "Sign In" : "Sign Up"}
        </h2>

        {type === "signUp" && (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || ""}
                onChange={onChange}
                required
                className="input-field"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName || ""}
                onChange={onChange}
                required
                className="input-field"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address || ""}
              onChange={onChange}
              required
              className="input-field"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city || ""}
              onChange={onChange}
              required
              className="input-field"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state || ""}
                onChange={onChange}
                required
                className="input-field"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip || ""}
                onChange={onChange}
                required
                className="input-field"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob || ""}
                onChange={onChange}
                required
                className="input-field"
              />
              <input
                type="text"
                name="ssn"
                placeholder="SSN"
                value={formData.ssn || ""}
                onChange={onChange}
                required
                className="input-field"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={onChange}
              required
              className="input-field"
            />
          </>
        )}
        <input
          type="username"
          name="username"
          placeholder={type === "signIn" ? "Username or Email" : "Username"}
          value={formData.username}
          onChange={onChange}
          required
          className={`w-[336px] h-[37px] ${
            type === "signIn" ? "mt-10" : "mt-6"
          } p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer hover:placeholder:text-white`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
          className="input-field"
        />

        <button type="submit" className="primary-button">
          <span className="text-[15px] font-light">
            {type === "signIn" ? "Login to your account" : "Create an account"}
          </span>
        </button>

        <p className="mt-6 mb-8 text-center text-[15px] text-white">
          {type === "signIn" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signUp" className="auth-link">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/signIn" className="auth-link">
                Sign In
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
