import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HTML DOM Validator",
    description: "HTML DOM Validator ensures the structural integrity of HTML documents by validating them against specified rules. Using the HTML Validation Language, users can define custom rules to match their requirements. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={inter.className}>{children}</body>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" fetchPriority="true"></link>
    </html>
  );
}
