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
            <path
              fill="#ffffff"
              stroke="#E5EBEB"
              strokeWidth="3"
              d="M83.729,16c-0.007-0.562-0.32-1.084-0.825-1.337c-0.503-0.259-1.107-0.212-1.568,0.114l-5.944,4.262l-0.468,0.336
		c-6.405-6.391-15.196-10.389-24.938-10.389c-13.284,0-24.878,7.354-30.941,18.201l0.024,0.013
		c-0.548,1.183-0.124,2.607,1.026,3.271c0.001,0,0.001,0,0.002,0.001l8.136,4.697c1.218,0.704,2.777,0.287,3.48-0.932
		c0.006-0.011,0.009-0.023,0.015-0.034c3.591-6.404,10.438-10.747,18.289-10.747c4.879,0,9.352,1.696,12.914,4.5l-1.001,0.719
		l-5.948,4.262c-0.455,0.327-0.696,0.89-0.611,1.447c0.081,0.558,0.471,1.028,1.008,1.208l25.447,8.669
		c0.461,0.162,0.966,0.084,1.367-0.203c0.399-0.29,0.629-0.746,0.627-1.23L83.729,16z"
            />

            <g transform="translate(26, 28) scale(0.5)">
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

            <path
              fill="#ffffff"
              stroke="#E5EBEB"
              strokeWidth="3"
              d="M79.904,74c0,0-0.001,0-0.002-0.001l-8.136-4.697c-1.218-0.704-2.777-0.287-3.48,0.932
		c-0.006,0.011-0.009,0.023-0.015,0.034c-3.591,6.404-10.438,10.747-18.289,10.747c-4.879,0-9.352-1.696-12.914-4.5l1.001-0.719
		l5.948-4.262c0.455-0.327,0.696-0.89,0.611-1.447c-0.081-0.558-0.471-1.028-1.008-1.208l-25.447-8.669
		c-0.461-0.162-0.966-0.084-1.367,0.203c-0.399-0.29-0.629,0.746-0.627,1.23l0.092,26.828c0.007,0.562,0.32,1.084,0.825,1.337
		c0.503,0.259,1.107,0.212,1.568-0.114l5.944-4.262l0.468-0.336c6.405,6.391,15.196,10.389,24.938,10.389
		c13.284,0,24.878-7.354,30.941-18.201L80.93,77C81.478,75.816,81.055,74.393,79.904,74z"
            />
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
