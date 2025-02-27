"use client";
import "./globals.css";

import { ThemeProvider } from "./context/ModContext";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Provider store={store}> 
          <ThemeProvider>
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

