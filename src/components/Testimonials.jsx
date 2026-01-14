'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Testimonials() {

  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Home Chef",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      review: "Amazing kitchen tools! Made my cooking so much faster and easier. Highly recommend!",
    },
    {
      id: 2,
      name: "Mark Thompson",
      position: "Restaurant Owner",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
      review: "Great quality products. Delivery was fast and the packaging was perfect.",
    },
    {
      id: 3,
      name: "Sophia Lee",
      position: "Food Blogger",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      review: "Absolutely love the chef knife set. It’s sharp, durable, and feels professional.",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Catering Manager",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      rating: 4,
      review: "Very happy with the purchase. Products are premium and worth the price.",
    },
    {
      id: 5,
      name: "Emma Williams",
      position: "Cooking Enthusiast",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      review: "KitchenPro has changed the way I cook. Everything feels professional now!",
    },
  ];

  return (
    <div className="mt-20">
      
      {/* Header */}
      <div className="flex flex-col justify-center w-10/12 md:w-1/2 mx-auto mb-10 space-y-3 text-center">
        <h1 className="text-3xl font-bold text-[#CE8946]">
          What Our Customers Say
        </h1>
        <p className="text-gray-400">
          Real feedback from home chefs and professionals who trust KitchenPro tools.
        </p>
      </div>

      {/* Coverflow Slider */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.8,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full max-w-6xl mx-auto py-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-[#CE8946] text-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center h-full">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-white"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm opacity-80 mb-1">{review.position}</p>
              <p className="text-yellow-300 mb-2">
                {"⭐".repeat(review.rating)}
              </p>
              <p className="text-sm opacity-90">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
