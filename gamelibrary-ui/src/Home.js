import React from 'react';
import Typing from 'react-typing-animation';
import { Layout } from 'antd';
import image from 'img/playstation-bg.png'

const { Content } = Layout;


const Home = () => {
  return (

      <div className='homeContent'  style={{ backgroundImage: `url(${image})`}}>
        <Typing className='homeText' >
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
          <span>, thoughs</span>  
          <Typing.Delay ms={800} />
          <span>, emotions</span>  
          <Typing.Reset count={0} delay={500} />
          <span>We are memories...</span>  
          <Typing.Reset count={1} delay={1000} />
          <span>Get your second life...</span>  
          <Typing.Reset count={1} delay={1000} />
          <span>NOW!</span>  
        </Typing>
      </div>

  );
}

export default Home;