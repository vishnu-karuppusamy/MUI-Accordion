'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import SideNav, { SIDE_NAV_ITEMS } from './SideNav';
import { BreadcrumbContainer, BreadcrumbText, ContentContainer, HeaderContainer, HeaderRightContainer, HeaderRightIconContainer, LoggedInLayoutContainer, MainContentContainer, NotificationIcon } from './styles';
import { BellIcon } from '../../../assets/icons';
import GalleryIcon from '../../../assets/images/gallery.png';
import Image from 'next/image';

export type LoggedInLayoutType = {
  breadcrumb?: string[]
  setBreadcrumb?: (breadcrumb: string[]) => void
}
export const LoggedInLayoutContext = createContext<LoggedInLayoutType>({})

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  const [selectedNavId, setSelectedNavId] = useState(5);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const selectedNavItemDetails = useMemo(() => SIDE_NAV_ITEMS.find((item) => item.id === selectedNavId), [selectedNavId]);

  return (
    <LoggedInLayoutContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      <LoggedInLayoutContainer>
        <SideNav selectedNav={selectedNavId} setSelectedNav={setSelectedNavId} />
        <ContentContainer>
          <HeaderContainer>
            <BreadcrumbContainer>
              {selectedNavItemDetails?.id !== 7 && selectedNavItemDetails?.id !== 9 && selectedNavItemDetails?.icon}
              <BreadcrumbText>{`${selectedNavItemDetails?.label} ${breadcrumb.length ? `/ ${breadcrumb.join(' / ')}` : ''}`}</BreadcrumbText>
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
    </LoggedInLayoutContext.Provider>
  );
};

export default LoggedInLayout;

export const useLoggedInLayout = () => useContext(LoggedInLayoutContext)
