
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"
import { Toaster } from "react-hot-toast"
import { Header } from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AB zemědělská a lesní s.r.o.',
  description: 'AB zemědělská a lesní s.r.o. polečnost zaměřena na export - import v oblasti zahraničního obchodu se specializací na zemědělské komodity.',
  keywords: "AB, AB zemědělská, Pavel Polanka, Polanka, AB zemědělská a lesní, AB zemědělská a lesní s.r.o., Agentura Berm, Berm",
}

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-stone-950 relative `}>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>

      </body>
    </html>
  );
};

export default RootLayout;
