"use client";
import { Button, ButtonBase, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import z from "zod";
import styles from "./page.module.css";
import { ArrowForward } from "@mui/icons-material";

const loginSchema = z.object({
  userName: z.string().nonempty(),
  password: z.string().nonempty(),
});

type FormState = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormState>({
    defaultValues: { userName: "", password: "" },
    criteriaMode: "all",
    mode: "onBlur",
  });

  const onSubmit = (data: FormState) => {
    console.log(data);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <TextField
        {...register("userName")}
        placeholder="Please enter your username"
        type="text"
        fullWidth
        label="username"
      />
      <TextField
        {...register("password")}
        placeholder="Please enter your password"
        type="password"
        fullWidth
        label="password"
      />
      <ButtonBase className={styles.submitBtn} color="secondary" type="submit">
        <ArrowForward fontSize="large" className={styles.icon} />
      </ButtonBase>
    </form>
  );
};

export default Login;
