import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui";
import type { GalleryItem } from "@/types/gallery";
import { GalleryCard } from "./GalleryCard";

interface GalleryGridProps {
  items: GalleryItem[];
  onSelectImage: (item: GalleryItem) => void;
}

export function GalleryGrid({ items, onSelectImage }: GalleryGridProps) {
  return (
    <Container className="mb-16 relative z-10">
      <motion.div
        id="gallery-grid"
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <GalleryCard item={item} onExpand={onSelectImage} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
}
