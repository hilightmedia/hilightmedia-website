import { ReactNode } from "react";
import SiteHeader from "./siteHeader";
import Footer from "./footer";


interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
     <div className="flex flex-col h-screen overflow-y-auto overflow-x-hidden w-full">
      <SiteHeader />
      <main className="grow overflow-visible">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout