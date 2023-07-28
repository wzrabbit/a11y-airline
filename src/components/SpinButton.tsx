import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

type SpinButtonProps = {
  label: string;
};

const SpinButton = ({ label }: SpinButtonProps) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <div className="spinButtonLabel">
          <label>{label}</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label={`${label} 탑승자 한 명 줄이기`}
        >
          -
        </button>
        <input
          type="number"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-label={label}
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label={`${label} 탑승자 한 명 늘리기`}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
