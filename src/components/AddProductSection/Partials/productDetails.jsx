import React from "./node_modules/react";
const ProductDetails = ({
  countItems = [
    { name: "Avalialbe amount", unit: "pieces" },
    { name: "pieces for trade", unit: "pieces" },
    { name: "price", unit: "EGY" },
  ],
}) => {
  return (
    <div className="productDetailsContainer">
      <div>product Name</div>
      <br />
      <input className="input" type="text" placeholder="product name" />

      {/* <div className="countContainer">
        <div className="countItem">
          <div className="countItem__info">Avalialbe amount</div>
          <input className="countItem__input" type="number" />
          <label className="countItem__info">pieces</label>
        </div>
        <div className="countItem">
          <div className="countItem__info">pieces for trade</div>
          <input className="countItem__input" type="number" />
          <label className="countItem__info">pieces</label>
        </div>
        <div className="countItem">
          <div className="countItem__info">price</div>
          <input className="countItem__input" type="number" />
          <label className="countItem__info">EGP</label>
        </div>
      </div> */}
      {/* [{name,unit}]*/}
      <div className="countContainer">
        {countItems.map((countItem) => (
          <div className="countItem">
            <div className="countItem__info">{countItem.name}</div>
            <input className="countItem__input" type="number" />
            <label className="countItem__info">{countItem.unit}</label>
          </div>
        ))}
      </div>
      <label>paymentTypes</label>
      <br />
      <div className="paymentsContianer">
        <br />
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">cash</lable>
        </div>
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">credit card</lable>
        </div>
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">VISA</lable>
        </div>
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">MOBILE PAYMENT</lable>
        </div>
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">BANK TRANSFER</lable>
        </div>
        <div className="paymentItem">
          <input type="checkbox" className="paymentItem__input" />
          <lable className="paymentItem__name">E-WALLET</lable>
        </div>
      </div>
      <br />
      <label>Categories</label>
      <br />
      <div className="categoryContainer">
        <div className="categoryItem">
          <input
            type="radio"
            className="categoryItem__input"
            name="category"
            value="Back"
          />
          <label className="categoryItem__name">Back Goods</label>
        </div>
        <div className="categoryItem">
          <input
            type="radio"
            className="categoryItem__input"
            name="category"
            value="Coffe"
          />
          <label className="categoryItem__name">Coffee</label>
        </div>
        <div className="categoryItem">
          <input
            type="radio"
            className="categoryItem__input"
            name="category"
            value="Pastery"
          />
          <label className="categoryItem__name">Pastery</label>
        </div>
      </div>
      <div className="detailsContainer">
        <div className="detailsContainer__info">More details</div>
        <textarea
          className="detailsContainer__input"
          rows="10"
          cols="60"
        ></textarea>
      </div>
      <div className="btnContainer">
        <button className="button--rounded--s">Add</button>
        <button className="button--rounded--s">Cancel</button>
      </div>
    </div>
  );
};

export default ProductDetails;
