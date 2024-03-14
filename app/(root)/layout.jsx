import Navbar from "@/components/shared/Navbar";

import LeftSidebar from "@/components/shared/LeftSidebar";

const Layout = ({ children }) => {
  return (
    <main
      className="flex min-h-screen flex-1 
                flex-col px-6 pb-6 
                pt-16 max-md:pb-14 sm:px-14"
    >
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
