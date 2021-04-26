import styled from 'styled-components'
import './App.css';
import MainScreen from './components/MainScreen';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container>
        {/*  Sidebar / Navbar  */}
        <Sidebar />

         {/* camera screen  */}
        <MainScreen />
         {/* right small camera */}

    </Container>
         
   
  );
}

export default App;

const Container = styled.div `
  display : flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100vh ;
`