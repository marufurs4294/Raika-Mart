import React from "react";

const Modal = ({product}) => {
  return (
    <div>
      <div>
        <a href="#my-modal-2" className="btn">
          Detail
        </a>
        <div className="modal text-start" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {product.title}
            </h3>
            <p className="py-4">
              {product.description}
            </p>
            <p className="py-4"> Rating:
              {product.rating.rate}
            </p>
            <div className="modal-action">
              <a href="#" className="btn">
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
