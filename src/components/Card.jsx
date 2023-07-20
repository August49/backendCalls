import React from "react";

export default function Card({ image, title, text, buttonText }) {
  return (
    <div className="card m-4">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={image}
          className="card-img-top"
          alt={text}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="card-body"
        style={{ height: "100px", overflow: "hidden" }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="m-3">
        <a className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}
