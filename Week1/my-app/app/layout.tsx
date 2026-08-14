import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Student Portal Next.js Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#f4f6fb",
          color: "#1f2937",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Header */}
        <header
          style={{
            background:
              "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            color: "white",
            padding: "18px 40px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              🎓 Student Portal
            </h1>

            <nav
              style={{
                display: "flex",
                gap: "25px",
              }}
            >
              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Home
              </a>

              <a
                href="/students"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Students
              </a>

              <a
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main
          style={{
            maxWidth: "1200px",
            minHeight: "calc(100vh - 150px)",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              minHeight: "400px",
            }}
          >
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            background: "#111827",
            color: "#d1d5db",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 Student Portal. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}