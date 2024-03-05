import React from "react";
import {
    IconBrandGithubFilled,
    IconArrowBadgeRightFilled,
} from "@tabler/icons-react";

function Navbar() {
    return (
        <nav className="bg-blacked">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="">
                        <div className="ml-4 flex items-center space-x-4">
                            <a
                                href="/"
                                className="flex flex-wrap text-white hover:bg-white hover:text-blacked rounded-lg p-1 text-3xl font-bold"
                            >
                                <IconArrowBadgeRightFilled
                                    width={40}
                                    height={40}
                                />
                                Shurl
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-4 flex items-center space-x-4">
                            <a
                                href="https://github.com/WopCode/URL-shortener"
                                className="text-white hover:bg-white hover:text-blacked rounded-lg p-2"
                                target="_blank"
                            >
                                <IconBrandGithubFilled />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
