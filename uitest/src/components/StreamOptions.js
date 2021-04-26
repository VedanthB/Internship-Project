import styled from 'styled-components'
import MicIcon from '../assets/images/mic-icon.png'
import VideoIcon from '../assets/images/video-icon.png'
import ScreenShareIcon from '../assets/images/screen-share-icon.png'
import AddUserIcon from '../assets/images/add-user-icon.png'
import VideoPlayerIcon from '../assets/images/video-payer-icon.png'
import RTMPIcon from '../assets/images/rtmp-icon.png'
import SettingsIcon from '../assets/images/settings-icon.png'


function StreamOptions() {
    return (
        <Container>
            <img src={MicIcon} alt='' />
            <img src={VideoIcon} alt='' />
            <img src={ScreenShareIcon} alt='' />
            <img src={AddUserIcon} alt='' />
            <img src={VideoPlayerIcon} alt='' />
            <img src={RTMPIcon} alt='' />
            <img src={SettingsIcon} alt='' />
        </Container>
    )
}

export default StreamOptions


const Container = styled.div `
  position: relative;
  margin-left: 70px;
  width:750px;
  bottom: 70px;

> img {
    margin: 10px;
    width: 30px;
	height: 30px;
	background:#ac3fe6;
	/* display:block; */
	border-radius:50%;
    padding: 10px;
	line-height:50px;
	position:relative;
    cursor: pointer;
}
`
