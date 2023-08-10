import React from 'react'

function CartBtn({handleElementLeave,handleElementHover}) {
  return (
    <div className="cart-btn cursor-link" onMouseEnter={handleElementHover} onMouseLeave={handleElementLeave}>
    <div className="cart-btn-one"></div>
    <div className="cart-btn-two"></div>
    <div className="cart-btn-badges">
      <p className="cart-btn-badges-counter">0</p>
    </div>
  </div>
  )
}

export default CartBtn