import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-2 mx-10  hover:rounded-lg hover:bg-indigo-500 hover:opacity-80 hover:text-slate-100 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
