// components/Layout.tsx
'use client'
import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className={'pt-16 md:pt-0'}>{children}</main>
            <Footer/>
        </div>
    );
}