import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";

import PropTypes from "prop-types";
import ProductCardsSection from "./../../ProductCardsSection/index";

const ShoppingOrderList = ({
  shoppingOrderList,
  cancelHandle,
  openCardModal,
  orderHandle,
  isProductCardModalOpen = true,
  openProductsCardModal = true,
}) => {
  console.log(shoppingOrderList);
  return shoppingOrderList.map((item, index) => (
    <React.Fragment>
      <ShoppingOrderItem
        key={item.company.id}
        src={item.company.imageSrc}
        quantity={item.shoppingBagProducts.length}
        totalPrice={item.totalPrice}
        openCardModal={openCardModal}
        orderHandle={orderHandle}
        cancelHandle={cancelHandle}
        id={item.company.id}
      />
      {/* {isProductCardModalOpen && (
        <ProductCardsSection
          isClicked={isProductCardModalOpen}
          productCards={shoppingOrderList[index].shoppingBagProducts}
          closeProductsModal={openProductsCardModal}
          handleDelete
        />
      )} */}
    </React.Fragment>
  ));
};

ShoppingOrderList.propTypes = {
  shoppingOrderList: PropTypes.array,
};

export default ShoppingOrderList;
