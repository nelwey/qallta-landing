
import "./globals.css";

export const metadata = {
  title: "Qallta Landing",
  description: "Qallta Landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
