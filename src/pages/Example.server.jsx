export default function Example({response}) {
  response.cache({
    maxAge: 10,
    staleWhileRevalidate: 60,
  });
  return <p>Hello World!</p>;
}
