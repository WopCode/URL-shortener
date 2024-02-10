import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import { IconLinkPlus } from "@tabler/icons-react";
import PrimaryUrl from "@/components/primaryUrl";
export default function Home() {
    return (
        <>
            <Navbar />
            <PrimaryUrl />
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
