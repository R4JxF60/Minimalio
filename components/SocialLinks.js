function SocialLinks(props) {
    return (
        <div className="flex items-center justify-center w-full md:mb-16 sm:mb-9 mb-8">
            <div className="sm:block hidden w-12 h-[1px] bg-black mr-4"></div>
            <div className="flex items-center">
                <object data="/images/icons/github-brands.svg"></object>
                <object className="ml-4 mr-4" data="/images/icons/linkedin-in-brands.svg"></object>
                <object data="/images/icons/twitter-brands.svg"></object>
                <object className="ml-4 mr-4" data="/images/icons/instagram-brands.svg"></object>
                <object data="/images/icons/youtube-brands.svg"></object>
            </div>
            <div className="sm:block hidden w-12 h-[1px] bg-black ml-4"></div>
        </div>
    );
}

export default SocialLinks;