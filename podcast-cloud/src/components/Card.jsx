import React from "react";

const Card = ({ title, image, description, onClick }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      {onClick && (
        <Button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Learn More
        </Button>
      )}
    </div>
  );
};

export default Card;
