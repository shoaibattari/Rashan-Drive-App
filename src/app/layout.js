import "./globals.css";


export const metadata = {
  title: "OMJ RAMZAN RASHAN DRIVE BILLING APP",
  description: "omj ramzan rashani drive app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
