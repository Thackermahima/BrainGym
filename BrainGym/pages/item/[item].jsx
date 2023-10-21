import React, { useState } from "react";
import { useRouter } from "next/router";
import { items_data } from "../../data/items_data";
import Auctions_dropdown from "../../components/dropdown/Auctions_dropdown";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Items_Countdown_timer from "../../components/items_countdown_timer";
// import { ItemsTabs } from "../../components/component";
import More_items from "./more_items";
import Likes from "../../components/likes";
import Meta from "../../components/Meta";
import { useDispatch } from "react-redux";
import { bidsModalShow } from "../../redux/counterSlice";
import Image from "next/image";
import Testimonial_carousel from "../../components/carousel/testimonial_carousel";

const Item = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pid = router.query.item;

  const [imageModal, setImageModal] = useState(false);

  return (
    <>
      <Meta title={`${pid}`} />
      {/*  <!-- Item --> */}
      <section className="relative lg:mt-24 lg:pt-24 lg:pb-24 mt-24 pt-12 pb-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="container">
          {/* <!-- Item --> */}
          {items_data
            .filter((item) => item.id === pid)
            .map((item) => {
              const {
                image,
                title,
                id,
                likes,
                text,
                creatorImage,
                ownerImage,
                creatorname,
                ownerName,
                price,
                auction_timer,
              } = item;

              return (
                <div className="md:flex md:flex-wrap" key={id}>
                  {/* <!-- Image --> */}

                  <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                    {/* <!-- Collection / Likes / Actions --> */}
                    <div className="mb-4 ">
                      {/* <!-- Collection --> */}
                      <div className="flex  justify-start align-top">
                        <figure className="relative h-40 w-40 dark:border-jacarta-600 rounded-xl border-[5px] border-white mb-3">
                          <Image
                            src={image}
                            width={141}
                            height={141}
                            alt={title}
                            className="dark:border-jacarta-600 rounded-2lg border-[5px] border-white w-full h-full "
                          />

                        </figure>
                        <div className=" m-4">
                          <div className="flex">
                            <Link
                              href="#"
                              className="text-accent mr-2 text-md font-bold"
                            >
                              CryptoGuysNFT
                            </Link>
                            <span
                              className="dark:border-jacarta-600 bg-green inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                              data-tippy-content="Verified Collection"
                            >
                              <Tippy content={<span>Verified</span>}>
                                <svg className="icon h-[.875rem] w-[.875rem] fill-white">
                                  <use xlinkHref="/icons.svg#icon-right-sign"></use>
                                </svg>
                              </Tippy>
                            </span>
                          </div>
                          <h1 className="font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white">
                            {title}
                          </h1>
                        </div>
                      </div>
                      <div className="mr-4 flex h-50 w-fit  self-center align-middle dark:bg-jacarta-700 rounded-md bg-white  p-4 ">
                        <svg className="icon icon-calender dark:fill-orange fill-orange h-8 w-8">
                          <use xlinkHref="/icons.svg#icon-star"></use>
                        </svg>
                        <div
                          classes=" flex  dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 flex space-x-1 rounded-xl border bg-white py-2 px-4"
                        >
                          5 / 5 (Ratings)
                        </div>
                      </div>

                    </div>



                    <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Tippy content={<span>ETH</span>}>
                          <span className="-ml-1">
                            <svg className="icon mr-1 h-4 w-4">
                              <use xlinkHref="/icons.svg#icon-ETH"></use>
                            </svg>
                          </span>
                        </Tippy>
                        <span className="text-green text-sm font-medium tracking-tight dark:bg-jacarta-700 rounded-md bg-white p-2">
                          {price} ETH
                        </span>
                      </div>
                      <span className="dark:text-jacarta-300 text-jacarta-400 text-sm dark:bg-jacarta-700 rounded-md bg-white p-2">
                        60 min Sassion
                      </span>
                      <span className="dark:text-jacarta-300 text-jacarta-400 text-sm dark:bg-jacarta-700 rounded-md bg-white p-2">
                        1:1 available
                      </span>

                    </div>

                    <p className="dark:text-jacarta-300 mb-10">{text}</p>


                  </div>
                  <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem] sm:border-l dark:border-jacarta-600 sm:border-jacarta-100">
                    {/* <!-- Collection / Likes / Actions --> */}
                    <div className="mb-3 flex">
                      {/* <!-- Collection --> */}


                      {/* <!-- Likes / Actions --> */}
                      <div className=" flex items-stretch space-x-2 relative">
                        <Likes
                          like={likes}
                          classes="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 flex items-center space-x-1 rounded-xl border bg-white py-2 px-4"
                        />
                      </div>
                    </div>
                    <div className="mb-8 flex flex-wrap  justify-start">

                      <div className="my-3">
                        <p className="font-display text-jacarta-700 mb-4 text-md font-semibold dark:text-white">
                          Pick a Date
                        </p>
                        <input className="dark:bg-jacarta-700 rounded-md bg-white p-2" type="date" name="bookdate" id="bookdate" />
                      </div>

                      <div className="my-3 ml-4">
                        <p className="font-display text-jacarta-700 mb-4 text-md font-semibold dark:text-white">
                          Pick a Time
                        </p>
                        <input className="dark:bg-jacarta-700 rounded-md bg-white p-2" type="time" name="booktime" id="booktime" />
                      </div>
                    </div>
                    <button
                      className="bg-accent shadow-accent-volume hover:bg-jacarta-500-dark inline-block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                      onClick={() => dispatch(bidsModalShow())}
                    >
                      Confirm Booking
                    </button>

                  </div>
                  {/* <!-- end details --> */}
                </div>
              );
            })}
          {/* <ItemsTabs /> */}
        </div>
      </section>
      {/* <!-- end item --> */}

      <More_items />
    </>
  );
};

export default Item;
