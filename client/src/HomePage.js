import React from "react";
import './Home.css';
import Illustration32 from "./assets\\Illustration32.png"
import GooglePlayIcon from "./assets/google_play.png"
// import GooglePlayIcon from "./assets/g-en-us.svg"
import AppStoreIcon from "./assets/en-us.svg"
import manymore from "./assets/andmanymore.png"
import image from "./assets/img4.png"
import img from "./assets/img3.png"
import image3 from "./assets/image 3.png";


const Home = () =>
	<>
		<div className='part-1'>
			<div className="text-container">
				<div className='text1'>Save More with</div>
				<div className='text2'>Picapool</div>
				<div className='text3'>Pool offers for cabs, pizzas, clothes, and more...</div>
				<div className='text4'>Download the App and start pooling :)</div>
				<div className="download-buttons">
          <div className="rectangle-animation">
						<img src={GooglePlayIcon} width={150} alt="Get it on Google Play" />
					</div>
          <div className="rectangle-animation">
						<img src={AppStoreIcon} alt="Download on the App Store" />
					</div>	
        </div>
			</div>
      <div className="circle-wrap">
				<img src= {Illustration32} alt="person using app" />
      </div>
		</div>
    <div className="part-2">
      <div className="hed">
        why <span className="orange">Picapool</span>
      </div>
    </div>
	</>
;


{/* <div className="text-container">
        <p className="top-announcement">
          Picathon is Live !! 
          <span className="prize-info">Win Prizes worth ₹20000</span>
        </p>

        <h1 className="main-heading">
          Save More with <span className="highlighted">Picapool</span>
        </h1>

        <p className="description">
          Pool offers for cabs, pizzas, clothes, and more...
        </p>

        <div className="download-buttons">
          <img src={GooglePlayIcon} alt="Get it on Google Play" />
          <img src={AppStoreIcon} alt="Download on the App Store" />
        </div>

        <p className="cta-text">Download the App and start pooling :)</p>
      </div>

      <div className="image-container">
        <img src={HeroImage} alt="Person using app" className="hero-image" />
      </div> */}



// const Home = () => 
//     <>
//       <div className='left'>
//         <div className='text1'>Save More with</div>
//         <div className='text2'>Picapool</div>
//         <div className='text3'>Pool offers for cabs, pizzas, clothes, and more...</div>
//         <div className='text4'>Download the App and start pooling :)</div>
//         <div className='heading'>Slice the Price of Your Pizza!</div>
//         <div className='simple'>Double the toppings, half the price! Pool your pizza order and enjoy more.</div>
//         <div className='simple'>Team up with nearby pizza lovers for a delicious deal</div>
//       </div>
//       <div className='right'>
//         <img src= {Illustration32} alt ="pic" className='Image'/>
//         <div className='heading'>Share a Ride and Save!</div>
//         <div className='simple'>Share your journey, cut your costs! Find fellow travelers heading your way.</div>
//         <div className='simple'>Easily connect with others to split the fare and make commuting fun.</div>
//         <img src= {image3} alt= "Image 3" width={300} className='Image'/>
//         <div className='trapezoid-shape'>
//           <img src= {image} alt='Image small'/>
//           <img src={img} alt='Image big'/>
//         </div>
//         <div className='heading'>Create Your Own Pool</div>
//         <div className='simple'>Got a great deal? Snap a picture and find someone nearby to share it with</div>
//         <div className='simple'>
//         Whether it's a sale, a special offer, or a unique find, create a pool and enjoy the savings together</div>
//       </div>
//       <div className='manymore'>
//         <img src ={manymore} alt ="many more" />
//       </div>
//     </> 
//   ;
export default Home;  