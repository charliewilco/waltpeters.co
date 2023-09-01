import { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/logo.png',
    },
  ],
  themeColor: '#d8a75b',
  verification: {
    google: 'h6NhLEISPBdUzO9kTpiy-Y6MIKDCJCclBOSIzIo50vY',
  },
};

const font = Source_Serif_4({
  display: 'swap',
  weight: 'variable',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
