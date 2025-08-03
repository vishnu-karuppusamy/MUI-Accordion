import React from "react"; import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import "../theme/global.css"
import LoggedInLayout from "../components/layout/LoggedInLayout";
import localFont from "next/font/local"

// Define local fonts
const CircularStdBook = localFont({
  src: "../assets/fonts/CircularStd-Book.ttf",
  display: "swap",
  variable: "--font-circular-std-book",
  weight: "450",
})
const CircularStdMedium = localFont({
  src: "../assets/fonts/CircularStd-Medium.ttf",
  display: "swap",
  variable: "--font-circular-std-medium.ttf",
  weight: "500",
})
const DubaiBold = localFont({
  src: "../assets/fonts/Dubai-Bold.ttf",
  display: "swap",
  variable: "--font-dubai-bold",
  weight: "700",
})
const DubaiRegular = localFont({
  src: "../assets/fonts/Dubai-Regular.ttf",
  display: "swap",
  variable: "--font-dubai-regular",
  weight: "400",
})
const DubaiMedium = localFont({
  src: "../assets/fonts/Dubai-Medium.ttf",
  display: "swap",
  variable: "--font-dubai-medium",
  weight: "500",
})
const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
    <html lang="en" className={`${CircularStdBook.variable} ${CircularStdMedium.variable} ${DubaiBold.variable} ${DubaiRegular.variable} ${DubaiMedium.variable}`}>
       <body style={{ margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
         <main style={{ backgroundColor: 'rgb(243 246 249)' }}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
            <LoggedInLayout>
               {children}
            </LoggedInLayout>
           </ThemeProvider>
          </AppRouterCacheProvider>
         </main>
       </body>
     </html>
   );
};

 export const metadata = {
  title: 'Track shipments',
  description: 'Track shipments',
 };

export default RootLayout;
