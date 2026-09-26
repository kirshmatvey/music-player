import { NavLink } from "react-router"
import s from "@/widgets/sidebar/ui/Sidebar.module.css"

type Props = {
  navItems: Array<{to: string, label: string}>
}

export const NavigationItems = ({ navItems }: Props) => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink className={({ isActive }) => `link ${isActive ? s.activeLink : ""}`} to={item.to}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
    )
}