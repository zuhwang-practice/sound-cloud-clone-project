import styled from "styled-components";
import theme, * as css from "../../style/theme";

const Header = () => {
  return (
    <HeaderContainer>
      <CenterBox>
        <LeftNav>
          <ul>
            <li>Logo</li>
            <li>Home</li>
            <li>Stream</li>
            <li>Library</li>
          </ul>
        </LeftNav>
        <SearchInput>
          <input />
        </SearchInput>
        <RightNav>
          <ul>
            <li>upload</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </RightNav>
      </CenterBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  height: 46px;
  width: 100%;
  background-color: ${theme.chacoal};
`;

const CenterBox = styled.div`
  width: 1240px;
  margin: 0 auto;
  height: 100%;
  font-family: ${theme.font};
  display:flex;
  justify-content:space-between;
`;

export default Header;
