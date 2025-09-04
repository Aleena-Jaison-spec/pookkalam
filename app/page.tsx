import { PookkalamHero } from "@/components/pookkalam-hero"
import { FeatureCards } from "@/components/feature-cards"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PookkalamHero />
      <FeatureCards />
      <GallerySection />
      <Footer />
    </main>
  )
}
