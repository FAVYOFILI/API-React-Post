import axios from "axios";
import React, { useState } from "react";
import { useUser } from "./Context";

type SignupData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const { signUp } = useUser();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3400/api/signup",
        formData
      );

      if (res.status === 201) {
        signUp(formData.name, formData.email, formData.password);

        setSuccess(true);
      } else {
        setError(res.data.message || "signup failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message);
      console.log(err.response?.data?.message);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-100 ">
        <h1 className="">🥳🥳🎉🎊 Account created successfully!</h1>

        <p className="">Welcome! {formData.name} you can now Login</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold m-4 text-center">
          Create Account
        </h2>

        <input
          type="name"
          name="name"
          placeholder="UserName"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
