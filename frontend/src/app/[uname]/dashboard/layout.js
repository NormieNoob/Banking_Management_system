"use client";

import { useParams } from 'next/navigation';
import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
      </header>
      <Navbar />
      {children}
    </>
  );
}
