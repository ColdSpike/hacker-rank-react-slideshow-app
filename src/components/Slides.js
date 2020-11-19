import React, { useState } from "react";

function Slides({ slides }) {
  const [slidePosition, setSlidePosition] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setSlidePosition(0)}
          disabled={slidePosition === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => setSlidePosition(slidePosition - 1)}
          disabled={slidePosition === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => setSlidePosition(slidePosition + 1)}
          disabled={slidePosition === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slidePosition].title}</h1>
        <p data-testid="text">{slides[slidePosition].text}</p>
      </div>
    </div>
  );
}

export default Slides;
