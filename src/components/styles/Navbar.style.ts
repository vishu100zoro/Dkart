import styled from "styled-components";


export const NavWrap= styled.div`
    background: ${({theme})=>theme.bgcolor.nav};
    color: ${({theme})=>theme.color.whitetext};
    /* padding: 0px 90px; */
    /* position: fixed; */
    width: 100vw;
    
   
`;

export const ImageCont=styled.div`
   padding: 0px 10px;
   cursor: pointer;
 
`;

export const ImageWrap=styled.div`
   display:  flex;
   align-items: center;
   
   /* width: 100%; */
`;

export const InNavWrap= styled.div`
    display: flex;
    padding: 8px 45px;
    max-width: 1250px;
    margin: auto;
    height: 100%;
    width: 100%;

    @media (max-width: 1016px) {
       /* visibility: remove; */
  }

`;

export const SearchWrap=styled.div`
     /* border: 2px solid white; */
     display: flex;

`;

export const SearchCat=styled.div`
   /* height: 40px; */
   height: 100%;
   padding: 8px 10px;
   width: 110px;
   /* width: 100%; */
   margin-left:10px;
    font-weight: 600;
    font-size: 11px;
    cursor: pointer;
    text-align: center;
    background-color: ${({theme})=>theme.bgcolor.buttonbg};
    border-radius: 2px 0 0 2px;
    color: ${({theme})=>theme.color.whitetext};
    display: flex;
    align-items: center;

    svg{
        scale: 2;
   
    }
 
`;

export const InputCont=styled.input`
 /* width: 10; */
 padding: 0 8px;
 /* width: 23rem; */
 width: 20vw;
 height: 100%;
 border: none;
 outline: none;

`;

export const ButtonCont=styled.button`
    background: ${({theme})=>theme.color.whitetext};
    border: 2px solid #fff;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left-color: #f1f3f6;
    border-radius: 0 2px 2px 0;
    /* height: 36px; */
    min-width: 36px;
    cursor: pointer;
    /* width: 100%; */

`;

export const AccountWrap=styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

`;

export const AccountName=styled.div`
 padding: 0px 10px;

`;

export const AccountNoti=styled.div`
  padding: 0px 2rem;
  font-size: 20px;

`;

export const NavSmall=styled.div`
height: 65px;
        color: white;
        background-color: #25303c;
    z-index: 10;
    padding: 5px 0;
    /* position: -webkit-sticky; */
    /* position: sticky; */
    top: 0;
    box-shadow: 0 2px 5px 0 #a2a2a2;
    overflow: hidden;

    div{
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    }
`;

