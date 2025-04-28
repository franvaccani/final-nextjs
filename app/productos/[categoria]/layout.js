import { Geist, Geist_Mono } from "next/font/google";
import NavigationMenu from "@/app/components/NavigationMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function ProductosLayout({ children, params }) {
  const {categoria} = await params;

  return (
    <>
      <NavigationMenu categoria={categoria} />
      {children}
    </>
  );
}
