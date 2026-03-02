import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await loginUser(form);
    login(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <Input label="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input label="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;