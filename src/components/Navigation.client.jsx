import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center ">
      <ul className="md:flex items-center justify-center ">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="font-syncopate uppercase block px-4 py-2 mx-10 text-md font-semibold hover:rounded-lg hover:text-cyan-400  hover:bg-indigo-500 active:bg-indigo-700  "
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
