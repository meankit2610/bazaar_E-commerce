import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import {
  decrementQuantity,
  incrementQuantity,
  resetCart
} from "../redux/bazarSlice";
const CartItem = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state)=> state.bazar.productData)
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2>shopping cart</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between gap-6 mt-6"
              >
                <div className="flex items-center gap-2">
                  <MdOutlineClose />
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          incrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p>${item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <button
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
            onClick={() =>
              dispatch(resetCart()) & toast.error("Your Cart is Empty!")
            }
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default CartItem
