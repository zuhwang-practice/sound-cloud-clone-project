import styled from "styled-components";
import theme, * as css from "../../style/theme";
import PlayTile from "../ui/PlayTile";
import OrangeBtn from "../ui/OrangeBtn";

const TrandingTrack = () => {
  return (
    <TrandingTrackWrap>
      <TrendTitle>
        Hear what's trending for free in the soundcloud community
      </TrendTitle>
      <PlayListWarp>
        {
          // 플레이 리스트 맵돌리기
          <PlayTile />
        }
      </PlayListWarp>
      <BtnWrap>
        <OrangeBtn text="Explore trending playlists" />
      </BtnWrap>
    </TrandingTrackWrap>
  );
}
const TrandingTrackWrap = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin: 0 30px;
  `
const TrendTitle = styled.p`
  text-align:center;
  font-size:25px;
  padding-bottom:30px;
  `
const PlayListWarp = styled.div`
  padding-bottom:20px;
  `
const BtnWrap = styled.div`
${css.flexCenter};
margin-bottom:70px;
`

export default TrandingTrack