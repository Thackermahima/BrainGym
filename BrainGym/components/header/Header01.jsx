import Image from "next/image";
import Link from "next/link";
import DarkMode from "../mode/DarkMode";
import Logo from "./../../public/images/brain_logo.png";
import WhiteLogo from "./../../public/images/logo_white.png";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {
  isChildrenPageActive,
  isParentPageActive,
} from "../../utils/daynamicNavigation";
import React, { useEffect, useState } from "react";
import { BrainGymAuthContext } from "../../context/brainGymContext";


export default function Header01() {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(walletAddress !== '');
  const superCbrainGymContext = React.useContext(BrainGymAuthContext);
  const { login, logout, allCollection } = superCbrainGymContext;
  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      localStorage.setItem('walletAddress', walletAddress);
    } else {
      localStorage.removeItem('walletAddress');
    }
  }, [walletAddress]);

  const route = useRouter();


  return <>
    {/* main desktop menu sart*/}
    <header className={`js-page-header fixed top-0 z-20 w-full ${sticky ? 'backdrop-blur' : ''} transition-colors`}>
      <div className="flex items-center px-6 py-6 xl:px-24 ">
        <Link className="shrink-0" href="/" >
          <div>
            <Image
              src={Logo}
              height={128}
              width={130}
              alt="brainGym"
              style={{ height: "60px", width: "220px" }}
            />
            {/* <h1 style={{ fontSize: "30px", color: "#8358FF", fontWeight: "bolder" }}>BrainGym</h1> */}
          </div>

          <div className="hidden dark:hidden">
            <Image
              src={WhiteLogo}
              height={28}
              width={130}
              alt="brainGym"
            />
          </div>

        </Link>
        {/* End  logo */}

        {/* End Desktop search form */}

        <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
          <nav className="navbar w-full">
            <ul className="flex flex-col lg:flex-row">
              <Link href="/create" >

                {/* home */}
                <li className="js-nav-dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full ">
                    <span style={{ color: "#8358FF" }}
                    >
                      Create my page
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                </li>
              </Link>

              {/* create */}
              <li className="group">
                <Link href="/expertsCollection" >

                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive(route.asPath, "/expertsCollection")
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                      style={{ color: "#8358FF" }}

                    >
                      Experts collections
                      {/* Create NFT Readership */}
                    </span>
                  </button>

                </Link>
              </li>
            </ul>
          </nav>
          {/* End menu for desktop */}

          <div className="ml-8 hidden items-center lg:flex xl:ml-12">
            {/* <WalletButton /> */}



            <div>
              {/* <button onClick={disconnectWallet}>Disconnect Wallet</button> */}
            </div>
            <div>
              <button
                onClick={login}
                className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                </svg>
              </button>
            </div>

            <div className="js-nav-dropdown group-dropdown relative">

              <div>
                <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                </button>
              </div>

              <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                <div>
                  <button className="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white">
                    <span>0x7a86c0b06417100...</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                    </svg>
                  </button>
                </div>
                <div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
                  <span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">
                    Balance
                  </span>
                  <div className="flex items-center">
                    <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                      <use xlinkHref="/icons.svg#icon-ETH" />
                    </svg>
                    <span className="text-green text-lg font-bold">
                      10 ETH
                    </span>
                  </div>
                </div>
                <Link
                  href="/user/avatar_6"
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    My Profile
                  </span>

                </Link>
                <Link
                  href="/profile/user_avatar"
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Edit Profile
                  </span>

                </Link>
                <Link
                  href=""
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                  </svg>
                  <span onClick={logout} className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Sign out
                  </span>

                </Link>
              </div>
            </div>
            <DarkMode />
          </div>
          {/* End header right content (metamask and other) for desktop */}
        </div>
        {/* header menu conent end for desktop */}

        <div className="ml-auto flex lg:hidden">
          <Link
            href="/profile/user_avatar"
            className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            aria-label="profile"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
            </svg>

          </Link>
          <DarkMode />
          <button
            className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            aria-label="open mobile menu"
            onClick={() => setToggle(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
            </svg>
          </button>
        </div>
        {/* End header right content  for mobile */}
      </div>
      {/* End flex item */}
    </header>
    {/* main desktop menu end */}

    {/* start mobile menu and it's other materials  */}
    <div
      className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${toggle ? "nav-menu--is-open" : "hidden"
        }`}
    >
      <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
        <div className="dark:hidden">
          <Image
            src={Logo}
            height={28}
            width={130}
            alt="brainGym | NFT Marketplace"
            className="max-h-7 h-auto "
          />
        </div>

        <div className="hidden dark:block">
          <Image
            src={WhiteLogo}
            height={28}
            width={130}
            alt="brainGym | NFT Marketplace"
          />
        </div>

        <button
          className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          onClick={() => setToggle(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </button>
      </div>
      {/* mobile menu top header content */}

      <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
        <input
          type="search"
          className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
          placeholder="Search"
        />
        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-jacarta-500 h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
          </svg>
        </span>
      </form>
      {/* End search form mobile menu  */}

      <nav className="navbar w-full">

      </nav>
    </div>
  </>;
}
