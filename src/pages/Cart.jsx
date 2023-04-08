import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal <span className="font-titleFont font-bold">$200</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,!
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$200</span>
          </p>
          <button className="text-base bg-black text-white py-3 mt-6 w-full hover:bg-gray-800 duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart