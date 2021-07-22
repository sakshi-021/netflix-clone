import react from "react";
import { Inner, Container,Pane,Item,Title ,SubTitle,Image } from "../jombotron/styles/jumbotron"

function Jumbotron({ children, direction = "row", ...restProps }) {
    return (
        <Item  {...restProps}>
        <Inner direction={direction} >
            <p>{children}</p>
        </Inner>
        </Item>
    )
}

Jumbotron.Container = function jumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function jumbotronPane({ children , ...restProps }) {
    return <Pane   {...restProps} >{children}</Pane>
}
Jumbotron.Title = function jumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function jumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function jumbotronImage({ ...restProps }) {
    return <Image {...restProps} />
}
export default Jumbotron;