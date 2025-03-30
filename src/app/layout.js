import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsita Keerthikanth | Portfolio",
  description: "Showcasing my work in software development, machine learning, and design.",
  keywords: "portfolio, software engineer, AI, web development",
  openGraph: {
    title: "Harsita Keerthikanth | Portfolio",
    description: "A showcase of my projects and experience.",
    url: "https://harsita.netlify.app/",
    siteName: "Harsita's Portfolio",
    // images: [
    //   {
    //     url: "https://yourwebsite.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Your Portfolio",
    //   },
    // ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
