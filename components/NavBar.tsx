'use client';

import { Button, ShareButton } from '@/style/Button';
import React from 'react';
import NavLink from './NavLink';
import { StyledNavList, StyledNavListItem } from '@/style/NavList';

const NavBar = () => {
  return (
    <nav>
      <StyledNavList>
        <StyledNavListItem $title>
          <NavLink href='/' prefetch={undefined}>
            family Blog
          </NavLink>
        </StyledNavListItem>

        <StyledNavListItem style={{ marginLeft: 'auto' }}>
          <NavLink href='/trips' prefetch={undefined}>
            Trips
          </NavLink>
        </StyledNavListItem>

        <StyledNavListItem>
          <NavLink href='/about' prefetch={false}>
            About
          </NavLink>
        </StyledNavListItem>

        <StyledNavListItem>
          <NavLink href='/addTrip' prefetch={false}>
            Add Trip
          </NavLink>
        </StyledNavListItem>
      </StyledNavList>
    </nav>
  );
};

export default NavBar;
