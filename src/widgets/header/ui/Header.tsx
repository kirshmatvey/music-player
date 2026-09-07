import { NavLink } from "react-router"
import { Path } from "@/shared/variables/constants.ts"
import s from "./Header.module.css"

const navItems = [
  { to: Path.Main, label: "Main" },
  { to: Path.Playlists, label: "Playlists" },
  { to: Path.Tracks, label: "Tracks" },
  { to: Path.Profile, label: "Profile" },
]

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? s.activeLink : ""}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
