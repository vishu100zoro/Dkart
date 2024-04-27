import styled from "styled-components";

export const KartMainWrap=styled.div`
    /* display: flex; */
    padding: 8px 45px;
    max-width: 1300px;
  
    margin: auto;
    height: 100%;
    width: 100%;
    @media (max-width: 1016px) {
        padding: 0px;
        max-width: 100vw;
        width: 100vw;
  }
`;

export const KartMainHead=styled.h1`
        margin-left: 25px;
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 21px;
        font-weight: 500;
`;

export const KartCont=styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 780px) {
        display: block;
  }
`;


export const KartLeftCont=styled.div`
    /* display: flex; */
    width: 66.66%;
    @media (max-width: 780px) {
       width: 100%;
  }
`;

export const KartRightCont=styled.div`
    /* display: flex; */
    margin-left: 25px;
        position: sticky;
        width: 33.33%;
        top: 110px;

        @media (max-width: 780px) {
            margin-left: 0px;
       width: 100%;
  }
`;


export const KartLeftPara=styled.div`
    padding: 10px;
    margin-bottom: 15px;
    background: hsla(0, 0%, 91%, .3803921568627451);
    border: 1px solid #bcbec1;
    font-size: 13px;
    color: #3870ae;
    font-weight: 400;

    button{
    background: #fff;
    margin-left: 5px;
    padding: 2px 15px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #95b3c3;
    color: #95b3c3;
    border-radius: 3px;
    font-weight: 500;
    }
`;

export const KartItemConts=styled.div`
    border: 1px solid #bcbec1;
    background: #f1f3f6;
    padding: 20px 15px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
    margin-bottom: 16px;
`;

export const KartItemCont=styled.div`
   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .4);
    background: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const KartItemPhoto=styled.div`
   width: 25%;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
`;

export const KartItemData=styled.div`
   width: 75%;
   border-left: 1px solid #f0f0f0;
`;

export const KartItemDataMain=styled.div`
   display: flex;
`;

export const KartItemDataLeft=styled.div`
    width: 70%;
    padding-left: 10px;
    min-height: 200px;
    vertical-align: top;
    h2{
    margin: 0;
    font-size: 16px;
    padding-top: 15px;
    }
`;
export const KartItemDataRight=styled.div`
   width: 30%;

   select{
    display: block;
    margin: auto;
    padding:6px 20px;
    box-shadow: 0 1px rgba(0, 0, 0, .2);
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
   }
`;

export const KartItemPrice=styled.div`
     margin: 15px 0px;
     font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
    span{
        font-size: 14px;
    font-weight: 400;
    }
`;

export const KartItemOffPrice=styled.div`
       font-size: 12px;
    color: ${({theme})=>theme.color.price};
    font-weight: 500;
`;

export const KartItemCoin=styled.div`
margin: 10px 0px;
color: gold;
    /* padding-top: 5px; */
    /* padding-right: 5px; */
    border-radius: 3px;
    img{
        margin: -2px 5px;
    }
  
`;

export const KartItemDeli=styled.div`
   color: ${({theme})=>theme.color.specialtext};
   font-size: 15px;
   display: flex;
   align-items: center;
   span{
       font-size: 12px;
       
   }
`;

export const KartItemQuant=styled.div`
       display: flex;
       padding: 15px 0px 10px 0px; 
       justify-content: center;
       align-items: center;
`;

export const KartRemovCont=styled.div`
    /* display: flex; */
    border-top: 1px solid #f0f0f0;
    padding-left: 10px;
`;

export const KartRemov=styled.div`
    float: right;

    button{
    /* width: 20%; */
    font-size: 12px;
    padding-left: 10px;
    font-weight: 700;
    color: #585656;
    /* text-decoration: none; */
    outline: none;
    border: 0px;
    height: 40px;

    border-left: 1px solid #f0f0f0;
    background-color: #ffff;
    padding: 7px 15px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
`;

export const KartPara=styled.p`
    background: #daefda;
    color: green;
    text-align: center;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const KartDeliveryOpt=styled.div`
background-color: #fff;
    border-radius: 2px;
    padding-bottom: 5px;

    h1{
    font-size: 14px;
    font-weight: 500;
    padding: 16px;
    }

    p{
        display: flex;
        align-items: center;
        margin: 10px;
        color: #1c60dc;
        font-size: 18px;
        padding-left: 10px;
        span{
        font-size: 13px;
        margin-left:10px;
    }
    }
`;

export const KartDeliveryBut=styled.div`
       margin-left: 16px;
    margin-bottom: 10px;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const KartDeliveryTo=styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #1b5ca2;
    padding: 8px 16px;
`;

export const KartDeliveryChang=styled.div`
    color: #f3943d;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 700;
    padding: 3px 10px;
    text-align: center;
    text-decoration: underline;
`;


export const KartPriceWrap=styled.div`
background-color: #fff;
    border-radius: 2px;
    padding-bottom: 5px;
    margin-top:15px;
h2{
    padding-left: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
}

p{
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 8px;
    font-size: 12px;
    color: rgba(132, 122, 122, .8666666666666667);
}

`;

export const KartPriceGrand=styled.div`
     display: flex;
    justify-content: space-between;
    color: rgba(132, 122, 122, .8666666666666667);
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 8px;
   
    span{
        font-size: 14px;
    font-weight: bold;
    padding-bottom: 7px;
    padding-top: 7px;
        border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 1px solid rgb(240, 240, 240);
    span{
        font-size: 12px;
    }
    }
`;

export const KartPriceButt=styled.div`
padding: 12px 16px 10px;
 button{
    cursor: pointer;
    color: #ffff;
    font-size: 18px;
    /* padding: 6px 8px; */
    font-weight: 700;
    line-height: 1.75;
    border-radius: 4px;
    background-color: #f3943d !important;
    text-transform: none !important;
    width: 100% !important;
    height: 50px !important;
    border: 0px;
 }
`;

export const KartCoinPoint=styled.div`
    padding: 10px 15px;
    border-top: 1px solid #e7e7e7;
    h4{
        display: flex;
    font-size: 14px;
    margin-right: 2px;
    font-weight: 700;
    color: #4d4b4b;

    span{
        color: gold;
    }
    }

    p{
        padding-left:0px;
    font-size: 11px;
    color: #b0afaf;
    margin-top: 5px;
    }
`;

export const KartPaymentWay=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-top:4px;
    span{
        /* width: 15%; */
    color: #979494;
    font-size: 12px;
    }
`;

export const KartHelpMail=styled.p`
    text-align: center;
    font-size: 12px;
    color: #979494;
    margin-top: 5px;
`;














