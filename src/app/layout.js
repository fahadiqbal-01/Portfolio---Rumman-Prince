import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTopFix from "@/components/ScrollToTopFix";

export const viewport =
  "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

export const metadata = {
  title: "Shah Mohammad Rumman Prince",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#000000] selection:bg-white selection:text-black mt-20 ">
        <ScrollToTopFix />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
