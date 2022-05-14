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
                   <div> Our near instant audio upload function allows you to customize the letters, numbers, or words you and your child can play with in under 1 minute.</div>
                </div>
                <div className='DragonCamp-inner-img img1 col-sm-4'>
                    <img src={image2}/>
                </div>
            </div>
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
