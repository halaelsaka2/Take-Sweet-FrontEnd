import React from "react";
const PaymentTypeItem = ({ checked, src }) => {
  return (
    <React.Fragment>
      {checked && (
        <div className="branchContainer__branches__location">
          <div className="branch-header-flex">
            <div className="branch-icons-flex">
              <img className="paymentImg" src={`${src}`} alt="paymentType" />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PaymentTypeItem;
