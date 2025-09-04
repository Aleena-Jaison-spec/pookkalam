import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const pookkalamImages = [
    { src: "/pookkalam-1.jpg", alt: "Traditional Orange & Red Pookkalam" },
    { src: "/pookkalam-2.jpg", alt: "Geometric Star Pattern Pookkalam" },
    { src: "/pookkalam-3.jpg", alt: "Purple & White Concentric Circles" },
    { src: "/pookkalam-4.jpg", alt: "Multi-colored Sunburst Design" },
    { src: "/pookkalam-5.jpg", alt: "Diamond Pattern Pookkalam" },
    { src: "/pookkalam-6.jpg", alt: "Traditional Onam Spiral Design" },
    { src: "/pookkalam-7.jpg", alt: "Pink Rose Symmetrical Mandala" },
    { src: "/pookkalam-8.jpg", alt: "Mixed Flowers Kerala Rangoli" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Pookkalam Gallery</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A collection of stunning Pookkalam designs showcasing the diversity and beauty of this traditional art form.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {pookkalamImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
