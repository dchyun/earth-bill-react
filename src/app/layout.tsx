import type { Metadata } from "next";
import "./_styles/theme/theme.scss";

export const metadata: Metadata = {
  title: "React Starter App",
  description: "React starter app with Next.JS and a small design system structure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
