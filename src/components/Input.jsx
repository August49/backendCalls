import React from "react";

export default function Input({ name, label, type = "text", register }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="form-control"
        id={name}
      />
    </div>
  );
}
