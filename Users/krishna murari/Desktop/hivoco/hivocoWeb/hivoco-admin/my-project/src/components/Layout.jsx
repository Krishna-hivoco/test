import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Main isSidebarOpen={isSidebarOpen}>{children}</Main>
    </>
  );
}

export default Layout;
