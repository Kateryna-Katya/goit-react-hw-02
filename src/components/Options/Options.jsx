import clsx from "clsx";
import style from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={clsx(style.buttons)}>
      <button
        className={clsx(style.btn)}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={clsx(style.btn)}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={clsx(style.btn)} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(style.btn)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
