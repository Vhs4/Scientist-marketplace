'use client'
import { useEffect } from 'react';

type SmoothScrollLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const SmoothScrollLink = ({ to, children, className }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = to.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll-link');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', handleClick as any);
    });

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', handleClick as any);
      });
    };
  }, []);

  return (
    <a
      href={to}
      className={`smooth-scroll-link ${className}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
