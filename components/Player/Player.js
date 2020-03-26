import styled from 'styled-components'
import theme from "../../style/theme";

const Footer = () => {
  return (
    <FooterContainer>
      <CenterBox>footer</CenterBox>
    </FooterContainer>
  ); 
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 46px;
  width: 100%;
  background-color: ${theme.lsnow};
  border-top: 1px solid ${theme.snow};
`;

const CenterBox = styled.div`
  width: 1240px;
  margin: 0 auto;
  height: 100%;
  font-family: ${theme.font};
`;

export default Footer