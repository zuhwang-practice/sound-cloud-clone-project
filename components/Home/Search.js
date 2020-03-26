import styled from "styled-components";
import theme, * as css from "../../style/theme";
import OrangeBtn from "../ui/OrangeBtn";

const HomeSearch = () => {
return (
  <SearchBox>
    <InputWrap>
      <label htmlFor="home-search"></label>
      <input
        name="home-search"
        placeholder="Search for artists, bands, tracks, podcasts"></input>
    </InputWrap>
    <span>or</span>
    <OrangeBtn text="Upload your own"></OrangeBtn>
  </SearchBox>
);
}
const InputWrap = styled.div`
  font-size: 16px;
  position: relative;
  input {
    width : 600px;
    padding: 14px 25px;
    background-color: ${theme.lsnow};
    display:block;
    border: none;
    border-radius: 3px;
    font-weight: 300;
    color: ${theme.chacoal};
    &::placeholder {
      color: ${theme.dgray};
    }
  }
  label {
    display:block;
    position: absolute;
    top:30%;
    right :15px;
    background : url(${theme.searchIcon}) no-repeat;
    background-size:contain;
    width : 20px;
    height : 20px;
    
  }
  `;

const SearchBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 16px;
  padding : 50px;
  span {
    padding: 0 20px;
  }
`;

export default HomeSearch