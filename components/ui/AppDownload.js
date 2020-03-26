import styled from "styled-components";
import theme, * as css from "../../style/theme";

const AppDownload = () => {
  return (
    <DownloadImg>
      <AppStore />
      <Google />
    </DownloadImg>
  );
}
const DownloadImg = styled.div`
margin-top:30px;
`

const AppStore = styled.button`
  background: url(${theme.appstoreDownload}) no-repeat;
  background-size: contain;
  width: 130px;
  height: 40px;
  padding:0;
  margin-right:7px;
  border:none;
  `;
const Google = styled.button`
  background: url(${theme.googleDownload}) no-repeat;
  background-size:contain;
  width :110px;
  height:40px;
  padding:0;
  border:none;
`;


export default AppDownload