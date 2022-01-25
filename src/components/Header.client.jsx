import {useState} from 'react';
import {Link, Image} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="font-bai h-20 lg:h-32 " role="banner">
      <div
        className={`fixed z-20 h-20 lg:h-32 w-full  px-6 mx-auto bg-indigo-200 ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="h-full  flex lg:flex-col place-content-between">
          <div className="h-full text-center w-full flex justify-between items-center">
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link to="/">
              {/* {storeName} */}
              <Image
                // className="h-44"
                src="../pp-logo.png"
                width="150px"
                height="100px"
              />
            </Link>
            <Navigation collections={collections} storeName={storeName} />
            <div className="flex">
              <CurrencySelector />
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
