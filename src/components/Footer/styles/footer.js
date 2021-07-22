import styles from "styled-components/macro";

export const Container =styles.div`
display:flex;
padding:70px 56px;
margin:auto;
max-width:1000px;
flex-direction:column;

@media (max-width:1000px){
    padding:70px 30px;
}
`;

export const Column=styles.div`
display:flex;
flex-direction:column; 
text-align:left;
  `;
export const Row= styles.div`
display:grid;
grid-template-columns:repeat(auto-fill, minmax(200px,1fr));
grid-gap:15px;

@media (max-width:1000px){
    grid-template-columns:repeat(auto-fill, minmax(150px,1fr));

}
`;

export const Link =styles.a `
color:#757575;
margin-bottom:20px;
font-size:13px;
text-decoration:none;
`;

export const Title =styles.a `
color:#757575;
margin-bottom:40px;
font-size:16px;
`;

export const Text =styles.p `
color:#757575;
margin-bottom:40px;
font-size:16px;
`;

export const Break =styles.p `
flex-basis:100%;
height:0;
`;