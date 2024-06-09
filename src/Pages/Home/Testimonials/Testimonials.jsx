import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => 
                setReviews(data))
    },[])
    return (
        <div className='my-20'>
            <div className="mx-auto text-center md:4/12 my-8">
                <p className="text-center text-yellow-600">---What Our Client Say---</p>
                <h3 className="text-4xl uppercase border-y-4 py-4">Testimonials</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review =><SwiperSlide
                    key={review._id}

                    >
                        <div className='flex flex-col items-center m-24 space-y-4'>
                            <Rating
                                className='mb-4'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h2 className='text-2xl text-yellow-500'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;