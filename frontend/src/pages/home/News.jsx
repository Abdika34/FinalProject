import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "We initiated our new Branch at Dire Dawa",
        "description": "for timely deliver for the eastern part of Ethiopian people we opened our new branch at Dire.",
        "image": news1
    },
    {
        "id": 2,
        "title": "On the Cultural Day we started 40% discount on our product",
        "description": "if you order our dress on the cultural day of Ethiopia you get our product by 40% discount.",
        "image": news2
    },
    {
        "id": 3,
        "title": "we opened our new branch at Hawassa",
        "description": "For the clossness to the the southern part of the country we initiated our new branch at Hawassa.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Our five friends cultural dress started to export to any part of the world",
        "description": "If you ordered from any part of the world we will deliver it for you to your home.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Our five friends cultural dress company is expanding  ",
        "description": "we are started to deliver our product to any part of a country just order it we deliver within 2 days from any part of ethiopia.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  )
}

export default News