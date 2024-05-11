import React from "react";
// import DarkButton from "../assets/Banner/dark.png";
// import LightButton from "../assets/Banner/light.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="w-7 relative">
      <div className="">
      
      <img
        src={'../src/assets/Banner/light.jpg'}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light", "dark")}
        className={`w-12
        cursor-pointer drop-shadow 
        [1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 
         right-0 z-10 ${theme === "dark" ? "hidden" : "opacity-100"}`}
      />
      <img
        src={'../src/assets/Banner/dark.png'}
        alt=""
        onClick={() => setTheme(theme === "dark" ? "light" : "dark", "light")}
        className={`w-12
        cursor-pointer drop-shadow  
        [1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300
         bottom-0
         right-0 z-10 ${theme === "light" ? "hidden" : "opacity-100"}`}
      />
      </div>
    </div>
  );
};

export default DarkMode;
