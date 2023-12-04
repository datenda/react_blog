import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import ShowChar from "../components/ShowChar";
import Navbar from "../components/Navbar";

const myFont = localFont({ src: "../PressStart2P-Regular.ttf" });

export default function LandingPage() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    // Fetch data from your API or wherever it's hosted
    fetch("/api/get_char") // Update the URL accordingly
      .then((response) => response.json())
      .then((data) => setChars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(chars);
  return (
    <div className={myFont.className}>
      <Navbar />
      <div
        className="h-96 w-full overflow-hidden bg-cover bg-no-repeat bg-bottom pt-12"
        style={{
          backgroundImage: 'url("/images/landingImage.svg")',
        }}
      >
        <div className="text-white text-center p-8 ">
          <h1
            className="text-4xl font-bold "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            Your Website Title
          </h1>
        </div>
      </div>
      <div className="bg-[#150354] h-screen pt-4">
        <div className="text-4xl"> Characters</div>
        <div className="flex flex-wrap justify-center mt-4">
          {chars.map((character) => (
            <ShowChar key={character._id} props={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
