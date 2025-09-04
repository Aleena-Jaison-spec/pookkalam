import { Button } from "@/components/ui/button"
import { GeometricPattern } from "./geometric-pattern"

export function PookkalamHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <GeometricPattern variant="primary" className="w-24 h-24" />
        </div>
        <div className="absolute top-20 right-20">
          <GeometricPattern variant="secondary" className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-20">
          <GeometricPattern variant="accent" className="w-20 h-20" />
        </div>
        <div className="absolute bottom-10 right-10">
          <GeometricPattern variant="primary" className="w-28 h-28" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Pookkalam Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/pookkalam.png"
                alt="Beautiful Pookkalam Design"
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Celebrate the Art of Pookkalam
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the vibrant world of traditional Kerala rangoli art, where geometric patterns and festive colors
            come together in perfect harmony to celebrate culture and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold">
              Explore Designs
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
