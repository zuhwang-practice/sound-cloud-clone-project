import styled from "styled-components";
import theme, * as css from '../../style/theme'

const StrokeBtn = ({text}) => {
  return (
    <Btn>
      {text}
    </Btn>
  )
}

const Btn = styled.button`
  border: 1px solid ${theme.llgray};
  font-size: 20px;
  border-radius: 3px;
  padding: 10px 15px;
  color: #fff;
  margin-right: 10px;
  background-color:transparent;
  &:last-child {
    margin-right: 0;
  }
`;



export default StrokeBtn;