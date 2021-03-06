import {Image} from '@shopify/hydrogen';
import Button from './Button.client';

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div className="text-gray-900 pt-16 rounded-[40px] md:my-12 px-4 xl:px-12 bg-gradient-to-b from-indigo-800 -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <div className="h-96 bg-indigo-200 flex flex-col justify-center text-center rounded-2xl">
          <h1 className="font-syncopate font-semibold uppercase text-4xl mt-4 mx-4">
            Plan your party in AR
          </h1>
          <p className=" pt-4 mx-4">
            We simplify your party planning experience by giving you the ability
            to view the product in augmented reality before ordering.
          </p>
          <div>
            <Button
              className="font-bai font-semibold w-1/2 mx-auto md:w-96 mt-4 rounded-lg bg-purple-400 hover:bg-purple-500"
              url="/collections/frontpage"
              label="Explore Now"
            />
          </div>
        </div>
        <div>
          <h2 className="font-syncopate uppercase font-bold text-2xl text-white m-8 md:text-4xl md:m-16 md:flex md:justify-center">
            How does it work?
          </h2>
          <div className=" flex  md:ml-1/3 md:justify-center h-96">
            <p className="flex flex-col md:flex-row md:justify-between content-center w-1/2 md:w-2/5 h-80 md:h-2/3  my-24  mr-4 text-slate-100 md:text-xl bg-sky-500  md:ml-16 md:mb-16 p-4 md:pt-8 lg:pt-12  rounded-xl z-10 drop-shadow-2xl overflow-hidden">
              Go to your mobile device and click on a product&apos;s AR button.
              <Image
                className="md:hidden  bg-blue-300 rounded-xl mt-6"
                src="./ar-icon.png"
                width="100"
                height="100"
              ></Image>
              <Image
                className="hidden md:block w-36"
                src="./qr-code.png"
                width="100"
                height="100"
              ></Image>
            </p>
            <Image
              // className="absolute left-48"
              className=" w-48 h-80  z-0 bg-sky-600 rounded-xl drop-shadow-2xl"
              src="https://storage.googleapis.com/partyplacer-models/ar-demo.png"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
