import NavLink from "@/components/elements/buttons/NavLink";
import Dropdown from "@/components/ui/Dropdown";
import Modal from "@/components/ui/Modal";
import ButtonSettings from "@/components/ui/buttons/ButtonSettings";
import { Link } from "react-router-dom";
import Volume from "../settings/_partials/Volume";
import Button from "@/components/ui/buttons/Button";
import useSettingsStore from "@/stores/useSettingsStore";
import Settings from "../settings/Settings";
import LogoSVG from "@/components/elements/svg/LogoSVG";

const navItems = [
  { name: "Chords", url: "/chords" },
  { name: "Scales", url: "/scales" },
  { name: "Circle", url: "/circle" },
];

const Header = () => {
  const {volume, prevVolume, setVolume} = useSettingsStore();

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(prevVolume)
    } else {
      setVolume(0)
    }
  }

  const getVolumeIcon = (volume: number) => {
    if (volume >= 0.5) {
      return "volume-hi";
    } else if (volume > 0) {
      return "volume-lo";
    } else {
      return "volume-mute";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-600 border-b border-neutral-400">
      <nav className="container flex flex-wrap items-center justify-between gap-4">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 mr-6 text-white cursor-pointer select-none">
            <LogoSVG width={40} height={34}/>
            <div className="mt-1 ml-2 text-xl">Chords <span className="font-bold">Lab</span></div>
          </div>
        </Link>
        {/* <Hamburger /> */}
        <div className="justify-end flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <ul className="flex items-center justify-end space-x-8 text-sm">
            {navItems.map(({ name, url }, i) => {
              return (
                <NavLink key={name + i} href={url}>
                  {name}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <Dropdown trigger={<Button icon={volume === 0 ? "volume-mute" : "volume"} size="sm" variant="ghost" />}>
          <div className="flex flex-row gap-1 py-1 pl-1.5 pr-4">
            <Button onClick={toggleMute} icon={getVolumeIcon(volume)} size="sm" variant="ghost" />
            <Volume />
          </div>
        </Dropdown>
        <Modal trigger={<ButtonSettings />}>
          <Settings />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
