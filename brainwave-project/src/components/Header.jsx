import { useLocation } from "react-router-dom";
import { brainwave } from "../assets"; /* Logo image */
import { navigation } from "../constants"; /* Import prewritten data */
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import {
  disablePageScroll,
  enablePageScroll,
} from "scroll-lock"; /* When user is in the menu, they wont be able to scroll */
import Login from "./Login-Signup/Login";
import SignUp from "./Login-Signup/Signup";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleLoginSignup = (isSignUp) => {
    setOpenLogin(true);
    setIsSignUp(isSignUp);
  };

  const toggleOpenLogin = (signUp) => {
    if (openLogin) {
      setOpenLogin(false);
      disablePageScroll();
    } else {
      setOpenLogin(true);
      setIsSignUp(signUp);
      disablePageScroll();
    }
  };

  const onClose = () => {
    setOpenLogin(false);
    setIsSignUp(false);
    enablePageScroll();
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }; /* Arrow function that allows the user to open and close the navigation menu - using if/else statement */

  const handleNavigationClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }; /* handleClick arrow function, that makes sure that when the user selects a link, then the hamburger menu will automatically close */

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation
          ? "bg-n-8"
          : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleNavigationClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          onClick={() => toggleOpenLogin(true)}
        >
          New account
        </a>
        <a href="#login" onClick={() => toggleOpenLogin(false)}>
          <Button className="hidden lg:flex" href="#login">
            Sign In
          </Button>
        </a>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      {openLogin &&
        (isSignUp ? (
          <SignUp onClose={onClose} toggleLoginSignup={toggleLoginSignup} />
        ) : (
          <Login onClose={onClose} toggleLoginSignup={toggleLoginSignup} />
        ))}
    </div>
  );
};

export default Header;
