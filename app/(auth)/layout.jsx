const Layout = ({ children }) => {
  return (
    <div
      className="flex 
     min-h-screen w-full
     items-center 
     justify-center bg-pink-900 "
    >
      {children}
    </div>
  );
};

export default Layout;
