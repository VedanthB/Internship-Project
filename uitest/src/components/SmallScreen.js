import styled from 'styled-components'
import SignalIcon from '../assets/images/signal-icon.png'
import EnlargeIcon from '../assets/images/enlarge-icon.png'
import Switch from './Toggle';
import { useState } from 'react';

function SmallScreen() {
    const [isToggled, setIsToggled] = useState(false);

    
    return (
          <Container darkMode={isToggled} >
              <Header>
                  <span>You</span>
                  <img src={SignalIcon} alt="" /> 
              </Header>


            <SwitchContainer>
            <Switch
              id="test-switch"
              toggled={isToggled}
              onChange={e => setIsToggled(e.target.checked)}
              />
            </SwitchContainer>
             

              <video
               muted
			   autoPlay
               width="100%" 
               height="30%"
              >

              </video>

              <Footer>
                  <span>On Air</span>
                  <img src={EnlargeIcon} alr />
              </Footer>
          </Container>
    )
}

export default SmallScreen

const Container = styled.div `
      width: 250px;
      /* width:22.5%; */
      position: relative;
      /* padding: 0px; */
      top: 90px;
	  

 > video {
    width: 100%;
    height: 300px;
    background: #000;
	position: relative;
    padding:5px;
   }
`

const Header = styled.div `
   	float:left;
	width:100%;
    position: relative;
	background:#fc8714;
	padding:5px;
	font-size:15px;
	color:#fff;
    margin-right: 10px;

    > span {
        float:left;
    }

    > img {
        float:right;
        height:15px;
    }
`

const ToggleButton = styled.div `
    position: relative;
    z-index: 1000;
    left: 280px;

    > label {
        position: relative;
        /* display: inline-block; */
        width:50px;
        height:24px;
    }

    > label > input {
         opacity: 0;
         width: 0;
         height: 0;
    }
    
    > span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;

        :before {
         position: absolute;
         content: "";
         height: 20px;
         width: 20px;
         left: 2px;
         bottom: 2px;
         background-color: white;
         -webkit-transition: .4s;
         transition: .4s;
}
    }
`

const Footer = styled.div `
    position:absolute;
	left:0px;
	right:5px;
    top: 310px;
	/* top: 5px; */
    /* z-index: 1; */
    

    > span {
    float:left;
    color:#fff;
    background: rgb(252,135,19);
    background: linear-gradient(0deg, rgba(252,135,19,1) 0%, rgba(228,76,210,1) 100%);
	border-radius:30px;	
	padding: 3px 8px;
	font-size: 12px;
	cursor: pointer;
	border-top-left-radius:0px;
	border-bottom-left-radius:0px;
    }

    > img {
        height:24px;
        float: right;
        cursor:pointer;
    }
`

const SwitchContainer = styled.div `
        position:absolute;
	    right: 5px;
	    top: 15px;
        z-index: 1000;
 
`