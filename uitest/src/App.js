import styled from 'styled-components'
import './App.css';
import MainScreen from './components/MainScreen';
import Sidebar from './components/Sidebar';
import SmallScreen from './components/SmallScreen';

function App() {
  return (
    <Container >
        {/*  Sidebar / Navbar  */}
        <Sidebar />

         {/* camera screen  */}
        <MainScreen />


        <SmallScreen />
    </Container>
         
   
  );
}

export default App;

const Container = styled.div `
  display : flex;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100vh ;
  
`