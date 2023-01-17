import React, { useEffect, useState } from 'react';
import BigIcon from './big-icon';
import { WineItemInterface } from '../types/main-types';
import SingleItem from './single-item/single-item';
import "../styles/carousel.css";

type CardSliderProps = {
  slides: WineItemInterface[]
}

const CardSlider: React.FC<CardSliderProps> = ({ slides }) => {
  const [next, setNext] = useState(4);
  const [prev, setPrev] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    let maxSlide = slides.length >= 4 ? 4 : slides.length;
    setNext(maxSlide);
    setPrev(0);
  }, [slides]);

  const goToPrev = () => {
    const isFirstSlide = prev === 0;
    const newBeginIndex = isFirstSlide ? 0 : prev - 1;
    setPrev(newBeginIndex);
    const newEndIndex = isFirstSlide ? next : next - 1;
    setNext(newEndIndex);
  }
  const goToNext = () => {
    const isLastSlide = next === slides.length;
    const newBeginIndex = isLastSlide ? prev : prev + 1;
    setPrev(newBeginIndex);
    const newEndIndex = isLastSlide ? next : next + 1;
    setNext(newEndIndex);
  }

  return (
    <div className='slider-style'>
      <div className='slide-container'>
        {
          slides.slice(prev, next).map((item: WineItemInterface) => (
            <SingleItem item={item} key={`${item.id}`} />
          ))
        }

      </div>
      <div className='container-arrow'>
        <div onClick={goToPrev}>
          <BigIcon side='right' />
        </div>
        <div onClick={goToNext}>
          <BigIcon side='left' />
        </div>

      </div>
    </div>
  )
}

export default CardSlider;
