import Link from "next/link";
import React from "react";
import './ProductBtn.css'
function ProductBtn() {
  return (
    <div className="production-btn">
      <Link href="/products">
        <div className="product cursor-link" style={{zIndex:'9999999 !important'}}>
          <div className="product-one"></div>
          <div className="product-two"></div>
          <div className="product-three"></div>
          <div className="product-four"></div>
        </div>
      </Link>
    </div>
  );
}

export default ProductBtn;
