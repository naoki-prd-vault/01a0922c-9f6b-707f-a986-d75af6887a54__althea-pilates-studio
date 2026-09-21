import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Althea Pilates Studio | Pilates en Ciudad Quesada, San Carlos',
  description: 'Althea Pilates Studio en Ciudad Quesada. Pilates clásico y contemporáneo con Mat, Reformer y Wunda. Consulta horarios y reserva tu clase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant_garamond.variable}`}>{children}</body>
    </html>
  );
}