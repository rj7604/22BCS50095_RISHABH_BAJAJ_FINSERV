import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "22BCS50095", // Change to your Roll Number
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
