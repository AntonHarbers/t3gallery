import Image from "next/image";


const mockUrls = [
  "https://utfs.io/f/217ab541-a2be-4420-9586-15d3d2a461d9-3fo4bj.jpg",
  "https://utfs.io/f/a569186d-36eb-43e2-a676-045941d94228-8d9h8l.png",
  "https://utfs.io/f/7e5dc2ae-6790-4b5c-97db-af940f0d064e-lknl0h.webp",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">

      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
