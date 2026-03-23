import "@/app/globals.css"
export type pages = "Home" | "About Me" | "Projects" | "Resume"

function NavLink({ currentPage, route, name, newTab }: {currentPage: pages, route: string, name: pages, newTab?: boolean}) {
  return (
    <li className={currentPage == name ? "font-bold" : ""}><a href={route} target={newTab ? "_blank" : ''}>{name}</a></li>
  );
}
export type navbarClassName = { main?: string };
export default function Navbar({ currentPage, className }: { currentPage: pages, className?: navbarClassName }) {
  return (
    <div className={"w-full bg-color1 flex justify-between items-center " + className?.main}>
      <div className="px-8 py-4">
        <h1 className="text-3xl">Ben Johansen</h1>
        <h2>Portfolio</h2>
      </div>
      <ul className="flex gap-4 items-center px-16 text-xl">
        <NavLink currentPage={currentPage} route="/" name="Home" />
        <NavLink currentPage={currentPage} route="/about-me" name="About Me" />
        <NavLink currentPage={currentPage} route="/projects" name="Projects" />
        <NavLink currentPage={currentPage} route="/resume" name="Resume" newTab />
      </ul>
    </div>
  );
}