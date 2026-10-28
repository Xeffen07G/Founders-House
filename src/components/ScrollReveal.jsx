import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component (Convergence-style scroll-triggered pop-up)
 * - Triggers smoothly as elements enter viewport during scroll
 * - Stays visible permanently once triggered (never vanishes)
 */
export const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stay visible permanently!
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getInitialTransform = () => {
    if (direction === 'down') return '-translate-y-8';
    if (direction === 'left') return 'translate-x-8';
    if (direction === 'right') return '-translate-x-8';
    return 'translate-y-8';
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '750ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all transform ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${getInitialTransform()} scale-[0.98]`
      } ${className}`}
    >
      {children}
    </div>
  );
};
