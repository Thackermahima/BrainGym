import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "tippy.js/dist/tippy.css";
import { bidsData } from "../../data/bids_data";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { bidsModalShow } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import { isChildrenPageActive } from "../../utils/daynamicNavigation";
import { useRouter } from "next/router";
// import Likes from "../likes";

const ExpertsCollection = () => {
  const dispatch = useDispatch();
  const handleclick = () => {
    console.log("clicked on ");
  };
  const route = useRouter();

  return (
    <>
      <h1 style={{ marginTop: "10%", fontSize: "30px", fontWeight: "bolder" }} className="ml-5" >Explore Experts Collections</h1>

      <div className="container-fluid grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 ml-5 mr-5"
        style={{ marginTop: "5%" }}>

        <article >
        <Link
            href="/expertsCollectionDetail/[id]"
            as={`/expertsCollectionDetail/${1}`}  // Manually set the ID for now
          >

            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">

                {/* <Link href={`/item/${itemLink}`}> */}
                <Image
                  width={230}
                  height={230}
                  src="/images/brain.jpeg"
                  alt="item 5"
                  className="w-full h-[230px] rounded-[0.625rem] object-cover"
                />
                {/* </Link> */}

                {/* <Likes like={likes} /> */}



              </figure>
              <div className="mt-7 flex items-center justify-between">
                {/* <Link href={`/item/${itemLink}`}> */}
                <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                  Expert's name
                </span>
                {/* </Link> */}

                {/* auction dropdown  */}
                {/* <Auctions_dropdown classes="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full " /> */}
              </div>
              {/* <div className="mt-2 text-sm">
                <span className="dark:text-jacarta-200 text-jacarta-700 mr-1 font-semibold">
                 1:1 call
                </span>
               
              </div> */}

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="text-accent font-display text-sm font-semibold"
                // onClick={() => dispatch(buyModalShow())}
                >
                  My collections
                </button>
                {/* <Link
                  // href={`/item/${itemLink}`}
                  className="group flex items-center"
                > */}

                <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">
                  DM : 60 min
                </span>
                {/* </Link> */}
              </div>
            </div>
          </Link>
        </article>


        <article >
          <Link
            href="/expertsCollectionDetail/[id]"
            as={`/expertsCollectionDetail/${2}`}  // Manually set the ID for now
          >
           
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                {/* <Link href={`/item/${itemLink}`}> */}
                <Image
                  width={230}
                  height={230}
                  src="/images/brain.jpeg"
                  alt="item 5"
                  className="w-full h-[230px] rounded-[0.625rem] object-cover"
                />
                {/* </Link> */}

                {/* <Likes like={likes} /> */}


              </figure>
              <div className="mt-7 flex items-center justify-between">
                {/* <Link href={`/item/${itemLink}`}> */}
                <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                  Expert's name
                </span>
                {/* </Link> */}

                {/* auction dropdown  */}
                {/* <Auctions_dropdown classes="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full " /> */}
              </div>
              {/* <div className="mt-2 text-sm">
                <span className="dark:text-jacarta-200 text-jacarta-700 mr-1 font-semibold">
                 1:1 call
                </span>
               
              </div> */}

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="text-accent font-display text-sm font-semibold"
                // onClick={() => dispatch(buyModalShow())}
                >
                  My collections
                </button>
                {/* <Link
                  // href={`/item/${itemLink}`}
                  className="group flex items-center"
                > */}

                <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">
                  DM : 60 min
                </span>
                {/* </Link> */}
              </div>
            </div>
          </Link>
        </article>

      </div>

    </>
  );
};

export default ExpertsCollection;
