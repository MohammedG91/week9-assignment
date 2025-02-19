export default async function createpost({ params }) {
  const slug = await params;
  return (
    <>
      <h1>posts here</h1>
      <h3>{slug}</h3>
    </>
  );
}
