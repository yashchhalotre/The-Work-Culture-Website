function IconBase({ children, className = '' }) {
  return (
    <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export function WifiIcon() {
  return <IconBase><path d="M4 9.5C8.8 5.8 15.2 5.8 20 9.5"/><path d="M7.5 13c2.7-2.1 6.3-2.1 9 0"/><path d="M10.5 16.3c.9-.7 2.1-.7 3 0"/><path d="M12 20h.01"/></IconBase>;
}

export function CoffeeIcon() {
  return <IconBase><path d="M6 8h10v5a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V8Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 4v1.2"/><path d="M12 4v1.2"/><path d="M16 4v1.2"/></IconBase>;
}

export function UsersIcon() {
  return <IconBase><path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19"/><path d="M10 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M20 19v-1a3 3 0 0 0-2.2-2.9"/><path d="M16.5 4.8a3 3 0 0 1 0 5.4"/></IconBase>;
}

export function PrinterIcon() {
  return <IconBase><path d="M7 8V4h10v4"/><path d="M7 18H5a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v6H7v-6Z"/><path d="M17 12h.01"/></IconBase>;
}

export function MicIcon() {
  return <IconBase><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z"/><path d="M19 10.5a7 7 0 0 1-14 0"/><path d="M12 17.5V21"/><path d="M8.5 21h7"/></IconBase>;
}

export function ClockIcon() {
  return <IconBase><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 7v5l3 2"/></IconBase>;
}

export function SunIcon() {
  return <IconBase><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></IconBase>;
}

export function MoonIcon() {
  return <IconBase><path d="M21 14.2A8.2 8.2 0 0 1 9.8 3a7 7 0 1 0 11.2 11.2Z"/></IconBase>;
}
export function PlusIcon() {
  return <IconBase><path d="M12 5v14"/><path d="M5 12h14"/></IconBase>;
}

export function MinusIcon() {
  return <IconBase><path d="M5 12h14"/></IconBase>;
}

