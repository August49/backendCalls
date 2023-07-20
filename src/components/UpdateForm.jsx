import React from "react";
import Input from "./Input";
import { useCategory } from "../hooks/useCategory";
import Select from "./Select";
import { useForm } from "react-hook-form";

export default function UpdateForm({ formData }) {
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
      <Input name={"productID"} label={"Product ID"} register={register} />
      <Input
        name={"productName"}
        label={"New Product Name"}
        register={register}
      />
      <Input name={"brandName"} label={"New Brand Name"} register={register} />
      <Input
        name={"productPrice"}
        label={"New Price"}
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
      <button className="btn btn-primary">Update</button>
    </form>
  );
}
