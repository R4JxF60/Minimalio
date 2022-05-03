import Header from "./Header";
import Text from "./Text";

function Contact(props) {
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
            <div className="mt-32 w-full md:w-[38%] md:mt-[304px]">
                <Text>
                    <form>
                        <input type="text" placeholder="Your name" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></input>
                        <input type="email" placeholder="Email address" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></input>
                        <textarea placeholder="Message" className="border border-solid border-black w-full sm:p-4 p-3 placeholder:text-base sm:mb-3 mb-2"></textarea>
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