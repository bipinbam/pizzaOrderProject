import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/user/username";
function Header() {
  return (
    <header
      className="border-b border-stone-500 
     bg-yellow-500 px-4 py-3  uppercase sm:px-6  flex items-center justify-between"
    >
      <Link to="/" className=" tracking-widest ">
        Fast Pizza Order Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
export default Header;



