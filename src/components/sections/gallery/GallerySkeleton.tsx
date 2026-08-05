import { Container } from "@/components/ui";

interface GallerySkeletonProps {
  count?: number;
}

export function GallerySkeleton({ count = 8 }: GallerySkeletonProps) {
  return (
    <Container className="mb-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 animate-pulse shadow-lg"
          >
            <div className="aspect-[4/3] w-full bg-slate-800 rounded-xl mb-4" />
            <div className="h-4 bg-slate-800 rounded w-1/3 mb-2" />
            <div className="h-5 bg-slate-800 rounded w-3/4 mb-2" />
            <div className="h-3 bg-slate-800 rounded w-1/2" />
          </div>
        ))}
      </div>
    </Container>
  );
}
