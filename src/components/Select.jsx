import React from "react";

export default function Select({ name, data, register }) {
  return (
    <select
      className="form-select form-select-sm  mb-3 w-25"
      {...register(name)}
    >
      {data.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
