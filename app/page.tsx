import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Calendar, Mail, Phone, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">Will Platnick</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Certified Grief Recovery Specialist
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Guiding You Through
            <span className="text-primary block">Grief to Healing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            As a Certified Grief Recovery Specialist with the Grief Recovery Method, I provide compassionate support to
            help you navigate loss and find your path toward healing and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://fantastical.app/wplatnick-dLno/30" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
              <a href="#about">Learn More About My Approach</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About My Practice</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Grief is a natural response to loss, but you don't have to navigate it alone. I'm here to provide
              professional, compassionate support on your healing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/compassionate-grief-counselor-in-warm-office-setti.png"
                alt="Will Platnick, Certified Grief Recovery Specialist"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Certified Expertise</h3>
                <p className="text-muted-foreground">
                  Trained and certified in the Grief Recovery Method, an evidence-based approach that has helped
                  millions of people worldwide process their grief and reclaim their lives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Compassionate Support</h3>
                <p className="text-muted-foreground">
                  Every person's grief journey is unique. I provide a safe, non-judgmental space where you can explore
                  your feelings and work toward healing at your own pace.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Faith-Integrated Approach</h3>
                <p className="text-muted-foreground">
                  For those who desire it, I offer faith-integrated grief support, helping you find comfort and strength
                  through spiritual resources and biblical wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How I Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional grief recovery services tailored to your unique needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Individual Sessions</CardTitle>
                <CardDescription>
                  One-on-one grief recovery sessions using proven methods to help you process loss and move forward.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized grief recovery plan</li>
                  <li>• Safe, confidential environment</li>
                  <li>• Evidence-based techniques</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Faith-Based Support</CardTitle>
                <CardDescription>
                  Integrating biblical wisdom and spiritual resources into your grief recovery journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scripture-based comfort</li>
                  <li>• Prayer and spiritual guidance</li>
                  <li>• Christian grief resources</li>
                  <li>• Hope-centered healing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>
                  Continued guidance and resources to support your healing journey over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Follow-up sessions</li>
                  <li>• Resource recommendations</li>
                  <li>• Crisis support availability</li>
                  <li>• Community connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Healing Resources</h2>
            <p className="text-lg text-muted-foreground">Tools and resources to support your grief recovery journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bible Reading Plan</CardTitle>
                <CardDescription>
                  A specially curated reading plan designed to provide comfort and hope during times of grief.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-foreground">"Sitting in Grief: A Journey Towards Standing Again"</h4>
                <p className="text-sm text-muted-foreground">
                  This thoughtfully crafted Bible reading plan offers daily scripture passages, reflections, and prayers
                  to guide you through the valleys of grief toward hope and healing.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a
                    href="https://www.bible.com/reading-plans/19799-sitting-in-grief-a-journey-towards-standing-again"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Reading Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Additional Resources</CardTitle>
                <CardDescription>Helpful materials and tools to support your healing process.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-foreground">Grief Recovery Method</h5>
                    <p className="text-sm text-muted-foreground">Learn more about the evidence-based approach I use</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Support Groups</h5>
                    <p className="text-sm text-muted-foreground">Connect with others on similar journeys</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Crisis Resources</h5>
                    <p className="text-sm text-muted-foreground">24/7 support when you need it most</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="#contact">Request Resources</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step toward healing. I'm here to support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Book a confidential consultation to discuss how I can support your grief recovery journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">Flexible scheduling available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm">Phone and video sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Compassionate, professional care</span>
                  </div>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a href="https://fantastical.app/wplatnick-dLno/30" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Have questions about grief recovery or my services? I'm here to help.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm">Professional email support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Serving clients nationwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Confidential and secure</span>
                  </div>
                </div>
                <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
                  <a href="mailto:will@willplatnick.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send a Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">Will Platnick</span>
            </div>
            <p className="text-muted-foreground">
              Certified Grief Recovery Specialist • Compassionate Support • Faith-Based Healing
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#resources" className="hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 Will Platnick. All rights reserved. • Professional grief recovery services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
