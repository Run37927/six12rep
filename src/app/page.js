import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <MaxWidthWrapper className="mb-12 mt-8">
    </MaxWidthWrapper>
  );
}
