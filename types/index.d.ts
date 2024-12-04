declare interface AuthFormData {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  dob?: string;
  ssn?: string;
}

declare interface AuthFormProps {
  type: "signIn" | "signUp";
  action: (formData: FormData) => Promise<void>;
}
