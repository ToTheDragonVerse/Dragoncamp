import React from 'react'
import '../assets/banner1.css'
import logo from '../assets/images/banner1/logo.png'
import image1 from '../assets/images/banner1/image-1.png'
import image2 from '../assets/images/banner1/image-2.png'
import text from '../assets/images/banner1/Number-text.png'
import icons1 from '../assets/images/banner1/icon-1.png'

const Banner1 = () => {
  return (
    <div className='DragonCamp'>
        <div className='DragonCamp-content'>
            
            <div className='DragonCamp-inner row'>
                <div className='DragonCamp-logo'>
                    <img src={logo}/>
                </div>
                <div className='Dragon-main-title'>
                    <div className='Dragon-title'>
                        FOR CHILDREN <span>AGES 2-6</span>    
                    </div>
                    <div className='Dragon-sub-title'>
                        Letters - Numbers - Words - Colors - Family     
                    </div>               
                </div>
                <div className='DragonCamp-desc'>
                    STEP BY STEP LEARNING CHOSEN BY YOU
                </div>    
            </div>
            <div className='DragonCamp-content-inner'>
                <div className='DragonCamp-content-title'>
                    <img src={text}/>
                </div>
                <div className='DragonCamp-icon'>
                    <img src={icons1}/>
                </div>
            </div>
            <div className='DragonCamp-inner-block row'>
                <div className='DragonCamp-inner-img col-sm-4'>
                    <img src={image1}/>
                </div>
                <div className='DragonCamp-inner-text col-sm-4'>
                   <div> OUR IMAGE UPLOAD FUNCTION ALLOWS YOU TO TAKE PICTURES OF CARD, FOOD, FRUUTS, VEGETABLES, BASICALLY ANYTHING YOU WANT TO TEACH, THEN ADD YOUR AUDIO AND START PLAYING! SHARE THINGS YOU SEE OR EAT DURING THE DAY WHILE AT WORK OR TRAVELING AND ALWAYS STAY CONNECTED TO YOUR CHILD. . ALL IN SECONDS..</div>
                </div>
                <div className='DragonCamp-inner-img img1 col-sm-4'>
                    <img src={image2}/>
                </div>
            </div>
            <div className='DragonCamp-img'></div>
            <div className='DragonCamp-block'>
                <div className='DragonCamp-block-title title1'>
                    30 DAY FREE TRIAL
                </div>
                <div className='DragonCamp-block-title title2'>
                    30 DAY FREE TRIAL
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1
