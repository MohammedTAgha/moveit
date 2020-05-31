import styled from "styled-components";

const HeadTitle = styled.div`
&{
font-family: "Baloo Bhaina 2";
  font-weight: normal;
  font-size: 38px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #000000;
}
  
  &:after{
    content: "";
  display: block;
  width: 55px;
  height: 5px;
  background: transparent;
  background-color:  #ff674b;
  margin-top: -15px;
  margin-bottom: 50px;
  padding: 0;
  border-radius: 5px;
  }
`;


export default HeadTitle