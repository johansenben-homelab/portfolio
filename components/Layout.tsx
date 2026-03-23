import Navbar, { pages, navbarClassName } from "./Navbar";

export default function Layout({ children, currentPage, className }: { children?: React.ReactNode, currentPage: pages, className?: { navbar?: navbarClassName} }) {
  return (
    <div className="py-8 lg:w-250 flex flex-col mx-auto px-8">
      {/* <Navbar currentPage={currentPage} className={className?.navbar} /> */}
      {children}
    </div>
  );
}