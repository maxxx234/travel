import React from "react";
import journeyData from "./journeyData";

const JourneySection = ({ selectedDestination }) => {
  const activities = journeyData[selectedDestination] || [];

  return (
    <div className="p-6 overflow-x-hidden">
    

 <div className="border-2 border-lime-500 rounded-lg p-4 space-y-4">


      <div className="flex   flex-row md:flex-row  justify-between gap-4 flex-wrap">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-row md:flex-row bg-zinc-800  rounded-lg shadow-md overflow-x-hidden w-full md:w-1/3 bg-grey-600 mx-auto" >
            <div className="md:w-1/4 " >
              <img
                src={activity.image}
                alt={activity.name}
                className="h-full w-full object-cover rounded-l "
              />
            </div>
            <div className="md:w-2/3 bg-zinc-800   p-4 space-y-2 flex flex-col justify-center">
              <h1 className="text-2xl mb-7 font-bold ">{activity.name}</h1>
              <p><strong>Time:</strong> {activity.timing}</p>
              <p><strong>Duration:</strong> {activity.duration}</p>
              <p><strong>Pickup:</strong> {activity.pickup}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default JourneySection;
