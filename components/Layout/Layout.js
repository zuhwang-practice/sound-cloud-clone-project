import styled from 'styled-components'
import Header from "../header/Header"
import Player from "../Player/Player";
import theme from '../../style/theme'

const Layout = ({children}) => {
  
  return (
    <LayoutContainer>
      {/* <Header /> */}
      <MainContent>{children}</MainContent>
      <Player />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
width:100%;
height:100%;
background-color: ${theme.lsnow};
position: relative;
`
const MainContent = styled.div`
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  font-family: ${theme.font};
`

export default Layout