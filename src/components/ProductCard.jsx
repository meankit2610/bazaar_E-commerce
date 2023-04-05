import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const id = product.title
  const navigate = useNavigate()
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("")
  }
  const rootId = idString(id)
  
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item:product,
      }
    })
  }

  return (
    <div onClick={handleDetails} className="w-full relative group">
      <div className="w-full h-96 cursor-pointer overflow-hidden ">
        <img
          className="w-full h-full group-hover:scale-110 object-cover duration-500"
          src={product.image}
          alt="product-img"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end relative overflow-hidden text-sm w-28">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 ">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price} </p>
            </div>
            <p className="absolute z-20 w-[100px] text-gray-500 flex items-center gap-1 top-0 tranform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category} </p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        {product.isNew && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
            Sale
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard
