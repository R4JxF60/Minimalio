function SocialLinks(props) {
    return (
        <div className="flex items-center justify-center w-full md:mb-16 sm:mb-9 mb-8">
            <div className="sm:block hidden w-12 h-[1px] bg-mid-black mr-4"></div>
            <div className="flex items-center">
                <a href="https://github.com/R4JxF60" target="_blank" className="cursor-pointer hover:scale-125 ease-in-out duration-200"><img src="/images/icons/github-brands.svg" alt="github-icon"></img></a>
                <a href="https://www.linkedin.com/in/rajithakumara" target="_blank" className="cursor-pointer ml-4 mr-4 hover:scale-125 ease-in-out duration-200"><img src="/images/icons/linkedin-in-brands.svg" alt="linkedin-icon"></img></a>
                <a href="https://twitter.com/RajithaKumara18" target="_blank" className="cursor-pointer hover:scale-125 ease-in-out duration-200"><img src="/images/icons/twitter-brands.svg" alt="twitter-icon"></img></a>
                <a href="https://instagram.com/rajitha__kumara" target="_blank" className="cursor-pointer ml-4 mr-4 hover:scale-125 ease-in-out duration-200"><img src="/images/icons/instagram-brands.svg" alt="instagram-icon"></img></a>
                <a href="https://www.youtube.com/channel/UCuFvEFEWLWRMEI2FuyfNjXw" target="_blank" className="cursor-pointer hover:scale-125 ease-in-out duration-200"><img src="/images/icons/youtube-brands.svg" alt="youtube-icon"></img></a>
            </div>
            <div className="sm:block hidden w-12 h-[1px] bg-black ml-4"></div>
        </div>
    );
}

export default SocialLinks;