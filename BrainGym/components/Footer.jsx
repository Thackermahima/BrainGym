import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])


  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrollBtn(true)
    } else if (window.scrollY < 70) {
      setScrollBtn(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>

      <footer className="dark:bg-jacarta-900 page-footer ">
        <div className="container">
          <div className="row">
            <div className="col-span-12">
              <div className=" text-center  items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0 footer-center">
                <span className="dark:text-jacarta-400 text-sm ">
                  <span>Bringing the coolest things to life!</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        onClick={scrollTop}
        onKeyDown={scrollTop}
        role="button"
        className="scroll-to-target scroll-to-top fixed bottom-10 right-10"
        style={{ display: scrollBtn ? "block" : "none", }}
      >

        <div className="group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
          <MdKeyboardArrowUp />
        </div>

      </div>
    </>
  );
};

export default Footer;
