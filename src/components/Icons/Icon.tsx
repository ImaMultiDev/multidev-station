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
import RedirectIcon from "./RedirectIcon";
import ArrowUpBox from "./ArrowUpBox";
import CssIcon from "./CssIcon";
import FlutterIcon from "./FlutterIcon";
import HtmlIcon from "./HtmlIcon";
import InstagramIcon from "./InstagramIcon";
import JavaScriptIcon from "./JavaScriptIcon";
import KotlinIcon from "./KotlinIcon";
import LinkedinIcon from "./LinkedinIcon";
import MongoDBIcon from "./MongoDBIcon";
import NextJsIcon from "./NextjsIcon";
import PhpIcon from "./PhpIcon";
import PostgreSqlIcon from "./PostgreSqlIcon";
import ReactIcon from "./ReactIcon";
import SwiftIcon from "./SwiftIcon";
import TailwindCssIcon from "./TailwindCssIcon";
import TypeScriptIcon from "./TypeScriptIcon";
import VersusIcon from "./VersusIcon";
import VueJsIcon from "./VueJsIcon";
import YoutubeIcon from "./YoutubeIcon";
import PortfolioIcon from "./PortfolioIcon";

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
  redirectIcon: RedirectIcon,
  arrowUpBox: ArrowUpBox,
  cssIcon: CssIcon,
  flutterIcon: FlutterIcon,
  htmlIcon: HtmlIcon,
  instagramIcon: InstagramIcon,
  javascriptIcon: JavaScriptIcon,
  kotlinIcon: KotlinIcon,
  linkedinIcon: LinkedinIcon,
  mongoDBIcon: MongoDBIcon,
  nextJsIcon: NextJsIcon,
  phpIcon: PhpIcon,
  postgreSqlIcon: PostgreSqlIcon,
  reactIcon: ReactIcon,
  swiftIcon: SwiftIcon,
  twIcon: TailwindCssIcon,
  tsIcon: TypeScriptIcon,
  versusIcon: VersusIcon,
  vuejsIcon: VueJsIcon,
  youtubeIcon: YoutubeIcon,
  portfolioIcon: PortfolioIcon,
} as const;

type IconName = keyof typeof iconMap;

export function Icon({ name, className = "w-8 h-8" }: IconProps) {
  const IconComponent = iconMap[name as IconName];

  if (!IconComponent) {
    return <OtherIcon className={className} />;
  }

  return <IconComponent className={className} />;
}
