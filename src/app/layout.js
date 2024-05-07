import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Vignesh Portfolio",
  description: "UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
