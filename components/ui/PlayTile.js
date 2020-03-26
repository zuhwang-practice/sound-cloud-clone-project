import {useState,useEffect} from 'react'
import styled from "styled-components";
import theme, * as css from "../../style/theme";

const PlayTile = () => {
  const [onHover, setOnHover] = useState(false);
  const [like, setLike] = useState(false);

  const handleOnMouseEnter = (e) => {
    setOnHover(true);
  };
  const handleOnMouseOut = (e) => {
    setOnHover(false);
  }
  useEffect(()=>{},[onHover])
  return (
    <PlayTileWrap>
      <AlbumImg
        onMouseOverCapture={handleOnMouseEnter}
        url={
          "https://i1.sndcdn.com/artworks-9H5zgqPQyjItv0Qn-llVElA-t500x500.jpg"
        }></AlbumImg>
      {onHover && (
        <AlbumHover onMouseOutCapture={handleOnMouseOut}>
          <PlayBtn />
          <BtnWtap>
            <HeartIcon like={like} onClick={()=>setLike(!like)}/>
            <DotIcon />
          </BtnWtap>
        </AlbumHover>
      )}
      <div>
        <p>death bed | Feat. beabadoobee</p>
        <p>Powfu and others on SoundCloud</p>
      </div>
    </PlayTileWrap>
  );
}
const BtnWtap = styled.div`
position: absolute;
bottom:0;
right:0;
display:flex;
flex-direction:row;
padding:10px;
`
const HeartIcon = styled.div`
width:15px;
height: 15px;
background: url(${theme.heartIcon}) no-repeat;
margin-right:10px;
/* color: ${props=>props.like ? theme.deeporange : '#fff'}; */
`
const DotIcon = styled.div`
  width: 15px;
  height: 15px;
  background: url(${theme.dotIcon}) no-repeat 0 6px;
`;


const PlayTileWrap = styled.div`
  width: 180px;
  position: relative;
  div {
    font-weight: 300;
    p {
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-top:5px;
      &:first-child {
        font-size: 14px;
        color: ${theme.chacoal};
        &:hover {
          color : ${theme.black};
        }
      }
      &:last-child {
        font-size: 12px;
        color: ${theme.gray};
        &:hover {
          color : ${theme.chacoal};
        }
      }
    }
  }
`;
const AlbumImg = styled.div`
  background: url(${(props) => props.url || "https://i1.sndcdn.com/artworks-000418049754-usyur6-t500x500.jpg"}) no-repeat;
  background-position: center;
  background-size: cover;
  width: 180px;
  height: 180px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) 
    no-repeat;
  }
`;

const AlbumHover = styled.div`
  position: absolute;
  top: 0;
  width: 180px;
  height: 180px;
  ${css.flexCenter};
  /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); */
`;
const PlayBtn = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.orange}  url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDE4IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBsYXkgNjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iYnV0dG9ucyIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NjUuMDAwMDAwLCAtODE4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTY2NSw4NDcgTDE2NjkuMTUzODUsODMyLjUgTDE2NjUsODE4IEwxNjgzLDgzMi41IEwxNjY1LDg0NyBaIiBpZD0iUGxheS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat center;
  background-size : 38%;
  background-position-x:18px;
  border-radius: 50%;
  &:hover {
    background: ${theme.deeporange}  url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDE4IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBsYXkgNjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iYnV0dG9ucyIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NjUuMDAwMDAwLCAtODE4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTY2NSw4NDcgTDE2NjkuMTUzODUsODMyLjUgTDE2NjUsODE4IEwxNjgzLDgzMi41IEwxNjY1LDg0NyBaIiBpZD0iUGxheS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat center;
    background-size : 38%;
    background-position-x:18px;
  }
`;
export default PlayTile