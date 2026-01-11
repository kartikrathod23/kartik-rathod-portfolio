import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kartik Rathod | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="bg-[#0B1020] text-gray-200">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
