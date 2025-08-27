import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Calendar, Mail, Phone, MapPin, Download, BarChart, ExternalLink, CheckCircle } from "lucide-react"

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
              <a href="#evidence" className="text-muted-foreground hover:text-foreground transition-colors">
                Evidence
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
          <img 
            src="/certified_grief_recovery_specialist_v4.jpg" 
            alt="Certified Grief Recovery Method Specialist" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Guiding You Through
            <span className="text-primary block">Grief to Healing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            As a Certified Grief Recovery Specialist with the Grief Recovery Method, Will provides compassionate support to
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Will Platnick</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A journey through profound loss transformed into a calling to guide others toward healing
            </p>
          </div>

          {/* Personal Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Based in Saratoga Springs, just north of Albany in New York's Capital Region, Will Platnick brings a uniquely personal understanding to his work as a Certified Grief Recovery Specialist. By age 40, Will had experienced profound losses that would reshape his life's purpose-the deaths of both parents, his son, and numerous friends, while also navigating the complex grief that accompanies chronic illness in the family.
                </p>
                <p>
                  In working through his own grief, Will authored <em>"Sitting in Grief: A Journey Towards Standing Again,"</em> a deeply personal reading plan for the YouVersion Bible App. What began as his own healing process became a lifeline for tens of thousands. Through a simple contact form, readers from around the world began reaching out-sharing how Will's words had captured the essence of their pain and, more importantly, made them feel truly seen for the first time by someone who understood the weight of loss.
                </p>
                <p>
                  These thousands of heartfelt messages revealed a profound truth: people desperately needed someone who could walk alongside them through grief-not just with sympathy, but with genuine understanding born from experience. This calling led Will to become certified through the Grief Recovery Method®, combining his lived experience with evidence-based techniques to help others find their path toward healing.
                </p>
                <p className="font-semibold text-foreground">
                  "Grief taught me that healing isn't about 'moving on'-it's about moving forward with love, memories, and newfound purpose. Let me help you discover that same transformation."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/will.jpg" 
                  alt="Will Platnick - Certified Grief Recovery Specialist" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg max-w-xs">
                  <p className="text-sm font-medium">
                    "Thousands have found comfort through Will's journey-now let him guide yours."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials and Approach */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/grm-ebp-badge2x.png" 
                alt="Grief Recovery Method - Evidence Based Program" 
                className="h-32"
              />
            </div>
            
            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Personal Understanding</h3>
                    <p className="text-sm text-muted-foreground">
                      Having walked through multiple profound losses, Will brings genuine empathy and lived experience to every session.
                    </p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Proven Method</h3>
                    <p className="text-sm text-muted-foreground">
                      Certified in the evidence-based Grief Recovery Method® with documented success helping millions worldwide.
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Faith Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Optional faith-based support drawing from Will's experience as a devotional author reaching thousands globally.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted rounded-lg p-8 text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Author of "Sitting in Grief"</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Will's YouVersion Bible App reading plan has touched thousands of lives worldwide, offering daily comfort and understanding to those navigating loss.
              </p>
              <Button variant="outline" asChild>
                <a href="https://www.bible.com/reading-plans/19799-sitting-in-grief-a-journey-towards-standing-again" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read the Devotional Plan
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voices of Healing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Thousands have found comfort through "Sitting in Grief: A Journey Towards Standing Again"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/10">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "This was the most real and relevant teaching ever. I felt like the writer was actually speaking to me. 
                  Thank you so much for speaking direct. I'm really struggling every day. But this reading made me feel 
                  like someone understands...and actually gets it."
                </p>
                <p className="text-sm font-semibold text-foreground">- Fay</p>
                <p className="text-xs text-muted-foreground">Reading Plan User</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/10">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The personal experiences expressed matched exactly how I feel! I lost my Mom in January and I am lost 
                  without her! Reading this has helped me so much! Thank you!"
                </p>
                <p className="text-sm font-semibold text-foreground">- Shannon</p>
                <p className="text-xs text-muted-foreground">Reading Plan User</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/10">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Your transparency helped me feel less alone. There's just a real sense of heart and soul in your 
                  writing and guidance that I connected with. The verses you've chosen were wonderfully matched."
                </p>
                <p className="text-sm font-semibold text-foreground">- Cheryl</p>
                <p className="text-xs text-muted-foreground">Reading Plan User</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center bg-primary/10 rounded-lg px-6 py-3">
              <BookOpen className="h-6 w-6 text-primary mr-3" />
              <p className="text-foreground font-medium">
                Over 10,000 readers have found comfort through Will's devotional plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Section */}
      <section id="evidence" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Scientifically Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Grief Recovery Method® isn't just another approach-it's backed by peer-reviewed research published in the 
              American Journal of Health Education, showing exceptional effectiveness that far exceeds typical community programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20 bg-card shadow-lg">
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-2xl">Research-Validated Outcomes</CardTitle>
                <CardDescription className="text-base">
                  Independent research demonstrates statistically significant improvements across all measured dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Attitude Changes</span>
                        <span className="text-2xl font-bold text-primary">91%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{width: '91%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Participants showed improved attitudes toward grief and healing
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Knowledge Gained</span>
                        <span className="text-2xl font-bold text-primary">82%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{width: '82%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Increased understanding of grief recovery principles
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Behavioral Changes</span>
                        <span className="text-2xl font-bold text-primary">78%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Adopted healthier behaviors for processing grief
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Belief Transformation</span>
                        <span className="text-2xl font-bold text-primary">53%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{width: '53%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Shifted limiting beliefs about grief and loss
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card shadow-lg">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-2xl">Why This Matters</CardTitle>
                <CardDescription className="text-base">
                  These aren't just numbers-they represent real lives transformed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Exceptional Effectiveness</h4>
                    <p className="text-sm text-muted-foreground">
                      Most community-based programs achieve only 20-50% effectiveness. The Grief Recovery Method® 
                      demonstrates up to <span className="font-bold text-foreground">91% effectiveness</span>-nearly 
                      double the industry standard.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Not Random Chance</p>
                        <p className="text-sm text-muted-foreground">
                          Statistically significant results prove the program creates real change
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Peer-Reviewed Research</p>
                        <p className="text-sm text-muted-foreground">
                          Published in the American Journal of Health Education
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Measurable Outcomes</p>
                        <p className="text-sm text-muted-foreground">
                          Concrete improvements in knowledge, attitudes, beliefs, and behaviors
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">40+ Years of Success</p>
                        <p className="text-sm text-muted-foreground">
                          Over 3 million people helped worldwide since the 1980s
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a 
                      href="https://www.tandfonline.com/doi/full/10.1080/19325037.2019.1571964" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read the Full Research Study
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8 border-2 border-primary/20 shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                "These statistically significant effect sizes establish that the change in grief recovery variables 
                wasn't by random chance-it was exposure to the Grief Recovery Method® that produced the measurable improvements."
              </p>
              <p className="text-sm text-muted-foreground">
                - Dr. Rachael Nolan, PhD, MPH, CPH, Lead Researcher
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Will Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured grief recovery programs tailored to your unique needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1">
                Most Popular
              </Badge>
              <CardHeader>
                <img 
                  src="/one_on_one_logo.png" 
                  alt="One on One Grief Support" 
                  className="h-20 mb-4"
                />
                <CardTitle>Individual Program</CardTitle>
                <CardDescription>
                  One-on-one guidance through the Grief Recovery Method to help you process loss and move forward.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 border-y border-border">
                  <div className="text-3xl font-bold text-foreground">$500</div>
                  <div className="text-sm text-muted-foreground">7 sessions • Once per week</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Personalized program guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Safe, confidential environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Evidence-based curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-xs font-semibold text-foreground mb-1">
                    100% Money-Back Guarantee
                  </p>
                  <p className="text-xs text-muted-foreground">
                    If you attend all sessions and don't feel the time was well spent, receive a full refund.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/grm_support_group_logo_medium.png" 
                  alt="Grief Recovery Method Support Group" 
                  className="h-20 mb-4"
                />
                <CardTitle>Group Sessions</CardTitle>
                <CardDescription>
                  Join others on a shared healing journey through the Grief Recovery Method in a supportive group setting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-3 border-y border-border">
                  <div className="text-2xl font-bold text-foreground">$395</div>
                  <div className="text-xs text-muted-foreground">8 weeks • Once per week</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Shared healing experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Evidence-based curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Peer support network</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Smaller group setting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/pet_loss_logo_medium_jpg_0.jpg" 
                  alt="Pet Loss Support Group" 
                  className="h-20 mb-4"
                />
                <CardTitle>Pet Loss Group</CardTitle>
                <CardDescription>
                  Specialized group support for those grieving the loss of a beloved companion animal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-3 border-y border-border">
                  <div className="text-2xl font-bold text-foreground">$300</div>
                  <div className="text-xs text-muted-foreground">6 weeks • Once per week</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Pet-specific grief support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Understanding companions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Honoring your pet's memory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Judgment-free environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/hcwl_logo_0.png" 
                  alt="Helping Children with Loss" 
                  className="h-20 mb-4"
                />
                <CardTitle>Helping Children with Loss</CardTitle>
                <CardDescription>
                  For adults who love, care for, or work with grieving children—learn how to guide them through loss.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-3 border-y border-border">
                  <div className="text-2xl font-bold text-foreground">$250</div>
                  <div className="text-xs text-muted-foreground">4 sessions • 10 hours total</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>For parents, teachers & caregivers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Learn to help children express grief</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Based on "When Children Grieve" book</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Evidence-based action program</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Scholarship Information */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Need-Based Scholarships Available</h3>
                </div>
                <p className="text-center text-muted-foreground mb-4">
                  Financial hardship shouldn't prevent healing. Thanks to generous support from the <span className="font-semibold text-foreground">New Breath Spirituality Center</span>, 
                  need-based scholarships are available for those who qualify.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#contact">
                      Inquire About Scholarship Options
                    </a>
                  </Button>
                </div>
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

          <div className="mb-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl">
              <CardHeader className="text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">FREE: The Grief Recovery Method® Guide</CardTitle>
                <CardDescription className="text-lg">
                  Discover the Revolutionary Approach That's Helped Millions Find Peace After Loss
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-card/80 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-foreground">Transform Your Grief Into Growth</h4>
                  <p className="text-muted-foreground">
                    This comprehensive guide reveals the proven, evidence-based method that has transformed countless lives. 
                    Unlike traditional approaches, the Grief Recovery Method® provides actionable steps to complete 
                    your relationship with pain and rediscover joy.
                  </p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Inside This Life-Changing eBook:</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Why "time heals all wounds" is a myth-and what actually works</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>The 6 hidden myths about grief that keep you stuck in pain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>A step-by-step action plan to move beyond loss-not just cope with it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>How to handle the "emotional incompleteness" that follows any loss</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Real stories of transformation from grievers just like you</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Join Over 3 Million People Who've Found Freedom From Grief
                    </p>
                    <p className="text-xs text-muted-foreground">
                      The Grief Recovery Method® has been helping people for over 40 years
                    </p>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <a href="/grm_ebook_r_new.pdf" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Your Free Guide Now
                  </a>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  No email required • Opens in new tab • 100% free
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step toward healing. Will is here to support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Book a confidential consultation to discuss how Will can support your grief recovery journey.
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
                    <span className="text-sm">Zoom video sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Compassionate, certified guidance</span>
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
                <CardDescription>Have questions about the Grief Recovery Method or how Will can help? He's here to answer them.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm">Email communication available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Serving people nationwide</span>
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
              Certified Grief Recovery Specialist • Evidence-Based Program • Faith Integration Available
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#evidence" className="hover:text-foreground transition-colors">
                Evidence
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
              © 2025 Beacon and Balance LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
