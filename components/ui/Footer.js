import styled from "styled-components";
import theme, * as css from '../../style/theme'

const Footer = () => {
  return (
    <FooterWrap>
      <Ul>
        <Li>PopUlar searches</Li>
        <Li>Directory</Li>
        <Li>About us</Li>
        <Li>Creator Resources</Li>
        <Li>Blog</Li>
        <Li>Jobs</Li>
        <Li>Developers</Li>
        <Li>Help</Li>
        <Li>Legal</Li>
        <Li>Privacy</Li>
        <Li>Cookies</Li>
        <Li>Imprint</Li>
        <Li>Charts</Li>
      </Ul>
      <P>
        <span>Language</span>: English (US)
      </P>
    </FooterWrap>
  );
}
const FooterWrap = styled.div`
font-size:14px;
margin : 30px;
border-top:1px solid ${theme.lsnow};
padding-top : 20px;
`

const Ul = styled.ul`
display:flex;
flex-direction:row;
`
const Li = styled.li`
color:${theme.lgray};
padding : 2px;
&::after {
  content:' -';
}
&:last-child::after {
  content:'';
}
&:hover {
  cursor: pointer;
  color : ${theme.gray};
}
`

const P = styled.p`
margin-top:10px;
  & > span {
    color: ${theme.blue};
    &:hover {
      color :${theme.chacoal};
    }
  }
`;


export default Footer;