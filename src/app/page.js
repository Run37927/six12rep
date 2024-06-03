import Banner from "@/components/Banner";
import DemoVideo from "@/components/DemoVideo";
import Gallery from "@/components/Gallery";
import Introduction from "@/components/Introduction";

export default async function Home() {

  return (
    <>
      <Banner />
      <Introduction />
      <DemoVideo />
      <div className="h-16 bg-white" />
      <div className="py-6 bg-[#EEE] text-[#FF6600] text-center text-[1.9rem]">
        <h3>Like us so far?</h3>
        <h3>Check out our work</h3>
      </div>
      <Gallery />
    </>
  );
}
