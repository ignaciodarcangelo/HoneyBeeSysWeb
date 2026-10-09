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
/* Brand glyphs — filled, unlike the stroke set above. */
export const IconLinkedIn = () => <I fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></I>;
export const IconFacebook = () => <I fill="currentColor" stroke="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></I>;
export const IconStar =() => <I fill="currentColor" stroke="none"><path d="M12 2.5l2.95 6.26 6.9.72-5.15 4.72 1.45 6.8L12 17.77l-6.15 3.23 1.45-6.8-5.15-4.72 6.9-.72L12 2.5z" /></I>;
