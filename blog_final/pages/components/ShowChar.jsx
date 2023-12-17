import React, { useState } from "react";

export default function ShowChar({ props }) {
  const { name, description, image, stats } = props;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className={`w-36 ${
        isDropdownVisible ? "h-full" : "h-80"
      } mx-auto rounded overflow-hidden shadow-lg`}
    >
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={`image+ ${name}`}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xs mb-1">{name}</div>
        <p className="text-gray-700 text-xs">{description}</p>
        <button
          className="text-blue-500 underline mt-2"
          onClick={toggleDropdown}
        >
          {isDropdownVisible ? "Hide Stats" : "Show Stats"}
        </button>
        {isDropdownVisible && (
          <div className="mt-2">
            <div className="font-bold text-sm">Stats:</div>
            <ul>
              <div className="flex items-center">
                <img
                  className="w-8"
                  src="/images/heart_icon-removebg-preview.png"
                  alt="Heart Icon"
                />
                <div>: {stats[0].hp}</div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-8"
                  src="/images/defense_icon-removebg-preview.png"
                  alt="Heart Icon"
                />
                <div>: {stats[0].defense}</div>
              </div>{" "}
              <div className="flex items-center">
                <img
                  className="w-8"
                  src="/images/attack_icon-removebg-preview.png"
                  alt="Heart Icon"
                />
                <div>: {stats[0].attack}</div>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
