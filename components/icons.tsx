type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  factory: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ffffff"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M240,208H224V136c0-.05,0-.09,0-.14s0-.29,0-.43,0-.28,0-.41a.76.76,0,0,0,0-.15l-15-105.13A16.08,16.08,0,0,0,193.06,16H174.94A16.08,16.08,0,0,0,159.1,29.74l-11.56,80.91L108.8,81.6A8,8,0,0,0,96,88v32L44.8,81.6A8,8,0,0,0,32,88V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM108,184H80a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm68,0H148a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-5.33-56-8.53-6.4L174.94,32h18.12l13.72,96Z"></path>
    </svg>
  ),
};
