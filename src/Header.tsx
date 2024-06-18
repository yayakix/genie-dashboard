import { useState } from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menu = document.body.querySelector('#mobilemenu')
    console.log(menu)


    return (
        <nav

            className="flex justify-between flex-row flex-wrap bg-white py-4 lg:px-12 border-solid border-b-2 lg:ml-48">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2  pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight"> <span className="text-slate-400 mx-1">Home/</span>Home</span>
                </div>
                <div className="lg:hidden">
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                            <div className='lg:block'>
                                <div
                                    className="HAMBURGER-ICON space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)}
                                >
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                </div>
                            </div>


                        </section>

                    </nav>

                </div>
            </div>

            <div className="menu w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ">

                <div className="  lg:flex-grow">
                </div>
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">

                    </button>
                </div>

            </div>
            <div className={isNavOpen ? "hidden" : "absolute top-20 w-screen h-screen lg:hidden"} >

                <div className="w-screen h-screen bg-white absolute ">
                    <button
                        className="absolute top-0 right-0 px-8 py-8  "
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/about">About</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>




        </nav>
    )
}
