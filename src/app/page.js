import Banner from "@/components/Banner";
import DemoVideo from "@/components/DemoVideo";
import Introduction from "@/components/Introduction";

export default async function Home() {

  return (
    <>
      <Banner />
      <Introduction />
      <DemoVideo />
    </>
  );
}
