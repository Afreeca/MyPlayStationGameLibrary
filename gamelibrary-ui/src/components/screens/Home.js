import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import { Button } from 'antd';
import image from 'img/playstation-bg.png'

const Home = () => {

  const [Btn, setBtnVisible] = useState(false);

  return (
      <div className='homeContent'  style={{ backgroundImage: `url(${image})`}}>
        <div className='homeTextWrapper'>
          <Typing className='homeText' onFinishedTyping={() => setBtnVisible(true)}
          >
            <Typing.Delay ms={1000} />
            <span>Since 1994 providing light at the end of the tunel!</span>
            <Typing.Reset count={1} delay={500} />
            <span>More then a console</span> 
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={7} />
            <span>game</span> 
            <Typing.Reset count={0} delay={500} />
            <span>We are feelings</span>  
            <Typing.Delay ms={1000} />
            <Typing.Delay ms={800} />
            <span>, thoughts</span>  
            <Typing.Delay ms={800} />
            <span>, emotions</span>  
            <Typing.Reset count={0} delay={500} />
            <span>We are memories...</span>  
            <Typing.Reset count={1} delay={1000} />
            <span>Get your second life...</span>  
            <Typing.Delay ms={800} />
            <Typing.Speed ms={200} />
            <span> NOW!</span> 
            <Typing.Delay ms={800} /> 
          </Typing>
          <div className='btnPs'>
            { Btn && <Button ghost type="dashed" icon="rocket" size='large' onClick={() =>  window.location.href='https://www.playstation.com/en-us/'}>
              Official website
            </Button>}
          </div>
        </div>
      </div>
  );
}

export default Home;