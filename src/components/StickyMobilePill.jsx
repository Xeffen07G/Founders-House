import React, { useState, useEffect } from 'react';

const APPLY_LINK = '#apply';
const GOOGLE_CALENDAR_LINK = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Founders%27%20House%20%7C%20Kolkata%20Hackathon&dates=20261218T033000Z/20261220T123000Z&details=Kolkata%27s%20most%20relentless%2072%20hour%20startup%20sprint%20at%20AIC%20Techno%20(Offbeat%20CCU).%20Build%20real%20products%2C%20pitch%20to%20venture%20syndicates.&location=AIC%20Techno%2C%20Offbeat%20CCU%2C%2036F%20Topsia%20Road%2C%20Kolkata%20700039";

export const StickyMobilePill = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal once user scrolls past the main hero title (~320px)
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 max-w-sm mx-auto md:hidden transition-all duration-300 ease-out ${
        visible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between gap-2 p-1.5 bg-[#1C0509]/95 backdrop-blur-xl border-2 border-black rounded-full shadow-[5px_5px_0px_#000]">
        <a
          href={APPLY_LINK}
          onClick={(e) => {
            if (APPLY_LINK.startsWith('#')) {
              e.preventDefault();
              const el = document.getElementById(APPLY_LINK.substring(1));
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
          }}
          {...(!APPLY_LINK.startsWith('#') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-poppins font-extrabold text-xs py-2.5 px-3 rounded-full border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all text-center select-none"
        >
          <span>REGISTER NOW</span>
          <span className="text-[10px] bg-black text-[#FFC800] px-1.5 py-0.5 rounded-full font-mono font-bold">
            ₹0
          </span>
        </a>

        <a
          href={GOOGLE_CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#FFC800] hover:bg-[#FFE600] text-black font-mono font-bold text-[11px] py-2.5 px-3 rounded-full border border-black shadow-[2px_2px_0px_#000] active:scale-95 transition-all whitespace-nowrap"
          title="Save 18-20 Dec 2026 to Google Calendar"
        >
          <span>📅</span>
          <span>CALENDAR</span>
        </a>
      </div>
    </div>
  );
};
