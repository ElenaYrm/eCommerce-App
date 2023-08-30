import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './slider.module.scss';
import classnames from 'classnames';

export interface SliderProps {
  images: string[] | undefined;
  handleClick?: () => void;
  fullscreen?: boolean;
  className?: string;
}

export function Slider({ images, fullscreen, handleClick, className }: SliderProps): ReactElement {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={1000}
      loop={true}
      watchOverflow={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      autoHeight={true}
      className={classnames(fullscreen ? styles.product__slider_fullscreen : styles.product__slider, className)}
      onClick={handleClick}
    >
      {images?.map((image) => (
        <SwiperSlide className={styles.slide} key={image}>
          <img src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
