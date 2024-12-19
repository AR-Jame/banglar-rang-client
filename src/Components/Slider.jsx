import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../assest/pexels-steve-1047540.jpg"
import img2 from "../assest/pexels-steve-1269968.jpg"
const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper max-h-[89.89vh]"
        >
            <SwiperSlide>
                <img className='max-h-[91.5vh] w-full object-cover' src={img1} />
            </SwiperSlide>
            <SwiperSlide>
                <img className='max-h-[91.5vh] w-full object-cover opacity-80' src={img2} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;