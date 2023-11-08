import { LinkMainStyled } from '@/style/Link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import { useRouter } from 'next/router';
import React, { CSSProperties, useState } from 'react';

interface Props {
  href: string;
  children?: string;
  prefetch: any;
}

const MainNavLink: React.FC<Props> = ({ href, children, prefetch }) => {
  const pathname = usePathname();
  //const { asPath } = useRouter();

  if (pathname === href) {
    return (
      <LinkMainStyled $using href={href}>
        {children}
      </LinkMainStyled>
    );
  }

  if (href === 'navigate/addTrip') {
    return (
      <LinkMainStyled style={{ color: '#198754', textDecoration: 'none' }} $using $title href={href}>
        {children}
      </LinkMainStyled>
    );
  }

  return (
    <LinkMainStyled href={href} prefetch={prefetch}>
      <span>{children}</span>
    </LinkMainStyled>
  );
};

export default MainNavLink;
