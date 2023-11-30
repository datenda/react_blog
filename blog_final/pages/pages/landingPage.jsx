import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div
        className="h-96 w-full overflow-hidden bg-cover bg-no-repeat bg-bottom"
        style={{
          backgroundImage: 'url("/images/landingImage.svg")',
        }}
      >
        {/* Add any content or components you want to overlay on the image */}
        <div className="text-white text-center p-8">
          <h1 className="text-4xl font-bold">Your Website Title</h1>
          <p className="text-lg">Your tagline or description</p>
        </div>
      </div>
      <div className="bg-[#150354] h-screen">qweqwe</div>
    </div>
  );
}
