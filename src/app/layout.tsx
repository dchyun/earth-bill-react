import type { Metadata } from "next";
import "./_styles/theme/theme.scss";
import { PreloadResources } from "./preload-resources";

export const metadata: Metadata = {
  title: {
    template: '%s | The Earth Bill',
    default: 'The Earth Bill',
  },
  keywords: "climate, climate change, green new deal, public policy, enviornment, green",
  authors: [{name: "350 NYC"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreloadResources/>
      <body>{children}</body>
    </html>
  );
}
