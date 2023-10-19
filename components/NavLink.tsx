import { LinkStyled } from '@/style/Link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import { useRouter } from 'next/router';
import React, { CSSProperties, useState } from 'react';

interface Props {
  href: string;
  children?: string;
  prefetch: any;
}

const NavLink: React.FC<Props> = ({ href, children, prefetch }) => {
  const pathname = usePathname();
  //const { asPath } = useRouter();

  if (pathname === href) {
    return (
      <LinkStyled $using href={href}>
        {children}
      </LinkStyled>
    );
  }

  if (href === '/addTrip') {
    return (
      <LinkStyled style={{ color: '#198754', textDecoration: 'none' }} $using $title href={href}>
        {children}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href={href} prefetch={prefetch}>
      <span>{children}</span>
    </LinkStyled>
  );
};

export default NavLink;
