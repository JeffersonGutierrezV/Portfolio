import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { CustomClickable } from "../CustomClickable";

import classnames from "classnames";
import styles from "./index.module.scss";

interface CarouselDotProps {
  isSelected: boolean;
}
interface SwipableElementProps {
  isSwipeLeft: () => void;
  isSwipeRight: () => void;
  element: React.ReactNode;
}
interface CustomCarouselProps {
  slides: React.ReactNode[];
}

const CarouselDot: React.FC<CarouselDotProps> = (props) => {
  const { isSelected } = props;

  return (
    <div
      className={classnames(styles.dot, { [styles.selected]: isSelected })}
    />
  );
};

const SwipableElement: React.FC<SwipableElementProps> = (props) => {
  const { isSwipeLeft, isSwipeRight, element } = props;

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      return isSwipeLeft();
    }
    if (isRightSwipe) {
      return isSwipeRight();
    }
  };

  return (
    <div
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      className={styles.innerSlice}
    >
      {element}
    </div>
  );
};

export const CustomCarousel: React.FC<CustomCarouselProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const handleOnNext = () => {
    if (currentSlideIndex === slides.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handleOnPrev = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const getDots = () => {
    let dots = [];
    for (let i = 0; i < slides.length; i++) {
      dots.push(<div className={styles.dot} />);
    }
    return (
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <CustomClickable
            onClick={() => setCurrentSlideIndex(index)}
            key={index}
          >
            <CarouselDot isSelected={index === currentSlideIndex} />
          </CustomClickable>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.slidesContainer}>
        <div className={styles.arrow}>
          <CustomClickable
            onClick={handleOnPrev}
            classNames={styles.clickableArea}
          >
            <LeftOutlined />
          </CustomClickable>
        </div>
        <div className={styles.slice}>
          {slides.map((el, index) =>
            index === currentSlideIndex ? (
              <SwipableElement
                isSwipeLeft={handleOnNext}
                isSwipeRight={handleOnPrev}
                element={el}
                key={index}
              />
            ) : null
          )}
        </div>
        <div className={styles.arrow}>
          <CustomClickable
            onClick={handleOnNext}
            classNames={styles.clickableArea}
          >
            <RightOutlined />
          </CustomClickable>
        </div>
      </div>
      {getDots()}
    </div>
  );
};
