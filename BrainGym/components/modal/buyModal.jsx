import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyModalHide } from "../../redux/counterSlice";
import { Confirm_checkout } from "../metamask/Metamask";
import Image from "next/image";
import ContactForm from "../contact/ContactForm";

const BuyModal = () => {
  const { buyModal } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <!-- Buy Now Modal --> */}
      <div className={buyModal ? "modal fade show block" : "modal fade"}>
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNowModalLabel">
                Book a 1:1 call
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(buyModalHide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6">

              <div className="flex space-x-7">
                <div className="mb-6 w-1/2">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Name<span className="text-red">*</span>
                  </label>
                  <input
                    name="name"
                    className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
                    id="name"
                    type="text"
                    required
                  />
                </div>

                <div className="mb-6 w-1/2">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Email<span className="text-red">*</span>
                  </label>
                  <input
                    name="email"
                    className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
                    id="email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 ">
                <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                  Wallet Address:<span className="text-red">*</span>
                </label>
                <input
                  name="address"
                  className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
                  id="address"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                  Message<span className="text-red">*</span>
                </label>
                <textarea
                  id="message"
                  className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
                  required
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              {/* <!-- Total --> */}
              <div className="dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between border-b py-2.5">
                <span className="font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white">
                  Total
                </span>
                <div className="ml-auto">
                  <span className="flex items-center whitespace-nowrap">
                    <span data-tippy-content="ETH">
                      <svg className="h-4 w-4">
                        <use xlinkHref="/icons.svg#icon-ETH"></use>
                      </svg>
                    </span>
                    <span className="text-green font-medium tracking-tight">
                      1.55 ETH
                    </span>
                  </span>
                  <div className="dark:text-jacarta-300 text-right">
                    $130.82
                  </div>
                </div>
              </div>

              {/* <!-- Terms --> */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="buyNowTerms"
                  className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                />
                <label
                  htmlFor="buyNowTerms"
                  className="dark:text-jacarta-200 text-sm"
                >
                  By checking this box, I agree to {"brainGym's"}{" "}
                  <Link href="/tarms" className="text-accent">
                    Terms of Service
                  </Link>
                </label>
              </div>
            </div>
            {/* <!-- end body --> */}

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
