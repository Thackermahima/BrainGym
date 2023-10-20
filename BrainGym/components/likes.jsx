import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";

const Likes = ({
  like,
  classes = "dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2",
}) => {
  const [likeState, setLikeState] = useState(
    typeof like === "string" ? +like - 1 : like - 1
  );
  const [likeNumber, setlikeNumber] = useState(likeState);

  const handleLike = () => {
    if (likeState >= likeNumber) {
      setlikeNumber((prev) => prev + 1);
    } else {
      setlikeNumber((prev) => prev - 1);
    }
  };

  return (
    <div className={classes} onClick={handleLike}>
      <Tippy content={<span>Call</span>}>
        <button className="js-likes relative cursor-pointer">
          <svg className="icon icon-calender dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
            <use xlinkHref="/icons.svg#icon-hert-fill"></use>
          </svg>
        </button>
      </Tippy>
      <span className="dark:text-jacarta-200 text-sm">1:1 Call</span>
    </div>
  );
};

export default Likes;
