// app/layout.tsx
import './globals.css'; // Pour les styles globaux
import Header from './components/Header'; // Assurez-vous que le chemin est correct
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>LatAmBetHub</title>
      </head>
      <body>
        <Header />
        
        {/* Contenu principal directement rendu sans conteneur supplémentaire */}
        {children}
        
        <Footer />
      </body>
    </html>
  );
}