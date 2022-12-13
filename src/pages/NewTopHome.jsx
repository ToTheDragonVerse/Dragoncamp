import './newHomeTop.css';
import playbtn from './assets/playbtn.png';
import starImgOne from './assets/starImgOne.png';
import starImgTwo from './assets/starImgTwo.png';
import bottomStar from './assets/bottomStar.png';
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import youtube from './assets/YouTube.png'
import facebook from './assets/Facebook.png'

function NewTopHome() {
  return (
    <div className="App">
      {/*<div className="container">
        <h1 className="toph1">PLAY FREE TRIVIA AND WIN</h1>
        <div className="innerContainer">
          <div className="left">
            <div className="imgplaybtn">
                <div className="imgbox">
                <a href="https://twitter.com/myDragonCamp" className='smsocial'>
                  <img  src={twitter} alt="" />
                </a>
                <a href="">
                  <img className='playimg' src={playbtn} alt="" />
                </a>
                <a href="https://www.instagram.com/mydragoncamp/" className='smsocial'>
                  <img src={instagram} alt="" /> 
                </a>
                </div>
            <div className="social">
              <a href="https://twitter.com/myDragonCamp">
                <img src={twitter} alt="" />
               
              </a>
              <a href="https://www.instagram.com/mydragoncamp/">
              <img src={instagram} alt="" />
               
              </a>
              
            </div>
            </div>
            <div>
              <h5>Play our trivia game to win stars</h5>
              <p>
                Every 5 stars you win 1 free entry into our <br />
                daily/weekly contests where you can win <br /> prizes like food,
                gift cards and <br />
                DragonCamp merchandise! Win your <br /> own green DragonCamp
                onesie. Follow <br /> us on social to see if you've won!
              </p>
            </div>
          </div>
          <div className="right">
            <img src={baby} alt="" />
            <img src={baby3} alt="" />
            <img src={baby2} alt="" />
          </div>
        </div>
        <img src={bgmain} className="bg" alt="" />
      </div>*/}
        <div className="container">
            <div class="row">
                    <div class="col-sm-4">
                        <div class="col-12">
                            <div class="col-12">
                                <img src={starImgOne} alt="" class="rotate15"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <h1 class="headingTitle">
                                <span class="play">PLAY</span> FREE TRIVIA AND WIN
                            </h1>
                        </div>
                        <div class="col-12">
                            <p class="headingContent">change to this - Every 5 stars you win 1 free entry into ourdaily/weekly contests where you can winprizes like food, gift cards andDragonCamp merchandise! Win yourown green DragonCamp onesie. Followus on social to see if you've won!
                            </p>
                        </div>
                        <div class="col-12">
                            <a href="" className='plybtton'>
                              <img src={playbtn} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg firstChild'>
                              <img src={instagram} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg'>
                              <img src={facebook} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg'>
                              <img src={twitter} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg'>
                              <img src={youtube} alt=""/>
                            </a>
                        </div>
                        <div class="col-12">

                        <h1 class="footerTitle">Play our trivia game to <
                            span class="winstart">win stars</span>
                        </h1>
                        </div>


                    </div>

                    <div class="col-sm-8">
                        <div class="">
                            <img src={starImgTwo} alt="" class="rotate15"/>
                        </div>
                        <img src={bottomStar} alt="" class="rotate15 bottomStar"/>
                    </div>
                
            </div>
        </div>
    </div>
  );
}

export default NewTopHome;
