export default async function ProductId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}