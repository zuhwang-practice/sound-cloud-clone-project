import styled from 'styled-components'
import OrangeBtn from "../ui/OrangeBtn";
import theme, * as css from '../../style/theme'

const SignUpModule =()=>{
  return (
    <ModuleWrap>
      <P title>Thanks for listening. Now join in.</P>
      <P>Save tracks, follow artists and build playlists. All for free.</P>
      <OrangeBtn text="Create account" />
      <SignBox>
        <span>already have an account?</span>
        <SignBtn>Sign in</SignBtn>
      </SignBox>
    </ModuleWrap>
  );
}

const ModuleWrap = styled.div`
${css.flexCenter};
flex-direction:column;
height : 375px;
`
const P = styled.p`
  letter-spacing: 0.02em;
  padding-bottom: 20px;
  text-align: center;
  font-size: ${(props) => (props.title ? "35px" : "25px")};
  font-weight: ${(props) => (props.title ? "normal" : 300)};
`;
const SignBox = styled.div`
margin-top: 15px;
  ${css.flexCenter};
  font-size: 12px;
  color: ${theme.chacoal};
  & > span {
    margin-right: 20px;
  }
`;
const SignBtn = styled.button`
  border: 1px solid ${theme.lsnow};
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 3px;
  color : ${theme.chacoal};
`;

export default SignUpModule