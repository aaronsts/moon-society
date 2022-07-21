import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  // form structure: subject, name, email, location, description
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue={""}
        placeholder="first name"
        {...register("first_name")}
      />
      <input
        defaultValue={""}
        placeholder="first name"
        {...register("first_name")}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
