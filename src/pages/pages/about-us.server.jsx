export default function AboutUs({page}) {
  const logData = () => {
    console.log(page);
  };
  return <div>About us!{logData()}</div>;
}
