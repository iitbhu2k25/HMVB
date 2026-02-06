import { ReactNode } from "react";
import { Inter } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "HMVB - Hydrological Modelling for Varuna River Basin",
  description: "Comprehensive hydrological modelling and analysis portal for Varuna River Basin. Features groundwater depth and quality monitoring, MAR (Managed Aquifer Recharge) suitable zones analysis, and TEM (Transient Electromagnetic Method) data visualization.",
  keywords: ["Hydrological Modelling", "Varuna River Basin", "Groundwater Monitoring", "MAR", "Managed Aquifer Recharge", "TEM Data", "Water Quality", "Aquifer Analysis", "Groundwater Depth", "Hydrogeology"],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {/* Top Government Links Bar */}
        <TopBar />

        {/* Main Navigation */}
        <MainNav />

        {/* Header with Logos */}
        {/* <Header /> */}

        

        {/* Main Content */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
