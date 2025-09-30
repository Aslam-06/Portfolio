import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* ===== Navbar ===== */}
        <nav className="navbar">
          <div className="logo">
            <Link href="/">Accueil</Link>
          </div>
          <div className="nav-links">
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* Contenu principal */}
        <main>{children}</main>
      </body>
    </html>
  );
}