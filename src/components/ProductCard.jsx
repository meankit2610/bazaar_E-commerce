import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="" />
      </div>
    </div>
  )
}

export default ProductCard
