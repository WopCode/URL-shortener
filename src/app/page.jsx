import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import { IconLocationFilled, IconLinkPlus } from "@tabler/icons-react";
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center  w-full bg-blacked">
                <form className="bg-state-800 p-10 w-10/12">
                    <div className="text-center text-white pt-10 pb-5 text-6xl font-medium tracking-widest">
                        Link Shortener
                    </div>
                    <input
                        type="text"
                        name="text"
                        className="mt-5 px-4 py-3 bg-white border border-slate-300 focus:outline-none rounded-lg sm:text-sm w-full"
                        placeholder="https://www.google.com/"
                    />
                    <div className="flex justify-center items-center mb-20">
                        <button className="px-4 py-2 bg-white rounded-lg font-bold mt-5 flex hover:bg-gray">
                            <IconLocationFilled width={20} height={20} />
                            <div className="pl-2">Shorten</div>
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex flex-wrap justify-center items-center ">
                <div className="flex w-full mt-10 mb-5 items-center justify-center ">
                    <div className="font-medium text-5xl ">How It Works</div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <div className="font-normal text-2xl tracking-widest">
                        Shrul + long links = short links
                    </div>
                </div>
                <div className="flex w-3/6 my-14">
                    <div className="justify-end flex mr-10">
                        <IconLinkPlus width={150} height={150} />
                    </div>

                    <div className="justify-start">
                        <div className="text-center text-2xl font-semibold mb-3 ">
                            What is a link shortener?
                        </div>
                        <div className="text-left ">
                            A link shortener is an online tool that allows you
                            to reduce the length of a URL (Uniform Resource
                            Locator) or web link, generating a shorter and
                            easier to share version.
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
