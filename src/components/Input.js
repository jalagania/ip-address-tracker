import { useRef } from "react";
import "./Input.css";

function Input(props) {
  const inputRef = useRef();

  function handleArrowClick() {
    if (inputRef.current.value !== "") {
      props.getLocationByIp(inputRef.current.value);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (
      inputRef.current.value !== "" &&
      event.key === "Enter" &&
      document.activeElement === inputRef.current
    ) {
      props.getLocationByIp(inputRef.current.value);
    }
  });

  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        id="search-bar"
        placeholder="Search for any IP address or domain"
        ref={inputRef}
      />
      <div className="search-arrow" onClick={handleArrowClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}

export default Input;
