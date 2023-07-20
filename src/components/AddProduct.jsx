import React from "react";
import Input from "./Input";
import { useCategory } from "../hooks/useCategory";
import Select from "./Select";
import { useForm } from "react-hook-form";

export default function AddProduct({ formData }) {
  const { data } = useCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    formData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name={"productName"} label={"Product Name"} register={register} />
      <Input name={"brandName"} label={"Brand Name"} register={register} />
      <Input
        name={"productPrice"}
        label={"Price"}
        type="number"
        register={register}
      />
      <Input
        name={"stock"}
        label={"Number in stock"}
        type="number"
        register={register}
      />
      <Select data={data} register={register} name={"category"} />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
