import React from "react";
import "./Home1.css";
import Illustration32 from "./assets/Illustration32.png";
import Illustration from "./assets/Illustration7.png";
import Illustration32l from "./assets/Illustration32l.png";
import AppStoreIcon from "./assets/en-us.svg";
import GooglePlayIcon from "./assets/g-en-us2.svg";
import manymore from "./assets/andmanymore.png"
import readmore from "./assets/readmore.png"
import image from "./assets/img4.png"
import img from "./assets/img3.png"
import line from "./assets/Vector 2.png"
import image3 from "./assets/image 3.png";
import image4 from "./assets/image 4.svg";
import image5 from "./assets/image 5.svg";
import pizza from './assets/pizza.png'
import offer from './assets/offer.png'
import sc1 from './assets/ph1.png'
import sc2 from './assets/SC2.png'
import ph3 from './assets/ph3.png'
import sc3 from './assets/sc3.png'
import sc4 from './assets/sc4.png'
import num1 from './assets/num1.png'
import num2 from './assets/num2.png'
import num3 from './assets/num3.png'
import trophy from './assets/trophy.png'
import tl from './assets/trap_left.png'
import tr from './assets/Trap_right.png'

const Home = () => (
  <>
    <div className="body">
      <div className="first-container">
        <div className="text-contain-1">
            <div className="text1">Save More with</div>
            <div className="text2">Picapool</div>
            <div className="text3">Pool offers for cabs, pizzas, clothes, and more...</div>
            <div className="circle">
                <img src={Illustration32} alt="man using app"/>
            </div>
            <div className="text4">Download the App and start pooling :)</div>
            <div className="download-buttons">
                <div className="rectangle-animation">
                  <a href="https://play.google.com/store/apps/details?id=com.picapool&hl=en" target="_blank" rel="noreferrer">
                    <img src={GooglePlayIcon}  alt="Get it on Google Play" />
                  </a>
                </div>
                <div className="rectangle-animation-2">
                  <a href="https://apps.apple.com/in/app/picapool/id6480370782" target="_blank" rel="noreferrer">
                    <img src={AppStoreIcon}  alt="Download on the App Store" />
                  </a>
                </div>
            </div>
        </div>
      </div>
      <div className="full-line">
        <div className="line"></div>
          Why<span className="orange">Picapool?</span>
        <div className="line"></div>
      </div>  

      <div className="second">
        <div className="cross">
            <div className='heading'>Share a Ride and Save!</div>
            <div className="strip"/>
            <div className='simple'>Share your journey, cut your costs!
              <br/>
               Find fellow travelers heading your way.</div>
            <div className='simple'>Easily connect with others to split the fare and make commuting fun.</div>
        </div>
        <div className="image-cab">
            <img src ={image3} width={350} alt="cabsharing"/>
        </div>
        <div className="x">
          <img src={tl} className="trap-img"/>
          <div className="over">
            <img src={image4} />
            <img src={image5} />
          </div>
        </div>
      <div className="over-mobile">
          <img src={image4} className="oli" />
        <div>
        </div>
        <div className="mobile-flex">
          <img src={image3} width={150}/>
          <img src={image5} className="oli-q"/>
        </div>
      </div>
      </div>
      <div className="x-mobile">
        <img src={tl} className="trim" />
      </div>

      <div className="second-1">
   
        <div className="cross">
        <div className='heading'>Slice the Price of Your Pizza!</div>
        <div className="strip"></div>
        <div className='simple'>Double the toppings, half the price! Pool your pizza order and enjoy more.</div>
        <div className='simple'>Team up with nearby pizza lovers for a delicious deal</div>
        <div className="image-contain">
          <img src={pizza}/>
        </div>
        </div>
        <img src={tr} width={450} height={450} />
        <div className="over-right">
          <img src={image} height={300}/>
          <img src={img}  height={420}/>
        </div>
      </div>

      <div className="second">
        <img src={tl} />
        <div className="over">
          <img src={sc3}  height={430}/>
          <img src={sc4} />
        </div>
        <div className="strip"/>
        <div>
            <div className='heading'>Create Your Own Pool</div>
            <div className='simple'>Got a great deal? Snap a picture and find someone nearby to share it with.
              <br/>
              <br/>
              Whether it's a sale, a special offer, or a unique find, create a pool and enjoy the savings together.
            </div>
            <div className="honey">
              <img src={Illustration32l} height={120} />
              <div className="in">
              <img src={line} width={80}/>
              <img src={offer} height={60}/>
              </div>
              <img src={Illustration32} height={150} />

            </div>
        </div>
      </div>
      {/*
      <div className="full-line">
        <div className="line"/>
        <img src={manymore}/>
        <div className="line"/>
      </div>
      <div className="hed">How does it 
        <span className="orange">
          Work?
        </span> 
      </div>
      <div className="number">
        <img src={num1} alt="jl"/>
        <div className="hr"></div>
        <img src={num2} alt="lj"/>
        <div className="hr"></div>
        <img src={num3} alt="kl"/>
      </div>
      <div className="flex-container">
        <div className="box-contain">
          <div className="heading">CHOOSE</div>
          <div className="heading"> A DEAL</div>
          Select from a variety of pooling options
          <img src={sc1} alt="jlk" />
        </div>
        <div className="box-contain">
          <div className="heading">JOIN A</div>
          <div className="heading">POOL</div>
          Connect with like minded savers nearby
          <img src={sc2} alt="jl" />
        </div>
        <div className="box-contain">
          <div className="heading">ENJOY</div>
          <div className="heading"> REWARDS</div>
          Complete the deal and enjoy your savings!
          <img src={ph3} alt="jl" />
        </div>
      </div>
      */}
      <div className="hed">Video 
        <span className="orange">
          Guide
        </span>
      </div>
       <iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> 
      <div className="video-container">
        <iframe width="960" height="500" src="https://www.youtube.com/embed/zHCuyB13UoU?si=BYqutODGST4i1_4C" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="hed">We are</div>
      <div className="hed-1">
        <span className="blue">
          Suzuki 
        </span>Innovation Bootcamp 
        <span className="orange">
          Winner
        </span>

        <img src={trophy} alt="trophy" />
      </div>

      <div className="first-container">
        <div className="text-contain">
          <li>
            Winning the Suzuki Innovation Bootcamp validated our unique approach
          </li>
          <li>
            This prestigious recognition reinforced our belief in using
            technology to empower users
          </li>
          <li>
            It showcased our potential to revolutionize traditional savings
            methods.
          </li>
          <li>
            Our innovative approach is now industry-recognized and celebrated.
          </li>
          <img src={readmore} alt="read more->" />
        </div>
  
        <div className="image-contain">
          <img alt="relaveant" />
        </div>
      </div>
      <div className="first-container">
      <div className="text-contain-1">
            <div className="hed">
            Get started with Picapool
            </div>
            <div className="text4">Download the App Today and Start Saving!</div>
            <div className="download-buttons">
                <div className="rectangle-animation">
                    <img src={GooglePlayIcon} width={150} alt="Get it on Google Play" />
                </div>
                <div className="rectangle-animation-2">
                    <img src={AppStoreIcon} alt="Download on the App Store" />
                </div>
            </div>
        </div>
        <div className="circle">
            <img src={Illustration} alt="man using app"/>
        </div>
      </div>
    </div>
  </>
);
export default Home;
