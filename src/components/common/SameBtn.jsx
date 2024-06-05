const SameBtn = (props) => {
  return (
    <>
      <button
        className={`border-transparent border  leading-normal font-semibold text-base rounded text-blue ${
          props.padding ? "" : "py-4 px-7"
        } ${props.className}`}
      >
        {props.btnName}
      </button>
    </>
  );
};

export default SameBtn;
