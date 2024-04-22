export default function Button({
  text = "Sign In",
  customClass = "bg-limegreen-200",
  onClickHandler
}) {
  const handleClick = () => {
    if (onClickHandler && typeof onClickHandler === "function") {
      onClickHandler();
    }
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`md:py-[18px] py-3  md:px-7 px-5 cursor-pointer  rounded-lg text-white text-base md:text-lg md:font-semibold font-medium font-work-sans ${customClass}`}
    >
      {text}
    </button>
  );
}
