import { useState } from 'react';
import styled from 'styled-components'

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
           {playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
           
           <video 
               muted
			   autoPlay
			   className="app__videoFeed"
               >

           </video>
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
    margin-bottom:  20px;
   }

   > video {
    width: 700px;
    height: 480px;
    background: #000;
	position: relative;
    padding: 0px;
   }
 
`