import styled from "styled-components";
import theme, * as css from "../../style/theme";
import StrokeBtn from "../ui/StrokeBtn";

const SoundCloudTeaser = () => {
  
  return (
    <TeaserWrap>
      <TextWrap>
        <Title>Calling all creators</Title>
        <P>
          Get on SoundCloud to connect with fans, share your sounds, and grow
          your audience. What are you waiting for?
        </P>
        <StrokeBtn text="Find out more"/>
      </TextWrap>
    </TeaserWrap>
  );
}

const TeaserWrap = styled.div`
  background: url(${theme.scTeaserImg}) no-repeat;
  background-size: cover;
  height:350px;
  ${css.flexCenter};
  justify-content:flex-start;
`;
const TextWrap = styled.div`
  width: 500px;
  padding: 0 70px;
  color: ${theme.white};
`;

const Title = styled.p`
  font-size: 35px;
  color: ${theme.white};
  margin-bottom: 15px;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5em;
  width: 100%;
  margin-bottom:15px;
`;

export default SoundCloudTeaser