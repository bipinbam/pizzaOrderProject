import { formatCurrency } from "../../utilis/helpers";
import Button from "../../ui/Button";

import DeleteItem from "./deleteItem";
import UpdateItemQuantity from "./updateQuantity";
import { useSelector } from "react-redux";
import { getcurrentQuantityById } from "./cartSlice";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;


  const currentQuantity = useSelector(getcurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
       <UpdateItemQuantity pizzaId={pizzaId}   currentQuantity={currentQuantity}/>
     
     
      <DeleteItem pizzaId={pizzaId} />
     
     
      </div>
    </li>
  );
}

export default CartItem;
