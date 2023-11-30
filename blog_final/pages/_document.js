import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/Navbar";

export default function Document() {
  return (
    <Html className="bg-white" lang="en">
      <Head />
      <body>
        <div className="mt-16">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
