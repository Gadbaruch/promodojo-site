import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://promodojo.gadbaruch.com"),
  title: "PromoDojo — Product growth ninja agents",
  description:
    "A team of AI agents that research your audience, draft campaigns, ship them and learn from the results. You approve every move.",
  icons: { icon: "/brand/favicon-32.png", apple: "/brand/icon-256.png" },
  openGraph: {
    title: "PromoDojo — Product growth ninja agents",
    description: "Promotion that learns from every move. Sharpen. Test. Grow. Repeat.",
    images: ["/brand/icon-256.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
