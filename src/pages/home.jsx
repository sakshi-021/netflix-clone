import React from "react";
import JumbotronContainer from "../containers/jumbotron.jsx"
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faq.jsx';
import { HeaderContainer } from "../containers/header.js";
import { optForm } from "../components";
import { Feature } from "../components"

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                <Feature.SubTitle>
                        Welcome back!
                </Feature.SubTitle>
                    <Feature.Title>
                        Unlimited movies , TV shows and more.
                </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere.Cancel anytime.
                </Feature.SubTitle>

                    <optForm>
                        <optForm.Div>
                        <optForm.Button>Restart Your Membership </optForm.Button>
                        </optForm.Div>
                    </optForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}