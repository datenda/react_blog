import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import ShowChar from "../components/ShowChar";
import Navbar from "../components/Navbar";

const myFont = localFont({ src: "../PressStart2P-Regular.ttf" });

export default function LandingPage() {
  const [chars, setChars] = useState([]);
  const gameDescription =
    "Dive into the expansive universe of 'Robo Shock,' an immersive sci-fi RPG MMO that thrusts you into a sprawling world teeming with futuristic marvels, perilous challenges, and a vibrant community of players.";

  useEffect(() => {
    // Fetch data from your API or wherever it's hosted
    fetch("/api/get_char") // Update the URL accordingly
      .then((response) => response.json())
      .then((data) => {
        setChars(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
            Robo Shock
          </h1>
        </div>
      </div>
      <div className="bg-[#150354] h-screen pt-4">
        <div className="text-2xl text-center mb-4">Characters</div>
        {/* Display the game description */}
        <div className="container mx-auto max-w-6xl flex flex-wrap justify-center">
          {chars.map((character) => (
            <ShowChar key={character._id} props={character} />
          ))}
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="text-2xl text-center mt-3 sm:mt-10">Description</div>
          <div className="text-white text-center mb-8 mt-2">
            {gameDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
