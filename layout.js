// app/layout.js
import './globals.css';
import { PoultryProvider } from './context/PoultryContext';

export const metadata = {
  title: 'PoultryPal Dashboard',
  description: 'Dashboard for poultry farm management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PoultryProvider>
          {children}
        </PoultryProvider>
      </body>
    </html>
  );
}