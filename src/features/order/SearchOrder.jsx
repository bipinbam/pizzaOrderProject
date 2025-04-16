import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`, setQuery(""));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full max-w-sm p-2 border border-gray-300 rounded-md shadow-sm 
                   bg-white text-gray-800 placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 
                   focus:border-yellow-400 transition-all duration-300 
                   transform hover:scale-105"
        placeholder=" Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
