import React, { useEffect, useState } from 'react';
import BigIcon from './big-icon';
import { WineItemInterface } from '../types/main-types';
import SingleItem from './single-item/single-item';
import "../styles/carousel.css";

type CardSliderProps = {
  slides: WineItemInterface[]
}

const CardSlider: React.FC<CardSliderProps> = ({ slides }) => {
  const slidesCount = 4;
  const [next, setNext] = useState(slidesCount);
  const [prev, setPrev] = useState(0);
  const [color, setColor] = useState('grey');
  const [current, setCurrent] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    let maxSlide = slides.length >= slidesCount ? slidesCount : slides.length;
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

  const goToIndex = (slideIndex: number) => {
    setPrev(slideIndex);
    setNext(slideIndex + 1);
    setCurrent(slideIndex);
  };

  return (
    <div className='slider-style'>
      <div className='slide-container'>
        {
          slides.slice(prev, next).map((item: WineItemInterface) => (
            <SingleItem item={item} key={`${item.id}`} />
          ))
        }

      </div>
      {
        windowSize < 501
          ?
          <div className='container-dots'>
            {
              slides.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === current && 'dot--current'}`}
                  onClick={() => goToIndex(i)}
                ></div>
              ))
            }
          </div>
          :
          <div className='container-arrow'>
            <div onClick={goToPrev}>
              <BigIcon side='right' />
            </div>
            <div onClick={goToNext}>
              <BigIcon side='left' />
            </div>
          </div>
      }
    </div>
  )
}

export default CardSlider;
