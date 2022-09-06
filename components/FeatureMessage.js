import Image from "next/image";

function FeatureMessage() {
    return (
        <div className="flex align-middle text-light-gray font-sen text-base">
            Visit my&nbsp;<div>
            <div className="flex">
                <Image 
                    src={"/images/icons/sri-lanka.svg"}
                    width={28}
                    height={28}
                />
            </div>    
        </div>&nbsp;Sri Lanka<div className="ml-4">#visitsrilanka{(new Date()).getFullYear().toString()}</div> </div>
    );
}

export default FeatureMessage;