import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Civic Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24 px-4">
        {children}
        </main>
      </body>
    </html>
  );
}