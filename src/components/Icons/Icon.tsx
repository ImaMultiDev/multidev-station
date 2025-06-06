import AndroidIcon from "./AndroidIcon";
import ApiIcon from "./ApiIcon";
import GameIcon from "./GameIcon";
import IosIcon from "./IosIcon";
import MobileIcon from "./MobileIcon";
import OtherIcon from "./OtherIcon";
import WebIcon from "./WebIcon";
import ExpandIcon from "./ExpandIcon";
import LightningIcon from "./LightningIcon";
import ShieldIcon from "./ShieldIcon";
import HeartIcon from "./HeartIcon";

interface IconProps {
  name: string;
  className?: string;
}

const iconMap = {
  web: WebIcon,
  api: ApiIcon,
  mobile: MobileIcon,
  android: AndroidIcon,
  ios: IosIcon,
  game: GameIcon,
  other: OtherIcon,
  expand: ExpandIcon,
  lightning: LightningIcon,
  shield: ShieldIcon,
  heart: HeartIcon,
} as const;

type IconName = keyof typeof iconMap;

export function Icon({ name, className = "w-8 h-8" }: IconProps) {
  const IconComponent = iconMap[name as IconName];

  if (!IconComponent) {
    return <OtherIcon className={className} />;
  }

  return <IconComponent className={className} />;
}
