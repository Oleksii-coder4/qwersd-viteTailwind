const Button = ({ label, iconUrl, buttonStyles, href }) => {
  return (
    <a
      href={href && href}
      target="__blank"
      className={buttonStyles && "max-sm:w-full"}
    >
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none 
      ${buttonStyles ? buttonStyles : "bg-coral-red rounded-full text-white"} `}
      >
        {label}

        {iconUrl && (
          <img
            src={iconUrl}
            alt="arrow icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </a>
  );
};

export default Button;
