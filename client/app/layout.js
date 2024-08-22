import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "smartRoom",
  description: "siema robie internet of things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
