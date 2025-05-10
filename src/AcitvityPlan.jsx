import React,{ useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 
const sampleDates = [
  { day: "MON", date: "06", month: "MAY" },
  { day: "TUE", date: "07", month: "MAY" },
  { day: "WED", date: "08", month: "MAY" },
  { day: "THU", date: "09", month: "MAY" },
  { day: "FRI", date: "10", month: "MAY" },
  { day: "SAT", date: "11", month: "MAY" },
  { day: "SUN", date: "12", month: "MAY" },
];

const ActivityPlan = ({ activityCount = 5 }) => {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
     
 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 my-8 w-full max-w-5xl mx-auto">
       

{/* Header row with labels */}
      <div className="flex  gap-6 mb-4">
        <div className="
        bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold
        whitespace-nowrap
          dark:text-black  text-md ">
          Day Plan
        </div>
        <div className="
        border border-green-300 text-green-500 px-4 py-2 rounded-lg font-semibold
        
        bg-grey-300 dark:text-bg-lime-500  mr-70  whitespace-nowrap  text-md ">
          {activityCount} Activities
        </div>
      </div>

      {/* Date Slider */}
      <Swiper
        spaceBetween={12}
        slidesPerView={3.5}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {sampleDates.map((item, index) => (
          <SwiperSlide key={index}
           onClick={() => setSelectedDate(item.id)}
            className={`min-w-[60px] px-3 py-2 rounded-lg cursor-pointer border text-center transition-all duration-300
              ${selectedDate === item.id
                ? "border-green-500 bg-green-100"
                : "border-gray-300 bg-white"}
            `}
          >
            <div className="bg-gray-100 dark:bg-gray-700 text-center rounded-xl p-3 shadow-sm">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.day}</div>
              <div className="text-xl font-bold text-gray-800 dark:text-white">{item.date}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.month}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActivityPlan;
