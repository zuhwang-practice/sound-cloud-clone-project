import styled from "styled-components";
import theme, * as css from "../../style/theme";


const OrangeBtn = ({text}) => {
return (
  <Btn>
    {text}
  </Btn>
)
}

const Btn = styled.button`
  border: none;
  font-size: 18px;
  background-color: ${theme.orange};
  color: #fff;
  padding: 12px 40px;
  /* width: 250px; */
  letter-spacing: 0.05em;
  border-radius: 3px;
`;

export default OrangeBtn