import Styled from "styled-components/macro";
import {Link as ReactRouterLink} from "react-router-dom";

export const Container=Styled.div`
display: flex;
flex-direction: column;
min-height: 580px;
background-color: rgba(0, 0, 0, 0.75);
border-radius: 5px;
width: 100%;
margin: auto;
max-width:350px;
padding: 60px 68px 40px;
margin-bottom: 100px;
@media (max-width: 1000px){
width:auto;
padding:30px;
}
`;
export const Base =Styled.form`
display: flex;
flex-direction: column;
max-width: 350px;
width: 100%;
`;
export const Error =Styled.div`
background: #e87c03;
border-radius: 4px;
font-size: 14px;
margin: 0 0 16px;
color: white;
padding: 15px 20px;
`;
export const Title =Styled.h1`
color: #fff;
font-size: 32px;
font-weight: bold;
margin-bottom: 28px;
`;

export const Text =Styled.p`
color: #737373;
font-size: 16px;
font-weight: 500;
`;
export const TextSmall =Styled.p`
margin-top: 10px;
font-size: 13px;
line-height: normal;
color: #8c8c8c;
`;

export const Link =Styled(ReactRouterLink)`
color:white;
text-decoration:none;

&:hover {
    text-decoratin:underline;
}
`;
export const Input =Styled.input`
background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Submit =Styled.button`
background: #e50914;
border-radius: 4px;
font-size: 16px;
font-weight: bold;
margin: 24px 0 12px;
padding: 16px;
border: 0;
color: white;
cursor: pointer;
&:disabled {
  opacity: 0.5;
}
`;

