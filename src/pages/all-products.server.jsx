import {
  // The `useShopQuery` hook makes server-only GraphQL queries to the Storefront API.
  useShopQuery,
  // The `ProductProviderFragment` queries for all the product data you need for a component.
  ProductProviderFragment,
  // The `flattenConnection` utility takes Shopify storefront relay data
  // and transforms it into a flat array of objects.
  flattenConnection,
} from '@shopify/hydrogen';
// Import the `Layout` component that defines the structure of the page.
import Layout from '../components/Layout.server';
// Import the `ProductList` component that defines the products to display.
import ProductList from '../components/ProductList';
// Import `gql` to parse GraphQL queries.
import gql from 'graphql-tag';
// Fetch product data from your storefront by passing in a GraphQL query to the
// `useShopQuery` server component.
export default function Allproducts() {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numProductMetafields: 0,
      includeReferenceMetafieldDetails: false,
      numProductVariants: 250,
      numProductMedia: 10,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
      numProductSellingPlanGroups: 10,
      numProductSellingPlans: 10,
    },
  });

  // Transform Shopify storefront relay data into
  // a flat array of objects.
  const products = flattenConnection(data.products);
  // Return a list of products.
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

// Define the GraphQL query.
const QUERY = gql`
  query HomeQuery(
    $numProductMetafields: Int!
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
  ) {
    products(first: 10) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }
  ${ProductProviderFragment}
`;
