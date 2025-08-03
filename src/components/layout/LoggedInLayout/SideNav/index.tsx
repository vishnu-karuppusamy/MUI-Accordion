import React, { useState } from 'react';
import {
  Box
} from '@mui/material';
import { NavContainer, LogoContainer, NavOption, SideNavContainer, NavTopContainer, NavBottomContainer, AvatarContainer } from './styles';
import { CustomersIcon, DashboardIcon, OrdersIcon, PackagesIcon, SettingsIcon, ShipmentsIcon, SignoutIcon, WalletIcon, WarehouseIcon } from '../../../../assets/icons';
import Image from 'next/image';
import LogoShort from '../../../../assets/images/shipitbest-logo-short.png';
import Home2 from '../../../../assets/images/home2.png';
import Support from '../../../../assets/images/support.png';
import Avatar from '../../../../assets/images/avatar.png';

export const SIDE_NAV_ITEMS = [
  {
    id: 1,
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    id: 2,
    icon: <CustomersIcon />,
    label: 'Customers',
  },
  {
    id: 3,
    icon: <OrdersIcon />,
    label: 'Orders',
  },
  {
    id: 4,
    icon: <PackagesIcon />,
    label: 'Packages',
  },
  {
    id: 5,
    icon: <ShipmentsIcon />,
    label: 'Shipments',
  },
  {
    id: 6,
    icon: <WarehouseIcon />,
    label: 'Warehouse Management',
  },
  {
    id: 7,
    icon: <Image src={Home2} alt="ShipItBest Logo" width={24} height={24} />,
    label: 'Staff Management',
  },
  {
    id: 8,
    icon: <WalletIcon />,
    label: 'Wallet Request',
  },
  {
    id: 9,
    icon: <Image src={Support} alt="ShipItBest Logo" width={24} height={24} />,
    label: 'Customer Support',
  },
];

interface SideNavProps {
  selectedNav: number;
  setSelectedNav: (nav: number) => void;
}

const SideNav = ({ selectedNav, setSelectedNav }: SideNavProps) => {
  return (
    <SideNavContainer>
      <LogoContainer>
        <Image src={LogoShort} alt="ShipItBest Logo" width={37} height={31} />
      </LogoContainer>

      <NavContainer>
        <NavTopContainer>
          {SIDE_NAV_ITEMS.map((item) => (
            <NavOption key={item.id} active={selectedNav === item.id} onClick={() => setSelectedNav(item.id)}>
              {item.icon}
            </NavOption>
          ))}
        </NavTopContainer>

        <NavBottomContainer>
          <NavOption>
            <AvatarContainer>
              <Image src={Avatar} alt="User Avatar" width={24} height={24} />
            </AvatarContainer>
          </NavOption>
          <NavOption>
            <SettingsIcon />
          </NavOption>
          <NavOption>
            <SignoutIcon />
          </NavOption>
        </NavBottomContainer>
      </NavContainer>

    </SideNavContainer>
  );
};

export default SideNav;
