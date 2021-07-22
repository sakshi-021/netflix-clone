import React from "react";
import Accordion from "../components/accordion/index"
import optForm from "../components/opt-form";
import FaqsData from "../fixtures/faqs.json"

export default function FaqsContainer(){
    return(<>
       
        <Accordion>
            <Accordion.Title>Frequently Asked Question </Accordion.Title>
            
            {FaqsData.map((item)=>(
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />
            <optForm>
            <optForm.Text>Ready to watch? Enter your email to create or restart your membership.</optForm.Text>
           
                <optForm.Input placeholder="Email Address"></optForm.Input>
                <optForm.Break/>
                <optForm.Button>Try it now</optForm.Button>
            
            </optForm>

        </Accordion>
        </>
    )
};
