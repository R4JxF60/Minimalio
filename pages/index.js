import React from "react";
import Navigation from "../components/Navigation";

function IndexPage() {
    return (
        <div className="bg-slate-600">
            <div className="bg-white sm:w-full sm:h-28 sm:fixed sm:p-0 pl-9 pr-9">
                <Navigation />
            </div>
            <div className="container mx-auto">
                
                
                <div className="h-screen bg-purple-500">

                </div>
                <div className="h-screen bg-yellow-500">

                </div>
            </div>
        </div>
    );
}

export default IndexPage;