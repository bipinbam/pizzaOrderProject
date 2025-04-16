import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { gettotalCartQuantity, gettotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utilis/helpers";




function CartOverview() {

const TotalCartQuantity = useSelector(gettotalCartQuantity);

const TotalCartPrice = useSelector(gettotalCartPrice);



if (TotalCartQuantity === 0) return null;    // returns null if cart is empty  in this component (CartOverview)






  return (
    <div
      className="bg-stone-800 px-6 py-4 text-sm uppercase text-stone-100 
                 sm:px-8 md:text-base flex items-center justify-between shadow-lg"
    >
      {/* Cart Info */}
      <p className="space-x-4 font-semibold text-stone-300">
        <span className="text-yellow-400"> Total Quantity {TotalCartQuantity}</span>
        <span className="text-green-400"> Total Price  {formatCurrency(TotalCartPrice)}</span>
      </p>

      {/* Open Cart Link */}
      <Link
        to="/cart"
        className="text-yellow-400 font-semibold hover:text-yellow-300 
                   transition-colors duration-300 ease-in-out"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
