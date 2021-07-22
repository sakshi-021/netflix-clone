import React,{useState,useContext} from "react";
import {useHistory } from "react-router-dom";
 import {FirebaseContext} from "../context/firebase";
import { HeaderContainer } from "../containers/header.js";
import FooterContainer from '../containers/footer';
import { Form} from "../components";
import * as ROUTES from "../constants/routes"

export default function SignIn(){
    const history = useHistory();
    const { firebase}=useContext(FirebaseContext);
    const [emailAddress , setEmailAddress ]= useState("");
    const [password , setPassword]= useState("");
    const [error , setError ]= useState("");

    const isInValid= password==="" || emailAddress ==="";
    const handleSignin=(event ) =>{
        event.preventDefault();

      return  firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(()=>{
                history.push(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setEmailAddress("");
                setPassword("");
                setError(error.message);
            });
    };

    return (<>
    <HeaderContainer>
        <Form>
            <Form.Title>Sign IN</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}
            <Form.Base onSubmit={handleSignin} method="POST">
                <Form.Input
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={({ target })=>setEmailAddress(target.value)} />
                <Form.Input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target })=>setPassword(target.value)}>
                </Form.Input>
                <Form.Submit disabled={isInValid} type="submit" data-testid="sign-in">
                    Sign In
                </Form.Submit>


            </Form.Base>
            <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            {/* <Form.Text>
                Can't remember Password? <Form.Link to='/passwordreset'>Reset Password.</Form.Link>
            </Form.Text> */}
            <Form.TextSmall>
                This page is protected by Google  reCAPTCHA to ensure you're not a bot.Learn more.
            </Form.TextSmall>
        </Form>
    </HeaderContainer>
    <FooterContainer />
    </>)
}