'use client';

import { StyledMainNavList, StyledNavList, StyledNavListItem } from '@/style/NavList';
import React from 'react';
import MainNavLink from './MainNavLink';

const MainNavBar = () => {
  return (
    <nav>
      {/*//! todo: crear navlist para este navbar*/}
      <StyledMainNavList>
        <StyledNavListItem $title>
          <MainNavLink href='/' prefetch={undefined}>
            family Blog
          </MainNavLink>
        </StyledNavListItem>

        <StyledNavListItem style={{ marginLeft: 'auto' }}>
          <MainNavLink href='/navigate/trips' prefetch={undefined}>
            Trips
          </MainNavLink>
        </StyledNavListItem>

        <StyledNavListItem>
          <MainNavLink href='/navigate/about' prefetch={false}>
            About
          </MainNavLink>
        </StyledNavListItem>

        <StyledNavListItem>
          <MainNavLink href='/navigate/addTrip' prefetch={false}>
            Add Trip
          </MainNavLink>
        </StyledNavListItem>
      </StyledMainNavList>
    </nav>
  );
};

export default MainNavBar;
