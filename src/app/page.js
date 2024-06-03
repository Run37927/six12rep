import Banner from "@/components/Banner";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <Banner />
    </>
  );
}
