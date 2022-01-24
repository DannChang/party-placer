import Header from '../../components/Header.client';
import gql from 'graphql-tag';
import {
  Image,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
} from '@shopify/hydrogen';

export default function AboutUs({page}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numCollections: 3,
    },
    cache: {
      maxAge: 60,
      staleWhileRevalidate: 60 * 10,
    },
  });

  const collections = data ? flattenConnection(data.collections) : null;
  // const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <div>
      <LocalizationProvider>
        <Header collections={collections} storeName={storeName} />
        About us!
      </LocalizationProvider>
    </div>
  );
}

const QUERY = gql`
  query indexContent($numCollections: Int!) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
        }
      }
    }
    products(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
  ${Image.Fragment}
`;
