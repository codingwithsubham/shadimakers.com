import React, { useEffect, useState } from 'react';

const Slide = ({ data, counter, idx }) => {
  return (
    counter === idx && (
      <div
        className="slide slide-slw"
        style={
          data?.img
            ? {
                backgroundImage: `url(${require(`../../static/slider/${data?.img}`)})`,
              }
            : {}
        }
      >
        <div className="slider-content">
          <h1>{data?.hdr}</h1>
          <p>{data?.desc}</p>
        </div>
      </div>
    )
  );
};

const Slider = ({ data, className }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (counter < data?.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    }, 3000);
  }, [counter, data?.length]);

  return (
    <div className={`my-slider ${className}`}>
      {data?.map((itm, idx) => (
        <Slide data={itm} counter={counter} key={idx} idx={idx}/>
      ))}
    </div>
  );
};

export default Slider;
