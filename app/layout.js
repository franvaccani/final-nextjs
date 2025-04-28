import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "McDondalds Argentina",
  description: "Descubre y disfruta de nuestras hamburguesas, patatas, mcflurry, en nuestra web. Calidad ✓. Pedir o recoger ✓ 24h ✓. Descuento ✓",
  keywords: ["mcdonalds", "hamburguesas", "pollo", "papas", "bebidas"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContextProvider>
          <CartContextProvider>
            <NavBar />
            {children}
            <Footer />
          </CartContextProvider>
        </AuthContextProvider>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
