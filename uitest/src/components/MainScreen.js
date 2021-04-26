import { useState } from 'react';
import styled from 'styled-components'
import Box1 from '../assets/images/box-icon-1.png'
import Box2 from '../assets/images/box-icon-2.png'
import FullScreenIcon from '../assets/images/full-screen-icon.png'
import StreamOptions from './StreamOptions';

function MainScreen() {
    const [playing, setPlaying] = useState(false);
   
    const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};


    return (
        <Container>
            <ButtonContainer>
            {playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}

                <h3>
                Live Studio
                </h3>

                <PreviewButton>
                Priview
                </PreviewButton>
                   

            </ButtonContainer>
           
            


           <VideoContainer>

            <video 
               muted
			   autoPlay
			   className="app__videoFeed"
               >  
            </video>


           
            <VideoIcons>
                <VideoIconsLeft>
                <img src={Box1} alt='' />
                <img src={Box2} alt='' />
                <img src={Box1} alt='' />
                <img src={Box2} alt='' />
                <img src={Box1} alt='' />
                <img src={Box2} alt='' />
                <span>
                <img src={FullScreenIcon} alt='' />
                </span>
                </VideoIconsLeft>

                {/* <VideoIconsRight>
                    <img src={FullScreenIcon} alt='' />
                </VideoIconsRight>  */}
            </VideoIcons>
               
               <StreamOptions />
           </VideoContainer>
           
        </Container>
    )
}

export default MainScreen

const Container = styled.div `
   background-color: white;
   z-index: 1;
   display: flex;
   flex-direction: column;
   margin-left: 90px;
   /* background: black; */

`
const PreviewButton = styled.div `
    color:#fff;
    background: rgb(252,135,19);
    background: linear-gradient(0deg, rgba(252,135,19,1) 0%, rgba(228,76,210,1) 100%);
	border-radius:30px;	
	padding:6px 20px;
	font-size: 14px;
	right: 85px;
	top:15px;
	z-index: 1;
	cursor: pointer;
    position: relative;
    top: 80px; 
    /* margin-right: 0px; */
    :hover {
            opacity: 0.8;
        }
`


const VideoContainer = styled.div `
  /* display: flex; */

 > video {
    width: 800px;
    height: 480px;
    background: #000;
	position: relative;
    padding: 0px;
   }
   >button {
    color:#fff;
    background: rgb(252,135,19);
    background: linear-gradient(0deg, rgba(252,135,19,1) 0%, rgba(228,76,210,1) 100%);
	border-radius:30px;	
	padding:6px 20px;
	font-size: 14px;
	position: absolute;
	right:15px;
	top:15px;
	z-index:200;
	cursor:pointer;
   }
`

const ButtonContainer = styled.div `
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  > button {
    color:#fff;
    background: rgb(252,135,19);
    background: linear-gradient(0deg, rgba(252,135,19,1) 0%, rgba(228,76,210,1) 100%);
	border-radius:30px;	
	padding:6px 20px;
	font-size: 14px;
    font-weight: 800;
	margin-top: 12px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    margin-bottom:  20px;

    :hover {
            opacity: 0.8;
        }
  }
     > h3 {
        color:#a54ae5;
	    font-size:18px;
	    padding-top: 19px;
	    padding-bottom:16px;
        cursor: pointer;
        position: relative;
        margin-left: 600px;

       
     }

`

const VideoIcons = styled.div `
 display: flex;
 justify-content: space-between;
 align-items: center;
`

const VideoIconsLeft = styled.div`
  
  
  > img {
    width: 60px;
    margin: 5px;
    position: relative;
    bottom: 60px;
    cursor: pointer;

    :hover {
            opacity: 0.8;
        }
}
    > span > img {      
      width: 40px;
      margin: 5px;
      position: relative;
      bottom: 60px;
      cursor: pointer;
      margin-left: 330px;

      :hover {
            opacity: 0.8;
        }
    }

`
