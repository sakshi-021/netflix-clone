import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Div =styled.div`
width:100%;
display:flex;
justify-content:center;

`;
export const Input = styled.input`
  // max-width: 450px;
  width: 60%;
  border: 0;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  float:left;
  text-align:center;
  @media (max-width: 400px) {
    margin:auto;
    width: 80%;
    margin-bottom:5px;
    
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  background: #e50914;
  color: white;
 
  padding: 0 32px;
  font-size: 24px;
  border: 0;
  cursor: pointer;

  // width:40%;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 20px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width:400px){
    width:80%;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 14px;
    margin-top: 20px;
    font-weight: bold;
  }
 
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  
  margin:40px 0px;
  padding-top:20px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;