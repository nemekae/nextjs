import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Created manually",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}