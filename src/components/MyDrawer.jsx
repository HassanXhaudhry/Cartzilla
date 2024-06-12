import React, { Fragment, useState, useEffect } from "react";
import { Drawer } from "antd";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import { useSelector } from "react-redux";

const MyDrawer = ({ isOpen, closeDrawer }) => {
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Fragment>
      <Drawer
        closable
        destroyOnClose
        title="Cart Items"
        placement="right"
        visible={isOpen}
        onClose={closeDrawer}
      >
        <div>
          {cartItems.length === 0 ? (
            <div className="flex gap-4 z-20">
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Cart is empty</div>
              </Toast>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md" />
                    <div>
                      <h4 className="text-md font-semibold">{item.title}</h4>
                      <p className="text-sm">Quantity: {item.amount}</p>
                      <p className="text-sm">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </Fragment>
  );
};

export default MyDrawer;
