import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Helmet House | Premium Helmet Store Showcase",
  description:
    "Helmet House premium multi-page website for helmets, accessories, size guides, and store contact.",
  applicationName: "Helmet House"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-base text-textPrimary antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
