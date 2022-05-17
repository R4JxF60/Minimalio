import Header from "./Header";
import Text from "./Text";

function Contact(props) {

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
                <div title="Email address of Rajitha Kumara" className="md:mt-52 mt-5"><a href="mailto:rajithakumaraprog@gmail.com" target="_blank" className="cursor-pointer hover:scale-125 ease-in-out duration-200 font-lato font-light text-base"><img src="/images/icons/email.svg" alt="email-icon" className="inline-block mr-2"></img>rajithakumaraprog@gmail.com</a></div>
            </div>
            <div className="md:w-[38%] w-full md:mt-[304px] mt-16 h-full flex items-center justify-center">
                <img src="/images/say_hi.svg" alt="say hi illustrator"></img>
            </div>
        </section>
        
    );
}

export default Contact;