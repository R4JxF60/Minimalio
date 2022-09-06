import Image from "next/image";

function FeatureMessage() {
    return (
        <div className="flex items-center text-light-gray font-sen sm:text-base text-xs">
            Visit my&nbsp;
            <div className="flex">
                <Image 
                    src={"/images/icons/sri-lanka.svg"}
                    width={28}
                    height={28}
                />
            </div>    
        &nbsp;Sri Lanka<div className="ml-4 flex items-center">#visitsrilanka{(new Date()).getFullYear().toString()}</div> </div>
    );
}

export default FeatureMessage;