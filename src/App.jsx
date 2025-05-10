import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fontsource/archivo/400.css';
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import {
  FaWifi,
  FaBatteryThreeQuarters,
  FaUserFriends,
  FaUser,
  FaHeart,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const App = () => {

  const [time, setTime] = useState(new Date());
  const [duration, setDuration] = useState(3);
  const [group, setGroup] = useState("solo");
  const [isDark, setIsDark] = useState(false);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

// 
const GroupOption = ({ icon, label, active, onClick, isDark }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition-colors duration-300
        ${active ? "ring-2 ring-blue-500" : ""}
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <div className={`${isDark ? "text-white" : "text-black"}`}>{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
};




  const handleGroupChange = (value) => setGroup(value);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/dashboard", {
      state: {
        destination: destination || "Unknown",
        duration: duration || "Not Set",
        group: group || "None",
      },
    });
  };
  return (
    <div
    className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black  "} font-archivo transition-colors duration-300 p-6`}>
    {/* Toggle Theme Button */}
    <div className="flex justify-end mb-4">
      <span className=" relative mt-2  mr-2">MODE</span>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {isDark ? (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-800" />
        )}
      </button>
    </div>
      {/* }`} */}
    
      <div>
        {/* Status Bar */}
        <div className="flex justify-between items-center text-sm mb-6">
          <span>{formattedTime}</span>
          <div className="flex items-center gap-2">
            <FaWifi />
            <FaBatteryThreeQuarters />
            <span>87%</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-1  ">PLAN YOUR JOURNEY, YOUR WAY ✈️</h1>
        <p className="mb-6 text-sm text-gray-400">
         Let's create yout personalised travel experience
        </p>

        {/* Input 1: Destination */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Where would you like to go?</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <FaMapMarkerAlt />
            </span>
            <input
              list="destinations"
              value={destination}//new
              onChange={(e) => setDestination(e.target.value)}//new
             
              className={`w-full  p-2 pl-10 border rounded  bg-opacity-75 placeholder:text-gray-400 ${isDark ? "bg-zinc-800 text-white" : " border-2 border-black bg-white text-black-800  "}`}
              placeholder="Enter destination"
            />
            <datalist id="destinations">
              <option value="Paris" />
              <option value="Tokyo" />
              <option value="New York" />
              <option value="Sydney" />
            </datalist>
          </div>
        </div>
        
        {/* Input 2: Duration */}
        <div className="mb-6">
          <label className="block font-medium mb-2">How long will you stay ?</label>
          <div className="relative mb-2">
            <span className="absolute left-3 top-3 text-gray-400">
              <FaClock />
            </span>
            <input
              className={`w-full p-2 pl-10 border rounded   placeholder:text-gray-400"
                ${isDark ? "bg-zinc-800 bg-none text-white" : " border-2 border-black bg-white text-black-800  "}
              placeholder="Select duration`}
              value={`${duration} days`}
              readOnly
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDuration((d) => Math.max(1, d - 1))}
              className="text-white"
            >
              <MdKeyboardArrowDown size={28}   className={`text-3xl transition-colors duration-300 ${
    isDark ? "text-white" : "text-black"
  }`} />
            </button>
            <span className="text-lg font-bold">{duration}</span>
            <button onClick={() => setDuration((d) => d + 1)} className="text-white">
              <MdKeyboardArrowUp size={28}   className={`text-3xl transition-colors duration-300 ${
    isDark ? "text-white" : "text-black"
  }`}/>
            </button>
          </div>
        </div>

        {/* Input 3: Group Type */}
        <div>
          <label className={`block font-medium mb-4  `}>
            Who are you traveling with?
          </label>
          <div className={`grid  grid-cols-2 gap-2  ${isDark ? "bg-black-800 border-none text-white" : "bg-white text-black"}`}>
            <GroupOption
          
              icon={<FaUser  />}
              label="Solo"
              active={group === "solo"}
              onClick={() => handleGroupChange("solo")}
              isDark={isDark}
            />
            <GroupOption
              icon={<FaHeart />}
              label="Couple"
              active={group === "couple"}
              onClick={() => handleGroupChange("couple")}
               isDark={isDark}
            />
            <GroupOption
              icon={<FaUsers />}
              label="Family"
              active={group === "family"}
              onClick={() => handleGroupChange("family")}
               isDark={isDark}
            />
            <GroupOption
              icon={<FaUserFriends />}
              label="Friends"
              active={group === "friends"}
              onClick={() => handleGroupChange("friends")}
               isDark={isDark}
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const GroupOption = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col border-none items-center p-4 rounded-lg border cursor-pointer transition ${
      active ? "bg-blue-600 text-white" : "bg-zinc-800 text-gray-200" 
    }`}
  >
    <div className="text-2xl mb-1">{icon}</div>
    <span className="text-sm">{label}</span>
  </div>
);

export default App;
