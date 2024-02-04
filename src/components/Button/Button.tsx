
import { MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  bgColor: string;
  hoverColor: string;
  additionalClasses?: string;
}

const Button = ({
  onClick,
  label,
  bgColor,
  hoverColor,
  additionalClasses,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`grow justify-center px-6 py-3 mr-4 text-base font-medium text-white hover:cursor-pointer hover:bg-[${hoverColor}] rounded-[50px] max-md:px-5 ${additionalClasses}`}
        onClick={onClick}
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = hoverColor)
        }
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
