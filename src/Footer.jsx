// Footer.jsx
import React from "react";
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Footer() {
 const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowFooter(false); // scroll down → hide
      } else {
        setShowFooter(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (

     <footer
      className={`fixed bottom-0 left-0 right-0 bg-zinc-900 px-6 py-3 z-50 shadow-md transform transition-transform duration-300 ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}>
      <div className="flex justify-between items-center max-w-md mx-auto">
        {[
          { icon: <FaHome />, label: "Home" },
          { icon: <FaSearch />, label: "Search" },
          { icon: <FaPlus />, label: "Add", alwaysLime: true },
          { icon: <FaHeart />, label: "Favorites" },
          { icon: <FaUser />, label: "Profile" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                item.alwaysLime
                  ? "text-lime-500"
                  : "text-white group-hover:text-lime-500 group-hover:bg-zinc-500"
              }`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
