import React from "./node_modules/react";
const ProductDetails = ({
  countItems = [
    { name: "Avalialbe amount", unit: "pieces" },
    { name: "pieces for trade", unit: "pieces" },
    { name: "price", unit: "EGY" },
  ],
}) => {
  return (
    <div class="productDetailsContainer">
      <div>product Name</div>
      <br />
      <input class="input" type="text" placeholder="product name" />

      {/* <div class="countContainer">
        <div class="countItem">
          <div class="countItem__info">Avalialbe amount</div>
          <input class="countItem__input" type="number" />
          <label class="countItem__info">pieces</label>
        </div>
        <div class="countItem">
          <div class="countItem__info">pieces for trade</div>
          <input class="countItem__input" type="number" />
          <label class="countItem__info">pieces</label>
        </div>
        <div class="countItem">
          <div class="countItem__info">price</div>
          <input class="countItem__input" type="number" />
          <label class="countItem__info">EGP</label>
        </div>
      </div> */}
      {/* [{name,unit}]*/}
      <div class="countContainer">
        {countItems.map((countItem) => (
          <div class="countItem">
            <div class="countItem__info">{countItem.name}</div>
            <input class="countItem__input" type="number" />
            <label class="countItem__info">{countItem.unit}</label>
          </div>
        ))}
      </div>
      <label>paymentTypes</label>
      <br />
      <div class="paymentsContianer">
        <br />
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">cash</lable>
        </div>
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">credit card</lable>
        </div>
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">VISA</lable>
        </div>
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">MOBILE PAYMENT</lable>
        </div>
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">BANK TRANSFER</lable>
        </div>
        <div class="paymentItem">
          <input type="checkbox" class="paymentItem__input" />
          <lable class="paymentItem__name">E-WALLET</lable>
        </div>
      </div>
      <br />
      <label>Categories</label>
      <br />
      <div class="categoryContainer">
        <div class="categoryItem">
          <input
            type="radio"
            class="categoryItem__input"
            name="category"
            value="Back"
          />
          <label class="categoryItem__name">Back Goods</label>
        </div>
        <div class="categoryItem">
          <input
            type="radio"
            class="categoryItem__input"
            name="category"
            value="Coffe"
          />
          <label class="categoryItem__name">Coffee</label>
        </div>
        <div class="categoryItem">
          <input
            type="radio"
            class="categoryItem__input"
            name="category"
            value="Pastery"
          />
          <label class="categoryItem__name">Pastery</label>
        </div>
      </div>
      <div class="detailsContainer">
        <div class="detailsContainer__info">More details</div>
        <textarea
          class="detailsContainer__input"
          rows="10"
          cols="60"
        ></textarea>
      </div>
      <div class="btnContainer">
        <button class="button--rounded--s">Add</button>
        <button class="button--rounded--s">Cancel</button>
      </div>
    </div>
  );
};

export default ProductDetails;
