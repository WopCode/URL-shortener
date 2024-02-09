import { Dosis } from "next/font/google";
import "./globals.css";

const inter = Dosis({
    subsets: ["latin"],
});

export const metadata = {
    title: "Shurl | link shortener",
    description: "Short link generator.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
