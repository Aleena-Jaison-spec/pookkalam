import { GeometricPattern } from "./geometric-pattern"

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <GeometricPattern variant="primary" className="w-8 h-8" />
              <h3 className="text-xl font-bold">Pookkalam Art</h3>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Celebrating the timeless beauty and cultural significance of traditional Kerala Pookkalam designs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Patterns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Pookkalam Art. Celebrating tradition through digital artistry.</p>
        </div>
      </div>
    </footer>
  )
}
