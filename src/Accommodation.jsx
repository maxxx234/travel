import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';

const mockHotels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    name: 'Hotel Sunset Bliss',
    rating: 4.5,
    checkIn: '2025-05-10',
    checkOut: '2025-05-13',
    nights: 3,
    confirmed: true,
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQQnbn0NWMVPeRCCIOpPnaZmjSpZnYiQAZA&s',
    name: 'Ocean View Resort',
    rating: 4.8,
    checkIn: '2025-05-14',
    checkOut: '2025-05-17',
    nights: 3,
    confirmed: false,
  },

  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl_YbkmnVudENlB5ot3fyiQxBH61ciEqPlw&s',
    name: 'Mountain Lodge Escape',
    rating: 4.2,
    checkIn: '2025-05-18',
    checkOut: '2025-05-20',
    nights: 2,
    confirmed: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    name: 'Skyline Grand Hotel',
    rating: 4.9,
    checkIn: '2025-05-21',
    checkOut: '2025-05-24',
    nights: 3,
    confirmed: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    name: 'Urban Boutique Stay',
    rating: 4.4,
    checkIn: '2025-05-25',
    checkOut: '2025-05-28',
    nights: 3,
    confirmed: true,
  },
];

const Accommodation = () => {
  return (
    <div className="px-6  py-4">
      <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {mockHotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[260px] w-[280px]">
              {/* Hotel image */}
              <div className="relative h-1/2 w-full">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                  <FaStar className="inline text-yellow-400 mr-1" />
                  {hotel.rating}
                </div>
              </div>

              {/* Hotel details */}
              <div className="p-3 space-y-1">
                <h3 className="font-semibold text-lg truncate">{hotel.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Check-in: {hotel.checkIn}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Check-out: {hotel.checkOut}
                </p>

                <div className="absolute bottom-3 left-3 flex rounded  items-center gap-2">
                  <span className="text-sm font-semibold">{hotel.nights} nights</span>
                  {hotel.confirmed ? (
                    <span className="text-green-600  flex items-center text-sm rounded font-semibold">
                      <FaCheckCircle className="mr-1 right -2 " /> Confirmed
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center text-sm font-semibold">
                      <FaHourglassHalf className="mr-1" /> Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Accommodation;
