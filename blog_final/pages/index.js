import Image from "next/image";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/Navbar";
import ShowBlog from "./components/ShowBlog";
export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="mt-20">
        <ShowBlog />
      </div>
    </div>
  );
}
