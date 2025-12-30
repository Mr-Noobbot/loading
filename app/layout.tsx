"use client";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Rootlayout({
  children,
}:{
children: React.ReactNode;
}){

return (<html lang="en">
<body className="bg-white text-gray-900 overflow-x-hidden">
  <Navbar />
  <main >
    {children}
  </main>
</body>
</html>
);
}
