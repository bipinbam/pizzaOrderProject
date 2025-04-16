import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1
        className=" mb-8 text-xl text-stone-700
       font-semibold text-center md:text-3xl "
      >
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username.trim() === '' ? (<CreateUser />):(<Button to='/menu' type='primary'>
      Continue Ordering {username}</Button>)}
    
    </div>
  );
}

export default Home;
