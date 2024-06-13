import '@/styles/index.scss';

import { Roboto } from 'next/font/google';
import { Lato } from 'next/font/google';

import type { Metadata } from "next";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ReactQueryProvider from "@/app/providers/react-query";

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lato',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});



export const metadata: Metadata = {
    title: "Интернет Магазин",
    description: "Проект 1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${lato.variable} ${roboto.variable}`}>
            <body className="wrapper">
                <ReactQueryProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}