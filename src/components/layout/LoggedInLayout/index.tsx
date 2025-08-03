'use client';

import React, { useMemo, useState } from 'react';
import SideNav, { SIDE_NAV_ITEMS } from './SideNav';
import { BreadcrumbContainer, BreadcrumbText, ContentContainer, HeaderContainer, HeaderRightContainer, HeaderRightIconContainer, LoggedInLayoutContainer, MainContentContainer, NotificationIcon } from './styles';
import { BellIcon } from '../../../assets/icons';
import GalleryIcon from '../../../assets/images/gallery.png';
import Image from 'next/image';

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  const [selectedNavId, setSelectedNavId] = useState(5);

  const selectedNavItemDetails = useMemo(() => SIDE_NAV_ITEMS.find((item) => item.id === selectedNavId), [selectedNavId]);

  return (
    <LoggedInLayoutContainer>
      <SideNav selectedNav={selectedNavId} setSelectedNav={setSelectedNavId} />
      <ContentContainer>
        <HeaderContainer>
          <BreadcrumbContainer>
            {selectedNavItemDetails?.icon}
            <BreadcrumbText>{selectedNavItemDetails?.label}</BreadcrumbText>
          </BreadcrumbContainer>
          <HeaderRightContainer>
            <HeaderRightIconContainer>
              <BellIcon />
              <NotificationIcon />
            </HeaderRightIconContainer>
            <HeaderRightIconContainer>
              <Image src={GalleryIcon} alt="Gallery" width={24} height={24} />
            </HeaderRightIconContainer>
          </HeaderRightContainer>
        </HeaderContainer>
        <MainContentContainer className='scrollbar'>
          {children}
        </MainContentContainer>
      </ContentContainer>
    </LoggedInLayoutContainer>
  );
};

export default LoggedInLayout;
