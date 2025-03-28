import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [currentPage, setCurrentPage] = useState<"login" | "register">("login");

  return (
    <div>
      {currentPage === "login" ? (
        <Login onSwitch={() => setCurrentPage("register")} />
      ) : (
        <Register onSwitch={() => setCurrentPage("login")} />
      )}
    </div>
  );
};

export default App;
