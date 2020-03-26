import styled from "styled-components";
import theme, * as css from "../../style/theme";
import AppDownload from "../ui/AppDownload";

const MobileTeaser = () => {
  
  return (
    <TeaserWrap>
      <PhoneImg />
      <TextBox>
        <Title>Never stop listening
          <div></div>
        </Title>
        <P>
          SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and
          Xbox One.
        </P>
    <AppDownload />
      </TextBox>
    </TeaserWrap>
  );
}


const TeaserWrap = styled.div`
background-color:${theme.lsnow};
padding-bottom:200px;
padding:0 30px;
display:flex;
flex-direction:row;
`
const PhoneImg = styled.div`
  margin-left : 40px;
  width : 700px;
  height : 440px;
  background: url(https://a-v2.sndcdn.com/assets/images/never_stop_listening@2x-ae7903ca.jpg) no-repeat;
  background-position: 0 73px;
  background-size:contain;
`;
const TextBox = styled.div`
  width: 325px;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 35px;
  color: ${theme.black};
  padding-bottom: 30px;
  margin-bottom:30px;
  position: relative;
  & > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-image: linear-gradient(90deg, #7d01a1, #f30 50%, #f50);
  }
`;
const P = styled.p`
font-size:20px;
font-weight:100;
line-height:1.5em;
width:100%;
`


export default MobileTeaser;