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
        const data = { 
            name: inputName.current.value, 
            email: inputEmail.current.value, 
            message: inputMessage.current.value,
        };

        event.preventDefault();
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
        <section className="md:flex justify-between  max-h-fit min-h-[100vh]" id="contact">
            <div className="md:mt-52 mt-32 w-full md:w-[52%]">
                <Header>Contact Me</Header>
                <Text>
                    <p>
                        Currently I'm a third year computer science undergraduate and looking for freelancing works and internship oppertunities. However, If you need to say hello or ask any thing, just drop a message and I'll reach you!
                    </p>
                </Text>
            </div>
            <div className="mt-16 w-full md:w-[38%] md:mt-[304px]">
                <Text>
                    <form onSubmit={formHandler}>
                        <input ref={inputName} type="text" placeholder="Your name" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></input>
                        <input ref={inputEmail} type="email" placeholder="Email address" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></input>
                        <textarea ref={inputMessage} placeholder="Message" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></textarea>
                        <div>
                            <button type="submit" className="font-merriweather border border-solid sm:p-4 p-3 bg-black text-white text-base">Send message</button>
                        </div>
                    </form>
                </Text>
            </div>
        </section>
    );
}

export default Contact;