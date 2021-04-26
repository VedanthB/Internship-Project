import styled from 'styled-components'
import Logo from '../assets/images/logo-icon.png'
import TagIcon from '../assets/images/tags-icon.png'
import FavIcon from '../assets/images/fav-icon.png'
import CloudIcon from '../assets/images/cloud-icon.png'
import GiftIcon from '../assets/images/gift-icon.png'
import DotsIcon from '../assets/images/dotted-nav.png'



function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarIcons> 
                <img src={Logo} alt='' />
                <img src={TagIcon} alt=''/>
                <img src={FavIcon} alt='' />
                <img src={CloudIcon} alt=''/>
                <img src={GiftIcon} alt='' />
                <img src={DotsIcon} alt=''/>
            </SidebarIcons>

            <SidebarFooter>
                <h2>
                    K
                </h2>
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar
  

const SidebarContainer = styled.div `
  /* justify-content: flex-end; */
  background: linear-gradient(0deg, rgba(252,135,19,1) 0%, rgba(228,76,210,1) 100%);
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
;

 
`

const SidebarIcons = styled.div `
display: flex;
flex-direction: column;
align-items: center;
> img {
      width: 32px;
      padding: 20px;
  }
  

`

const SidebarFooter = styled.div `
display: flex;
flex-direction: column;
align-items: center;

> h2 {
    width:32px;
	height:32px;
	background:#fff;
	border-radius:50%;
	line-height:32px;
	text-align:center;display:inline-block;
	font-weight:700;
	color:#ac3fe6;
    margin: 20px;
}
`