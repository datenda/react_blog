import Image from "next/image";
import CreateBlog from "./pages/createPost";
import NavBar from "./components/Navbar";
import ShowBlog from "./components/ShowForum";
import landingPage from "./pages/landingPage";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href="/pages/landingPage">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </div>
      </Link>
    </div>
  );
}
