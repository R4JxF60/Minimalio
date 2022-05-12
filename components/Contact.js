import { useState, useRef } from "react";
import Header from "./Header";
import Text from "./Text";
import useSWR from "swr";

function Contact(props) {

    // state of the form
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    // set refs
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);

    async function formHandler(event) {
        event.preventDefault();
        
        const data = { 
            name: inputName.current.value, 
            email: inputEmail.current.value, 
            message: inputMessage.current.value,
        };

        const res = await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        //console.log(inputName.current.value, inputEmail.current.value, inputMessage.current.value);
        if(res.ok) {
            const decodedRes = await res.json();
            console.log(decodedRes);
        }else {
            console.log("err");
        }
    }

    return (
        <section className="mx-auto pl-9 pr-9 sm:p-0 container md:flex justify-between  max-h-fit min-h-[100vh]" id="contact">
            <div className="md:mt-52 mt-32 w-full md:w-[52%]">
                <Header>Contact Me</Header>
                <Text>
                    <p>
                        Currently I'm a third year computer science undergraduate and looking for freelancing works and internship oppertunities. However, If you need to say hello or ask any thing, just drop a message and I'll reach you!
                    </p>
                </Text>
                <a href="mailto:rajithakumaraprog@gmail.com" target="_blank" className="font-merriweather block sm:p-4 p-3 bg-mid-black text-light-gray text-base w-fit md:mt-7 mt-5">Say Hello !</a>
            </div>
        </section>
    );
}

export default Contact;