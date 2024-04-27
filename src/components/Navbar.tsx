"use client"

import { FaBell } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavWrap, InNavWrap, ImageCont, ImageWrap, SearchWrap, SearchCat, InputCont, ButtonCont, AccountWrap, AccountName, AccountNoti, NavSmall } from "./styles/Navbar.style";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
const Navbar = () => {
  // const [nav, setNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example threshold, change as needed
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {
      isSmallScreen ?(
        <>
        <NavSmall>
          <div>
            <IoLocationSharp/> Deliver To India
            &nbsp;<Image src={'/in.webp'} width={18} height={18} alt="coin" /> 

          </div>
        </NavSmall>
        </>
      ):(
        <NavWrap>
        <InNavWrap>
          <ImageWrap>
            <ImageCont>
              <Image src={'/logo.webp'} width={100} height={27} alt="logo" />
            </ImageCont>
            <ImageCont >
              <Image src={'/in.webp'} width={20} height={27} alt="indialogo" />
            </ImageCont>
          </ImageWrap>
          <SearchWrap>
            <SearchCat>
              Shop by Category
              <RiArrowDropDownLine />
            </SearchCat>
            <InputCont placeholder="Search for Products brands and More">

            </InputCont>
            <ButtonCont><MdOutlineSearch/></ButtonCont>
          </SearchWrap>
          <AccountWrap>
              <AccountName>Vishu100...</AccountName>
              <AccountNoti><FaBell/></AccountNoti>
          </AccountWrap>
        </InNavWrap>
      </NavWrap>
      )
    }
      
    </>
  );
};

export default Navbar;