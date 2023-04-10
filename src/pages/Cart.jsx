import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)
  const [payNow, setPayNow] = useState(false)
  const [totalAmnt, setTotalAmnt] = useState("")

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true)
    } else {
      toast.error("Please Sign in to Checkout")
    }
  }
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity
      return price
    });
    setTotalAmnt(price.toFixed(2))
  }, [productData])
  
  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmnt * 100,
      token:token,
    })
  }
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
              Subtotal{" "}
              <span className="font-titleFont font-bold">${totalAmnt}</span>
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
            Total <span className="text-xl font-bold">${totalAmnt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white py-3 mt-6 w-full hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51MvNlRSDyKElSbr8Kf822Dqj6hSv3L7nv8SLk9aZOZTxrzsUYxInwffEea3eHbXoCGbmaNoxGgkmN7qX4BzpaxIs00XkYMYdPg"
                name="Bazaar Online Shopping"
                amount={totalAmnt * 100}
                label="Pay To Bazaar"
                description={`Your Payment is $${totalAmnt} `}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Cart
