import classNames from "classnames";

interface ButtonProps {
  title: string;
  type?: "PRIMARY" | "SECUNDARY";
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        type === "PRIMARY"
          ? "py-4 px-24 bg-red-400 text-gray-500 border-[3px] border-transparent rounded-md text-3xl font-bold transition-all hover:bg-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3"
          : "py-4 px-24 bg-transparent border-[3px] border-red-400 rounded-md text-red-400 text-3xl font-bold transition-all hover:border-opacity-80 hover:text-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3"
      )}
    >
      {title}
    </button>
  );
}

export default Button;
