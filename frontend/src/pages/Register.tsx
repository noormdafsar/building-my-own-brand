import { useState } from "react";
import { registerUser } from "../api/auth.api";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await registerUser(form);
    alert("Registered Successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <Input label="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input label="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input label="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;