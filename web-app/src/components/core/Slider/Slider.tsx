'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import {IEventGetRes} from "@/types/event.types";
import {Link} from "@nextui-org/react";

const contentArray = [
    {
        title: 'Title 1',
        poster: 'https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg',
        start_time: new Date(),
        location: 'Kyiv',
    },
    {
        title: 'Title 2',
        poster: 'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg',
        start_time: new Date(),
        location: 'Dnipro',
    },
    {
        title: 'Title 3',
        poster: 'https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg',
        start_time: new Date(),
        location: 'Kharkiv',
    },
];

interface Props {
    events: IEventGetRes[]
}

function Slider({events}: Props) {
    return (
        <div className={'h-full w-full'}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className={'h-full'}
            >
                {events &&
                    events.map((e) => {
                        return (
                            <Link
                                href={`/events/${e.id}`}
                            >
                                <SwiperSlide
                                    key={e.poster}
                                    className={`h-screen bg-primary`}
                                >
                                    <div
                                        className={'grid h-full place-items-center'}
                                        style={{
                                            backgroundImage: `url(${e.poster})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                            // backgroundRepeat: 'no-repeat',
                                            // objectFit: 'fill'
                                        }}
                                    >
                                        <div className={'font-mono'}>
                                            <div className={'text-5xl'}>
                                                {new Date(e.startTime).toDateString()}
                                            </div>
                                            <div className={'my-3 pl-3 text-9xl font-bold'}>
                                                {e.title}
                                            </div>
                                            <div className={'float-right text-5xl'}>{e.location}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Link>
                        );
                    })}
            </Swiper>
        </div>
    );
}

export default Slider;
