import React from "react";

/* Inline stroke icons (Lucide-style, 2px) — substitution per the design
   system's ICONOGRAPHY notes; swap for the official set if one exists. */
const I = (p) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p} />
);

export const IconShield = () => <I><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" /></I>;
export const IconServer = () => <I><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></I>;
export const IconCloud = () => <I><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.7 1.5A3.5 3.5 0 0 0 6 18z" /></I>;
export const IconHeadset = () => <I><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><rect x="2" y="14" width="4" height="6" rx="1.5" /><rect x="18" y="14" width="4" height="6" rx="1.5" /><path d="M20 20a3 3 0 0 1-3 3h-3" /></I>;
export const IconLock = () => <I><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></I>;
export const IconActivity = () => <I><path d="M3 12h4l3 8 4-16 3 8h4" /></I>;
export const IconCheck = () => <I><path d="M20 6L9 17l-5-5" /></I>;
export const IconPhone = () => <I><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></I>;
export const IconArrow = () => <I><path d="M5 12h14M13 6l6 6-6 6" /></I>;
export const IconMenu = () => <I><path d="M4 7h16M4 12h16M4 17h16" /></I>;
export const IconX = () => <I><path d="M18 6L6 18M6 6l12 12" /></I>;
export const IconFile = () => <I><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></I>;
export const IconGlobe = () => <I><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></I>;
export const IconZap = () => <I><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></I>;
export const IconMessage = () => <I><path d="M4 5h16v11H8l-4 4V5z" /></I>;
export const IconSend = () => <I><path d="M4 4l16 8-16 8 4-8-4-8z" /></I>;
export const IconChevronDown = () => <I><path d="M6 9l6 6 6-6" /></I>;
