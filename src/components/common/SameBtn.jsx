import React from "react";
const SameBtn = (props) => {
  return (
    <div>
      <button
        onClick={props.click}
        className=" py-4 px-7 bg-darkBlue text-base  fw-semibold lead"
      >
        {props.text}
      </button>
    </div>
  );
};
export default SameBtn;
