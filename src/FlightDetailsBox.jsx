import { FaArrowRight } from "react-icons/fa";
// import { MdFlightTakeoff } from "react-icons/md";

// const FlightDetailsBox = ({ date, time, fromCode, fromCountry, toCode, toCountry }) => {
 
import React from 'react'

const FlightDetailsBox = ({ date, time, fromCode, fromCountry, toCode, toCountry }) => {

    const backgroundImage = "https://wallpapersok.com/images/high/ascending-airplane-4k-nkdx7vpb3d0ol3ve.jpg"
  return (
    <div
          className="relative  bg-cover bg-center text-white rounded-xl p-5 overflow-hidden shadow-lg"
          style={{
backgroundImage: `url(${backgroundImage})`,
            height: "160px",
          }}
        > 
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl z-0"></div> */}
    
          {/* Flight Details Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Title and Date/Time */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Flight Details</h3>
              <div className="text-md font-bold">{date} | {time}</div>
            </div>
    
            {/* Route */}
            <div className="flex justify-between items-end w-full">
              {/* From */}
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-300">{fromCode}</div>
                <div className="text-sm">{fromCountry}</div>
              </div>
    
              {/* Arrow */}
              <FaArrowRight className="text-white text-2xl mx-2 mb-2 animate-pulse" />
    
              {/* To */}
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-300">{toCode}</div>
                <div className="text-sm">{toCountry}</div>
              </div>
            </div>
    
            {/* Optional Icon */}
            <div className="absolute bottom-3 right-3 text-white text-4xl opacity-30">
             
            </div>
          </div>
        </div>
  )
}
export default FlightDetailsBox