
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
const MainHeader = ({href, children}) => {

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
           <Image src={logoImg.src} alt="A plate with food on it" priority height={80} width={80}/> 
          {/* sadece sayfa yüklendiğinde yüklenir*/}
          {/* Nextjs de image src nin altında bir object olarak depolanır*/}
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
             <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
