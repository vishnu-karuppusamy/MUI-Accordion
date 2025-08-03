import React from "react"; import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const RootLayout = (props: { children: React.ReactNode }) => {
   const { children } = props;
   return (
    <html lang="en" className={roboto.variable}>
       <body>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
};

 export const metadata = {
  title: 'Track shipments',
  description: 'Track shipments',
 };

export default RootLayout;
