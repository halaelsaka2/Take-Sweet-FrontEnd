import React from "react";

import Table from "../Table";
import Button from "../Button";

const OrderCard = ({ rows, status, date, onReorder, onCancel }) => (
    <div className="order-card">
        <div className="order-card__header">
            <div className="order-card__header__logo">
                <img src="assets/images/patchi-logo-15853341601.jpg" alt="" />
                <div className="order-card__header__logo__date">{date}</div>
            </div>
            <div className="status-current">
                <div className={`color-circle 
                    ${status === "wating" && "color-circle--wating"} 
                    ${status === "arrived" && "color-circle--arrived"}
                    ${status === "canceled" && "color-circle--canceled"}`}
                >
                </div>
                <label for="waiting">{status}</label>
            </div>
        </div>
        <div className="order-card__content">
            <div className="details-table details-table--order">
                <Table
                    rows={rows}
                />
            </div>
            <div className="order-card__content__buttons">
                <Button
                    className="button--rounded button--rounded--s"
                    name="Reorder"
                    onClick={onReorder}
                />

                {status === "wating" &&
                    <Button
                        className="button--rounded button--rounded--s button--rounded--danger"
                        name="Cancel"
                        onClick={onCancel}
                    />
                }
                <a href="">Show more</a>
            </div>
        </div>
    </div>
);

export default OrderCard;
