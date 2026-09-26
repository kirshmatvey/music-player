import { Path } from "@/shared/variables/constants.ts"
import s from "./Sidebar.module.css"
import { NavigationItems } from "@/widgets/sidebar/ui/navigationItems/NavigationItems.tsx"
import AddCircleOutlined from '@/widgets/sidebar/assets/icons/AddCircleOutlined.svg'
import FileUploadOutlined from '@/widgets/sidebar/assets/icons/FileUploadOutlined.svg'

const navItems1 = [
  { to: Path.Main, label: "Home" },
  { to: Path.Profile, label: "Your Library" },
]

const navItems2 = [
  { to: Path.Tracks, label: "Tracks" },
  { to: Path.Playlists, label: "Playlists" },
]

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav>
        <ul className={s.list}>
          <NavigationItems navItems={navItems1} />
        </ul>
      </nav>
      <hr/>
      <div>
        <img src={AddCircleOutlined} alt="add-circle" />
        Create Playlist
      </div>
      <div>
        <img src={FileUploadOutlined} alt="upload-file" />
        Upload Track
      </div>
      <hr/>
      <nav>
        <ul className={s.list}>
          <NavigationItems navItems={navItems2} />
        </ul>
      </nav>
    </aside>
  )
}
