const CommonBtn = (props) => {
  return (
    <>
      <button
        aria-label="main_button"
        className={`border-transparent border  leading-normal font-semibold text-sm md:text-base rounded  ${
          props.padding ? "" : "py-4 px-7"
        } ${props.className}`}
      >
        {props.btnName}
      </button>
    </>
  );
};

export default CommonBtn;
