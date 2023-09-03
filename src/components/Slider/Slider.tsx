import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './slider.module.scss';
import classnames from 'classnames';
import { Button } from '../shared/Button';

export interface SliderProps {
  images: string[] | undefined;
  handleClick: () => void;
  fullscreen: boolean;
  className?: string;
}

export function Slider({ images, fullscreen, handleClick, className }: SliderProps): ReactElement {
  return (
    <div className={styles.product__slider}>
      {fullscreen && (
        <Button type="button" handleClick={handleClick} name="Close" className={styles.product__slider_button} />
      )}

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
        className={classnames(
          fullscreen ? styles.product__slider_fullscreen : styles.product__slider_regular,
          className,
        )}
        initialSlide={0}
        onClick={(): void => {
          if (!fullscreen) {
            handleClick();
          }
        }}
      >
        {images?.map((image) => (
          <SwiperSlide className={styles.slide} key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
