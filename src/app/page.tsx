"use client"
import { KartCoinPoint, KartCont, KartDeliveryBut, KartDeliveryChang, KartDeliveryOpt, KartDeliveryTo, KartHelpMail, KartItemCoin, KartItemCont, KartItemConts, KartItemData, KartItemDataLeft, KartItemDataMain, KartItemDataRight, KartItemDeli, KartItemOffPrice, KartItemPhoto, KartItemPrice, KartItemQuant, KartLeftCont, KartLeftPara, KartMainHead, KartMainWrap, KartPara, KartPaymentWay, KartPriceButt, KartPriceGrand, KartPriceWrap, KartRemov, KartRemovCont, KartRightCont } from "@/components/styles/Kart.stlyle";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";
import { HiCash } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { useEffect, useState } from "react";

const dummyData = [
  { id:1,
    name: "Hygedent Alginate Powder Impression Material",
    price: 518.00,
    priceForEach: 259.00,
    discount: 47.78,
    coins: 5,
    image: "https://example.com/product_a.jpg"
  },
  { 
    id:2,
    name: "Coltene Speedex Putty Set (Condensation Silicon)",
    price: 2456,
    priceForEach: 439,
    discount: 55.7,
    coins: 24,
    image: "https://example.com/product_b.jpg"
  },
  {
    id:3,
    name: "SafeEndo BioStructure MTA",
    price: 1230,
    priceForEach: 230,
    discount: 18,
    coins: 13,
    image: "https://example.com/product_c.jpg"
  },
  {
    id:4,
    name: "Waldent V- Light Eco Gold DC X-Ray Machine",
    price: 60000,
    priceForEach: 60000,
    discount: 10,
    coins: 789,
    image: "https://example.com/product_d.jpg"
  }
];
export default function Home() {

  const [data,SetData]=useState(dummyData);
  const [Total,SetTotal]=useState(0);

  const getTotalPrice=()=>{
    
    const sum=data.reduce((total,num)=>{return total+num.price;},0);

    SetTotal(sum);

  }

  const removeProductById = (idToRemove: number) => {
    const updatedDummyData = [...data];
    const indexToRemove = updatedDummyData.findIndex(product => product.id === idToRemove);
    if (indexToRemove !== -1) {
      updatedDummyData.splice(indexToRemove, 1);
      SetData(updatedDummyData);
      // getTotalPrice();
    }
  };

  useEffect(() => {
    getTotalPrice();
    
  }, [data])
  

  return (
    <>
      <KartMainWrap>
        <KartMainHead>
          My Cart ({data.length} items)
        </KartMainHead>
        <KartCont>
          <KartLeftCont>
            <KartLeftPara>
              Your mobile number is not verified with us. Get Notifications of your order on mobile number after verifying.
              <button>Verify</button>
            </KartLeftPara>
            <KartItemConts>
              {
                data.map((item)=>(
                  <>
                  <KartItemCont key={item.id}>
                <KartItemPhoto>
                  <Image src={`/m${item.id}.webp`}  width={120} height={120} alt="item" />
                </KartItemPhoto>
                <KartItemData>
                  <KartItemDataMain>
                    <KartItemDataLeft>
                      <h2>{item.name}</h2>
                      <KartItemPrice>
                        ₹ {item.price} <span>(₹ {item.priceForEach} each)</span>
                      </KartItemPrice>
                      <KartItemOffPrice>
                        ({item.discount} % off on MRP)
                      </KartItemOffPrice>
                      <KartItemCoin>
                        <Image src={'/coin.webp'} width={18} height={18} alt="coin" />
                        <span>{item.coins}</span>
                      </KartItemCoin>
                      <KartItemDeli>
                        <TbTruckDelivery /> <span> &nbsp;  Get it by Thu, Apr 25</span>
                      </KartItemDeli>
                    </KartItemDataLeft>
                    <KartItemDataRight>
                      <KartItemQuant>
                        Quantity
                      </KartItemQuant>
                      <select name="dog-names" id="dog-names">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                      </select>
                    </KartItemDataRight>
                  </KartItemDataMain>
                  <KartRemovCont>
                     <KartRemov>
                         <button onClick={()=>removeProductById(item.id)}>Remove</button>
                        <button><FaHeart/> Add to wishlist</button>
                     </KartRemov>
                  </KartRemovCont>
                </KartItemData>
              </KartItemCont>
                  </>
                ))
              }
              
            </KartItemConts>
          </KartLeftCont>
          <KartRightCont>
            <KartPara>
            Free delivery across India on all orders above Rs 2500
            </KartPara>
            <KartDeliveryOpt>
              <h1>Delivery Option</h1>
              <KartDeliveryBut>
                <KartDeliveryTo>Deliver to IN</KartDeliveryTo>
                <KartDeliveryChang>change</KartDeliveryChang>
              </KartDeliveryBut>
              <p><GoAlertFill/><span>Update GSTIN in the address to ensure accurate invoicing for tax compliance</span></p>
              <p><TbTruckDelivery/><span>Get it by Fri, Apr 26</span></p>
              <p><HiCash/><span>COD available</span></p>
            </KartDeliveryOpt>
            <KartPriceWrap>
              <h2>Price Details</h2>
              <p><span>Total Quantity</span><span>{data.length}</span></p>
              <p><span>Total Weight</span><span>2.500 kg</span></p>
              <p><span>Sub Total</span><span>₹ {Total}.00</span></p>
              <p><span>Delivery Charges (View Details)</span><span>₹ 0</span></p>
              <p style={{color:"green"}}><span>Total Savings</span><span>₹ {Total}.00</span></p>
              <KartPriceGrand><span>Grand Total<span>(inclusive of all taxes)</span></span><span>₹ {Total}.00</span></KartPriceGrand>
              <KartPriceButt>
                <button>Continue to Payment</button>
              </KartPriceButt>
              <KartCoinPoint>
                <h4>Earnreward &nbsp;<Image src={'/coin.webp'} width={18} height={18} alt="coin" /> &nbsp;
                <span> 48</span>&nbsp; Points with products in the order.</h4>
                <p>(Points to be added to wallet after successful order delivery)</p>
              </KartCoinPoint>
            </KartPriceWrap>
              <KartPaymentWay>
                <span>We accept</span><Image src={'/upi.png'} width={236} height={40} alt="coin" />
              </KartPaymentWay>
              <KartHelpMail>
              Need help? contact us atsupport@dentalkart.com
              </KartHelpMail>
              
          </KartRightCont>
        </KartCont>
      </KartMainWrap>
    </>
  );
}
