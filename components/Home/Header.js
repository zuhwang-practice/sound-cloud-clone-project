import styled from 'styled-components'
import theme, * as css from '../../style/theme'
import OrangeBtn from '../ui/OrangeBtn'

const HomeHeader = () => {
  return (
    <Header>
      <Nav>
        <LeftLogoWarp>
          <CloudLogo />
          <CloudTextLogo />
        </LeftLogoWarp>
        <RightWrap>
          <Ul>
            <Li>Sign in</Li>
            <Li orange>Create account</Li>
          </Ul>
        </RightWrap>
      </Nav>
      <CenterWrap>
        <p>Connect on SoundCloud</p>
        <p>
          Discover, stream, and share a constantly expanding mix of music from
          emerging and major artists around the world.
        </p>
        <OrangeBtn text='Sign up for free'></OrangeBtn>
      </CenterWrap>
    </Header>
  );
}
const CenterWrap = styled.div`
  width: 550px;
  color: #fff;
  padding-top: 100px;
  text-align: center;
  p {
    &:first-child {
      font-size: 35px;
    }
    &:nth-child(2) {
      padding-top: 10px;
      line-height: 1.5em;
      font-size: 18px;
      padding-bottom:30px;
    }
  }
`;
const Header = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width: 1240px;
  height: 450px;
  border-top: 3px solid ${theme.orange};
  background-color: ${theme.chacoal};
  background: url(https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_b@2x-7e5ff471.jpg) no-repeat;
  background-position:center;
  background-size:cover;
  `;

const Nav = styled.div`
display:flex;
justify-content:space-between;
width : 100%;
padding-top : 20px;
`

const LeftLogoWarp = styled.div`
display:flex;
padding-left:30px;
`;

const CloudLogo = styled.div`
  background: url(${theme.cloudLogo}) no-repeat;
  background-position:center;
  background-size:contain;
  display: inline-block;
  width: 48px;
  height: 30px;
  `;

const CloudTextLogo = styled.div`
  background: url(${theme.cloudTextLogo}) no-repeat;
  background-position: center;
  background-size: contain;
  display: inline-block;
  width: 115px;
  height: 30px;
  `;

const RightWrap = styled.div`
  padding-right:30px;
  display: inline-block;
`;

const Ul = styled.ul`
display : flex;
flex-direction : row;
`
const Li = styled.li`
  border: ${(props) => (props.orange ? "none" : "1px solid " + theme.llgray)};
  background-color: ${(props) => (props.orange ? theme.orange : "none")};
  font-size: 14px;
  border-radius: 3px;
  padding: 7px 15px;
  color: #fff;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export default HomeHeader
