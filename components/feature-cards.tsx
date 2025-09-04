import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GeometricPattern } from "./geometric-pattern"

const features = [
  {
    title: "Traditional Patterns",
    description:
      "Explore authentic Pookkalam designs passed down through generations, each telling a unique story of Kerala's rich cultural heritage.",
    variant: "primary" as const,
  },
  {
    title: "Vibrant Colors",
    description:
      "Immerse yourself in the warm, festive palette of coral pinks, golden yellows, and deep reds that make each design come alive.",
    variant: "secondary" as const,
  },
  {
    title: "Sacred Geometry",
    description:
      "Discover the mathematical beauty and spiritual significance behind the intricate geometric patterns of traditional rangoli art.",
    variant: "accent" as const,
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">The Beauty of Pookkalam</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Each Pookkalam is a masterpiece that combines artistry, tradition, and spiritual meaning in perfect harmony.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <GeometricPattern
                    variant={feature.variant}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-pretty leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
