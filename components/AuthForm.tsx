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
      className={`flex flex-col p-5 items-center justify-center w-[400px]  ${
        type === "signIn" ? "h-[373px] " : "max-h-screen"
      }  rounded-[20px]`}
    >
      <Link href={"/signIn"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width=""
          height="300"
          viewBox="0 0 2000 1500"
        >
          <g data-padding="20">
            <g transform="translate(-1666.068 -1262.013)scale(2.5963)">
              <path
                fill="#fff"
                d="M865.444 833.486h-.51l-14.86-28.81-3.87-8.74-1.76 8.74-5.71 28.81h-9.33l12.77-61.74h1.01l16.97 33.35 5.04 11.17 5.04-11.17 16.63-33.35h.92l13.27 61.74h-9.24l-6.21-28.81-1.85-8.74-3.36 8.74Zm69.98 0h-29.82v-61.74h27.05v8.23h-17.73v17.05h14.28v8.4h-14.28v19.74h20.5Zm26.88 0h-9.32v-53.51h-15.8v-8.23h41.08v8.23h-15.96Zm30.49 0h-9.15v-61.74h14.02q4.71 0 9.12.92 4.41.93 7.85 3.11 3.45 2.18 5.46 5.8 2.02 3.61 2.02 8.9 0 6.13-2.86 10.67-2.85 4.53-8.65 6.97l14.7 25.37h-10.84l-12.43-23.35q-1.43.08-3.48.12-2.06.04-3.41.04h-2.35Zm0-53.93v23.1h5.97q4.62 0 7.43-1.18 2.81-1.17 4.33-2.98 1.51-1.8 2.05-3.95.55-2.14.55-3.99 0-4.11-1.89-6.51-1.89-2.39-5.21-3.44t-7.6-1.05Zm48.88 53.93h-9.41v-61.74h9.41Zm38.57.59q-7.4 0-13.15-2.52t-9.74-6.93-6.05-10.08-2.06-12.06q0-6.97 2.31-12.77 2.31-5.79 6.51-10.03 4.2-4.25 10-6.6 5.79-2.35 12.76-2.35 4.54 0 8.07.92 3.53.93 5.79 2.06 2.27 1.14 2.86 1.81l-4.12 8.4q-2.26-2.02-5.58-3.28t-7.77-1.26q-5.8 0-10.46 2.86-4.66 2.85-7.39 8.06t-2.73 12.35q0 6.3 2.35 11.47 2.35 5.16 6.93 8.27t11.13 3.11q3.61 0 7.1-.97 3.48-.96 7.18-3.23l2.77 7.98q-1.09 1.01-3.69 2.14-2.61 1.13-6.01 1.89t-7.01.76m67.7 0q-7.39 0-13.15-2.52-5.75-2.52-9.74-6.93t-6.05-10.08-2.06-12.06q0-6.97 2.31-12.77 2.31-5.79 6.51-10.03 4.2-4.25 10-6.6t12.77-2.35q4.53 0 8.06.92 3.53.93 5.8 2.06 2.27 1.14 2.85 1.81l-4.11 8.4q-2.27-2.02-5.59-3.28t-7.77-1.26q-5.79 0-10.46 2.86-4.66 2.85-7.39 8.06t-2.73 12.35q0 6.3 2.35 11.47 2.36 5.16 6.93 8.27 4.58 3.11 11.13 3.11 3.62 0 7.1-.97 3.49-.96 7.18-3.23l2.78 7.98q-1.1 1.01-3.7 2.14t-6.01 1.89q-3.4.76-7.01.76m14.87-.59 29.57-61.83h.92l29.74 61.83h-10.84l-5.29-12.1h-28.31l-5.29 12.1Zm30.15-43.93h-.16l-3.7 8.4-6.72 14.95h20.83l-6.63-14.87Zm40.74 43.93h-9.15v-61.74h14.03q4.7 0 9.11.92 4.41.93 7.85 3.11 3.45 2.18 5.46 5.8 2.02 3.61 2.02 8.9 0 6.13-2.86 10.67-2.85 4.53-8.65 6.97l14.7 25.37h-10.83l-12.44-23.35q-1.42.08-3.48.12t-3.4.04h-2.36Zm0-53.93v23.1h5.97q4.62 0 7.43-1.18 2.82-1.17 4.33-2.98 1.51-1.8 2.06-3.95.54-2.14.54-3.99 0-4.11-1.89-6.51-1.89-2.39-5.21-3.44-3.31-1.05-7.6-1.05Zm68.13 53.93h-29.82v-61.74h27.05v8.23h-17.73v17.05h14.28v8.4h-14.28v19.74h20.5Z"
              />
              <path
                fill="#f0dfc8"
                stroke="#fff"
                strokeWidth="5"
                d="M748.604 771.696h52.798m15.55-22.484V694.85m-13.66 62.078-37.945-37.946m42.042 64.634-37.946 37.946m99.442-104.817-38.94 38.94"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </g>
        </svg>
      </Link>
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
