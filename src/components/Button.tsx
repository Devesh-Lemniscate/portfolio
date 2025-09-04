interface ButtonProps {
  title: string;
  id?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

const Button = ({title, id, rightIcon, leftIcon, containerClass, onClick}: ButtonProps) => {
  return (
    <button id={id} className={`group relative z-10 w-fit curor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`} onClick={onClick}>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
