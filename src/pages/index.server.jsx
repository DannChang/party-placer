import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
  Image,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import Button from '../components/Button.client';

import Layout from '../components/Layout.server';
// import FeaturedCollection from '../components/FeaturedCollection';
import ProductCard from '../components/ProductCard';
import Welcome from '../components/Welcome.server';

export default function Index({country = {isoCode: 'US'}}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <Layout>
      <div className="relative mb-12">
        <Welcome />
        <div className="bg-gradient-to-b from-cyan-800 p-12 shadow-xl rounded-xl mb-10">
          {featuredProductsCollection ? (
            <>
              <div className="flex justify-between items-center mb-8 text-md font-medium">
                <span className="font-syncopate font-bold text-2xl md:text-4xl text-white uppercase">
                  {/* {featuredProductsCollection.title} */}
                  Featured Rentals
                </span>

                <Button
                  className="hidden md:inline-flex font-bai bg-fuchsia-400 hover:bg-fuchsia-500 active:bg-fuchsia-700 text-white font-semibold w-1/2 mx-auto md:w-96 mt-4 rounded-lg"
                  url="/collections/frontpage"
                  label="View All"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ">
                {featuredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <Button
                className="md:hidden font-bai font-semibold text-center bg-fuchsia-400 hover:bg-fuchsia-500 active:bg-fuchsia-700 rounded-lg"
                url="/collections/frontpage"
                label="View All"
              />
            </>
          ) : null}
        </div>
        {/* <FeaturedCollection collection={featuredCollection} /> */}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 2
    $numProducts: Int = 3
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
  }

  ${ProductProviderFragment}
  ${Image.Fragment}
`;
