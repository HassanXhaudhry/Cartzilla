import React, { Fragment, useEffect } from "react";
import { Drawer } from "antd";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../reducers/CartReducer"; // Adjust the import path as needed

const MyDrawer = ({ isOpen, closeDrawer }) => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);

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
                      <p className="text-sm">${(item.price * item.amount).toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="px-2 py-1 bg-gray-500 text-white rounded-sm"
                          onClick={() => dispatch(increase({ id: item.id }))}
                        >
                          +
                        </button>
                        <button
                          className="px-2 py-1 bg-gray-500 text-white rounded-sm"
                          onClick={() => dispatch(decrease({ id: item.id }))}
                        >
                          -
                        </button>
                        <button
                          className="px-2 py-1 bg-red-600 text-white flex rounded-sm items-center justify-center"
                          onClick={() => dispatch(remove({ id: item.id }))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between">
                <h4 className="text-lg font-semibold">Sub Total: </h4>
                <h4 className="text-lg font-semibold">${total.toFixed(2)}</h4>
              </div>
              <button className="bg-gray-600 text-white py-2 mx-4 text-md rounded-md font-Poppins font-semibold">Pay &nbsp; ${total.toFixed(2)}</button>
            </div>
          )}
        </div>
      </Drawer>
    </Fragment>
  );
};

export default MyDrawer;
