import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

async function Images() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })
  return (
    <SignedIn>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} />
            <h1>{image.name}</h1>
          </div>
        ))}
      </div>
    </SignedIn>
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
      <Images />
    </main>
  );
}
