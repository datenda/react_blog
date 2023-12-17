import NavbarLogin from "./NavbarLogin";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarLogin />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
