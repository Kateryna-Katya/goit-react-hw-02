import clsx from "clsx";
import style from "./Description.module.css";

function Description() {
  return (
    <div className={clsx(style.container)}>
      <h1 className={clsx(style.title)}>Sip Happens Café</h1>
      <p className={clsx(style.text)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
export default Description;
