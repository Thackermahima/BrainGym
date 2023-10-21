import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Likes from "../likes";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import { useDispatch, useSelector } from "react-redux";
import { buyModalShow } from "../../redux/counterSlice";

const CategoryItem = () => {
  const { sortedtrendingCategoryItemData } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
      {sortedtrendingCategoryItemData.map((item) => {
        const {
          id,
          image,
          title,
          price,
          likes,
          time_duration
        } = item;
        const itemLink = image
          .split("/")
          .slice(-1)
          .toString()
          .replace(".jpg", "")
          .replace(".gif", "");
        return (
          <article key={id}>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <Link href={`/item/${itemLink}`}>
                  <Image
                    width={230}
                    height={230}
                    src={image}
                    alt="item 5"
                    className="w-full h-[230px] rounded-[0.625rem] object-cover"
                  />
                </Link>

                <Likes like={likes} />
              </figure>
              <div className="mt-7 flex items-center justify-between">
                <Link href={`/item/${itemLink}`}>
                  <span className="font-display text-jacarta-700 hover:text-jacarta-500 text-base dark:text-white">
                    {title}
                  </span>
                </Link>
              </div>
              <div className="mt-2 text-sm">
                <span className="dark:text-jacarta-200 text-jacarta-700 mr-1">
                  {price}
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="hover:text-jacarta-500  text-white font-display text-sm font-semibold hover:bg-white  bg-jacarta-500  shadow-md p-2 rounded-lg"
                  onClick={() => dispatch(buyModalShow())}
                >
                  Book now
                </button>
                <Link
                  href={`/item/${itemLink}`}
                  className="group flex items-center"
                >
                  <svg className="icon icon-history group-hover:fill-jacarta-300 dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                    <use xlinkHref="/icons.svg#icon-history"></use>
                  </svg>
                  <span className="group-hover:text-jacarta-500 font-display dark:text-jacarta-200 text-sm font-semibold">
                    {time_duration}
                  </span>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;
