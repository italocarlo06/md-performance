import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Base>
);
export const Activity = (p: IconProps) => (
  <Base {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></Base>
);
export const ClipboardCheck = (p: IconProps) => (
  <Base {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Base>
);
export const Users = (p: IconProps) => (
  <Base {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Base>
);
export const Calendar = (p: IconProps) => (
  <Base {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></Base>
);
export const ArrowUp = (p: IconProps) => (
  <Base {...p}><path d="M12 2v20" /><path d="m17 7-5-5-5 5" /></Base>
);
export const RotateCcw = (p: IconProps) => (
  <Base {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></Base>
);
export const Dumbbell = (p: IconProps) => (
  <Base {...p}><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></Base>
);
export const Flame = (p: IconProps) => (
  <Base {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></Base>
);
export const Heart = (p: IconProps) => (
  <Base {...p}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></Base>
);
export const Check = (p: IconProps) => (
  <Base strokeWidth={2.25} {...p}><path d="M20 6 9 17l-5-5" /></Base>
);
export const MapPin = (p: IconProps) => (
  <Base {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Base>
);
export const Clock = (p: IconProps) => (
  <Base {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></Base>
);
export const Phone = (p: IconProps) => (
  <Base {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></Base>
);
export const ExternalLink = (p: IconProps) => (
  <Base {...p}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></Base>
);
export const Plus = (p: IconProps) => (
  <Base {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Base>
);
export const MessageCircle = (p: IconProps) => (
  <Base {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></Base>
);
export const Instagram = (p: IconProps) => (
  <Base {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></Base>
);
export const Youtube = (p: IconProps) => (
  <Base {...p}><path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></Base>
);
export const Menu = (p: IconProps) => (
  <Base {...p}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></Base>
);
export const X = (p: IconProps) => (
  <Base {...p}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Base>
);
export const QuoteMark = ({ size = 32, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M9.5 6C6.5 6 4 8.5 4 11.5V18h6v-6H6.5c0-1.9 1.4-3.5 3-3.5V6Zm10 0c-3 0-5.5 2.5-5.5 5.5V18h6v-6h-3.5c0-1.9 1.4-3.5 3-3.5V6Z" />
  </svg>
);
