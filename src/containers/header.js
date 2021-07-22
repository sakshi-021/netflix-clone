import react from "react";
import * as ROUTES from "../constants/routes"
import  Header  from "../components/Header";
import logo from "../components/Header/logo.png"


export  function HeaderContainer({ children}){
return(
    <Header>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo}/>
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign IN</Header.ButtonLink>
        </Header.Frame>{children}
    </Header>
    
)

}
