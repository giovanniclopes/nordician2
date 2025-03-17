import {
  ArrowUp,
  Book,
  Books,
  CaretUp,
  Compass,
  DiscordLogo,
  EnvelopeSimple,
  GameController,
  Globe,
  House,
  InstagramLogo,
  List,
  MapPin,
  TwitterLogo,
  X,
} from "phosphor-react";

// Define a consistent icon style for the project
export interface IconProps {
  size?: number | string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}

const defaultProps = {
  size: 24,
  weight: "regular" as const,
  className: "text-red-400",
};

// Centralized icon components with consistent styling
export const HomeIcon = (props: IconProps) => (
  <House {...defaultProps} {...props} />
);

export const BookIcon = (props: IconProps) => (
  <Book {...defaultProps} {...props} />
);

export const BooksIcon = (props: IconProps) => (
  <Books {...defaultProps} {...props} />
);

export const GameIcon = (props: IconProps) => (
  <GameController {...defaultProps} {...props} />
);

export const GlobeIcon = (props: IconProps) => (
  <Globe {...defaultProps} {...props} />
);

export const CompassIcon = (props: IconProps) => (
  <Compass {...defaultProps} {...props} />
);

export const MenuIcon = (props: IconProps) => (
  <List {...defaultProps} {...props} />
);

export const CloseIcon = (props: IconProps) => (
  <X {...defaultProps} {...props} />
);

export const ScrollUpIcon = (props: IconProps) => (
  <ArrowUp {...defaultProps} {...props} />
);

export const CaretUpIcon = (props: IconProps) => (
  <CaretUp {...defaultProps} {...props} />
);

export const EmailIcon = (props: IconProps) => (
  <EnvelopeSimple {...defaultProps} {...props} />
);

export const LocationIcon = (props: IconProps) => (
  <MapPin {...defaultProps} {...props} />
);

export const DiscordIcon = (props: IconProps) => (
  <DiscordLogo {...defaultProps} {...props} />
);

export const TwitterIcon = (props: IconProps) => (
  <TwitterLogo {...defaultProps} {...props} />
);

export const InstagramIcon = (props: IconProps) => (
  <InstagramLogo {...defaultProps} {...props} />
);
