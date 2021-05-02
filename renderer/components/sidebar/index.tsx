import { Aside, Logo, Menu } from "./styles";

import {
  Apps,
  FontDownload,
  Gradient,
  Palette,
  PhotoCamera,
  Settings,
} from "@material-ui/icons";

import { useRouter } from "next/router";
import Link from "next/link";

import TrendingIcon from "../../icons/trending-outlined.svg";

const menu = [
  { label: "Trending", path: "/trending", Icon: TrendingIcon },
  { label: "Collections", path: "/collections", Icon: Apps },
  { label: "Gradients", path: "/gradients", Icon: Gradient },
  { label: "Palettes", path: "/palettes", Icon: Palette },
  { label: "Contrast", path: "/contrast", Icon: FontDownload },
  { label: "Import", path: "/import", Icon: PhotoCamera },
  { label: "Settings", path: "/settings", Icon: Settings },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <Aside>
      <Logo src="/images/logo.svg" width={100} />

      <Menu>
        {menu.map(({ label, path, Icon }) => (
          <Link key={label} href={path}>
            <Menu.Item active={router.pathname.startsWith(path)}>
              <Icon />
              <Menu.Label>{label}</Menu.Label>
            </Menu.Item>
          </Link>
        ))}
      </Menu>
    </Aside>
  );
};

export default Sidebar;
