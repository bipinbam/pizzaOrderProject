import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

import  { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    
    dispatch (updateName(username));
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <p className=" mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Enter your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   bg-white text-gray-800 placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 
                   focus:border-yellow-400 transition-all duration-300 
                   hover:scale-105  "
      />

      {username !== " " && (
        <div >
        < Button  >Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
