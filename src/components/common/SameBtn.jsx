const SameBtn = (props) => {
  return (
    <div>
      <button
        onClick={props.click}
        className=" py-4 px-7 bg-darkBlue text-base  rounded-[4px] text-white fw-semibold leading-xs1"
      >
        {props.text}
      </button>
    </div>
  );
};

export default SameBtn;
