import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdSignalCellular4Bar, MdBatteryFull, MdAccessTime ,MdPeople,
    MdEvent,
    MdTimer,
    MdFlightTakeoff,} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import FlightDetailsBox from './FlightDetailsBox';
import Accommodation from './Accommodation';
import ActivityPlan from './AcitvityPlan';
// import JourneySection from './journeySection';
import Footer from './Footer';
import JourneySection from './journeySection';



const Dashboard = () => {
  const { state } = useLocation();
  const { destination = "Switzerland", duration = "5 Days", group = "Friends" } = state || {};



// const location = useLocation(); //new


// const [destination, setDestination] = useState(location.state?.destination || "Unknown");
// const { duration, group } = location.state || {};




  const isDark = true; // or dynamically pass from theme context
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${destination}&client_id=7sk6bVuv3f624zoQxhk3B9KB3CYTCuK381H94_bHL0M`);
        const data = await response.json();
        const firstImage = data.results[0]?.urls?.regular;
        setImageUrl(firstImage || "");
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [destination]);





  return (
    <div className={`min-h-screen ${isDark ? 'bg-black   text-white' : 'bg-white text-black'} p-4`}>
      {/* Top Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <MdAccessTime /> <span>12:45</span>
        </div>
        <div className="flex items-center gap-3">
          <MdSignalCellular4Bar />
          <MdBatteryFull />
        </div>
      </div>

      {/* Greeting */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <h1 className="text-2xl font-bold">Hello Chhavi</h1>
          <p className="text-sm">Ready for the trip?</p>
        </div>
        <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg">C</div>
      </div>

      {/* Upcoming Trip */}
      <h2 className="mt-8 mb-2 text-lg font-semibold">Your Upcoming Trip</h2>
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800">
      <img
              src={imageUrl}
              alt={destination}
              className="w-full h-full object-cover"
            />
            {/* Overlay: Country name */}


    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-white text-4xl font-extrabold drop-shadow-md uppercase tracking-wide text-center">
        {destination}
      </h2>
    </div>

    

        {/* new */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-2 px-4 flex justify-around items-center text-sm sm:text-base font-semibold ">
      <div className="flex items-center gap-2">
        <MdTimer className="text-xl text-yellow-400" />
        <span>{duration}days</span>
      </div>
      <div className="flex items-center gap-2">
        <MdPeople className="text-xl text-green-300" />
        <span>{group} </span>
      </div>
      <div className="flex items-center gap-2">
        <MdEvent className="text-xl text-pink-300" />
        <span>6 Activities</span>
      </div>
    </div>
  {/* </div> */}
{/* end */}

        </div>

       

{/* Flight Details Section */}
 <div className="px-0 mt-8 "> 
<FlightDetailsBox
  date="12 May 2025"
  time="10:30 AM"
  fromCode="DEL"
  fromCountry="India"
  toCode={destination}
  toCountry={destination}
/>

<Accommodation/>
 <h2 className="text-2xl font-bold ml-6 mt-4">Activities</h2>
<ActivityPlan activityCount={7} />


{/* <JourneySection selectedDestination={destination}/> */}
<JourneySection selectedDestination={destination}/>
<Footer/>
  </div>
  </div>

     
  );
};

export default Dashboard;
