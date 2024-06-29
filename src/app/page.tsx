import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic'

async function Images() {

  const images = await getMyImages()

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">

      {[...images, ...images, ...images, ...images].map((image) => (

        <div key={image.id} className="w-48 h-48 flex flex-col">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} width={192} height={192} alt={image.name} />
            <h1>{image.name}</h1>
          </Link>

        </div>
      ))}
    </div>
  )
}

export default function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>

        <Images />
      </SignedIn>

    </main>
  );
}
