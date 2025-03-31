"use client"
import { usePathname } from 'next/navigation';
import Header from "./index"

export default function HeaderController() {
  const pathname = usePathname();
  const hideHeader = ['/login', '/cadastro'].includes(pathname);
  
  return !hideHeader ? <Header /> : null;
}