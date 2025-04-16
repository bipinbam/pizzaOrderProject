import { Link } from "react-router-dom";


function Button({ children, disabled,to, type ,onClick})
 {
  if(to)
    return (
      <Link
        to={to}
        className="inline-block p-3 rounded-full font-semibold uppercase tracking-wide 
                     text-stone-800 bg-yellow-400 hover:bg-yellow-300 
                     transform transition-transform duration-300 hover:scale-105 
                      disabled:bg-gray-300 sm:px-6 sm:py-4 cursor-pointer" 
      >
        {children}
      </Link>
    );

    if(onClick)
      return (
        <button onClick={onClick} 
          disabled={disabled}
          className="inline-block p-3 rounded-full font-semibold uppercase tracking-wide 
                       text-stone-800 bg-yellow-400 hover:bg-yellow-300 
                       transform transition-transform duration-300 hover:scale-105 
                        disabled:bg-gray-300 sm:px-6 sm:py-4 cursor-pointer"
        >
          {children}
        </button>
      );

  return (
    <button
      disabled={disabled}
      className="inline-block p-3 rounded-full font-semibold uppercase tracking-wide 
                   text-stone-800 bg-yellow-400 hover:bg-yellow-300 
                   transform transition-transform duration-300 hover:scale-105 
                    disabled:bg-gray-300 sm:px-6 sm:py-4 cursor-pointer"
    >
      {children}
    </button>
  );
}
export default Button;
