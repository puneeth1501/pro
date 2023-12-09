import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center mb-16">
      <div className="mb-8">
        <img
          className="rounded-2xl"
          src={item.image}
          alt=""
          style={{ width: "400px", height: "300px" }}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-3xl font-bold capitalize mb-3 text-black">
        {item.name}
      </h3>
      <p className="text-lg max-w-md text-gray-800 mb-6">{item.info}</p>
      <p className="text-lg max-w-md text-gray-800 mb-6">
        Technologies used : {item.tech}
      </p>
      <a href={item.github} target="_blank" rel="noopener noreferrer">
        <button
          style={{
            margin: "10px",
            borderRadius: "5px",
            border: "1px solid #fff",
            width: "120px",
            padding: "8px",
            backgroundColor: "#FF3366",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          click here to view Project code....
        </button>
      </a>
    </div>
  );
};

export default Project;
