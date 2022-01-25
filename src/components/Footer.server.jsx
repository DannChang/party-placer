/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer role="contentinfo" className="font-bai">
      <div className="relative bg-indigo-100 border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Github</h2>
            <ul className="mt-8 space-y-4">
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="https://github.com/dannchang/party-placer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="fill-current text-gray-600 mr-3"
                    width="26"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1319 0.000976562C4.60874 0.000976562 0.135254 4.58917 0.135254 10.2539C0.135254 14.7908 2.99679 18.6229 6.97045 19.9814C7.47028 20.0711 7.65772 19.7635 7.65772 19.4944C7.65772 19.2509 7.64522 18.4434 7.64522 17.5848C5.13357 18.059 4.48379 16.9568 4.28385 16.38C4.17139 16.0853 3.68406 15.1753 3.2592 14.9318C2.90932 14.7396 2.40949 14.2654 3.2467 14.2526C4.03394 14.2397 4.59625 14.9959 4.78369 15.3035C5.68338 16.8542 7.1204 16.4185 7.6952 16.1494C7.78267 15.4829 8.04508 15.0343 8.33249 14.778C6.10824 14.5217 3.78402 13.6374 3.78402 9.71564C3.78402 8.60063 4.17139 7.67786 4.80868 6.96016C4.70871 6.70383 4.35883 5.65291 4.90864 4.24313C4.90864 4.24313 5.74586 3.97399 7.65772 5.29406C8.45745 5.06336 9.30716 4.94802 10.1569 4.94802C11.0066 4.94802 11.8563 5.06336 12.656 5.29406C14.5679 3.96117 15.4051 4.24313 15.4051 4.24313C15.9549 5.65291 15.605 6.70383 15.5051 6.96016C16.1424 7.67786 16.5297 8.58781 16.5297 9.71564C16.5297 13.6502 14.193 14.5217 11.9688 14.778C12.3311 15.0984 12.6435 15.7136 12.6435 16.6748C12.6435 18.0461 12.631 19.1483 12.631 19.4944C12.631 19.7635 12.8185 20.0839 13.3183 19.9814C15.3028 19.2943 17.0273 17.9861 18.2489 16.2411C19.4706 14.4962 20.128 12.4022 20.1285 10.2539C20.1285 4.58917 15.655 0.000976562 10.1319 0.000976562Z"
                    />
                  </svg>
                  Repository
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-md font-medium uppercase mb-4">LinkedIn</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="https://www.linkedin.com/in/dannchang/">
                  Connect Here
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Twitter</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="https://twitter.com/TheDanChang">@TheDanChang</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="py-6 px-4 md:px-8 bg-gray-50">
        <p className="text-gray-600">Made with ❤️ by Daniel Chang 2022 </p>
      </div> */}
    </footer>
  );
}
