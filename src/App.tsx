import { useState, type ReactNode } from 'react'
import {
  ArrowRight, ArrowUpRight, Search, ShoppingBag, Menu, X, Plus,
  Globe2, Instagram, Youtube, Twitter, ShieldCheck, Truck,
  RotateCcw, Sparkles, Headphones, Check, Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const photo = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

type Category = 'Tech' | 'Beauty'
type Product = {
  id: number
  name: string
  category: Category
  tag: string
  price: number
  image: string
  description: string
}

const products: Product[] = [
  { id: 1, name: 'AURA PRO', category: 'Tech', tag: 'New arrival', price: 329, image: photo('photo-1546435770-a3e426bf472b'), description: 'Studio-grade wireless headphones with adaptive noise cancellation and 40-hour battery life. Machined aluminium, wrapped in memory foam.' },
  { id: 2, name: 'CHRONO S', category: 'Tech', tag: 'Bestseller', price: 459, image: photo('photo-1524592094714-0f0654e20314'), description: 'A sapphire-crystal smartwatch that tracks what matters and stays out of the way. Five days of power, endless faces.' },
  { id: 3, name: 'ECHO BUDS', category: 'Tech', tag: 'Editor’s pick', price: 189, image: photo('photo-1484704849700-f032a568e944'), description: 'Featherlight true wireless earbuds with spatial audio and a charging case that fits any pocket.' },
  { id: 4, name: 'NOVA X', category: 'Tech', tag: 'Limited', price: 899, image: photo('photo-1580910051074-3eb694886505'), description: 'A smartphone built around the screen, with a titanium frame and a camera system made for low light.' },
  { id: 5, name: 'LUMEN SERUM', category: 'Beauty', tag: 'Bestseller', price: 128, image: photo('photo-1596755389378-c31d21fd1273'), description: 'A weightless radiance serum with niacinamide and bioluminescent algae. Visibly brighter skin in fourteen days.' },
  { id: 6, name: 'ÉCLAT', category: 'Beauty', tag: 'New arrival', price: 165, image: photo('photo-1615634260167-c8cdede054de'), description: 'An eau de parfum of bergamot, iris and warm amber. Intimate, lingering, impossible to place.' },
  { id: 7, name: 'VEIL', category: 'Beauty', tag: 'Editor’s pick', price: 96, image: photo('photo-1487412947147-5cebf100ffc2'), description: 'A colour collection designed to move with your skin. Buildable pigment, a second-skin finish.' },
  { id: 8, name: 'PURE RITUAL', category: 'Beauty', tag: 'Limited', price: 142, image: photo('photo-1608571423902-eed4a5ad8108'), description: 'A three-step skincare ritual in recyclable glass. Clean formulations, no compromise on performance.' },
]

const navItems = ['Technology', 'Beauty', 'Collections', 'Our Story', 'Journal']

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.32em]">
      <span className="text-primary">{index}</span>
      <span className="h-px w-10 bg-primary/60" />
      <span className="text-white/40">{children}</span>
    </div>
  )
}

function App() {
  const [cart, setCart] = useState<Product[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [quickView, setQuickView] = useState<Product | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const [toast, setToast] = useState('')

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
    setQuickView(null)
    setToast(`${product.name} added to your bag`)
    window.setTimeout(() => setToast(''), 2600)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)
  const companyName = 'HONG KONG KOPHY LIMITED'
  const companyEmail = 'info@kophy.pro'
  const contactPerson = 'CHEN JUAN'
  const phone = '52047089'
  const address = 'Room 17A, 15/F, Vanta Industrial Centre, 21-33 Tai Lin Pai Road, Kwai Chung, New Territories, Hong Kong'

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      {/* Announcement bar */}
      <div className="border-b border-white/10 bg-[#0a0a0d] py-2.5 text-center text-[9px] uppercase tracking-[0.3em] text-white/55 sm:text-[10px]">
        Complimentary worldwide shipping over $200 <span className="mx-3 text-primary">✦</span> Discover the 2026 edit
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <button className="text-white/70 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={21} strokeWidth={1.4} />
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#products" className="text-[10px] uppercase tracking-[0.22em] text-white/55 transition hover:text-primary">
                {item}
              </a>
            ))}
          </nav>

          <a href="#top" className="font-display text-2xl tracking-[0.32em] text-white sm:text-[28px]">
            LUMIÈRE
          </a>

          <div className="flex items-center gap-5 text-white/70">
            <button aria-label="Search" className="hidden transition hover:text-primary sm:block"><Search size={18} strokeWidth={1.4} /></button>
            <button aria-label="Cart" className="relative transition hover:text-primary" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={18} strokeWidth={1.4} />
              {cart.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-medium text-[#0a0a0c]">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <span className="font-display text-2xl tracking-[0.3em]">LUMIÈRE</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={22} strokeWidth={1.3} /></button>
          </div>
          <div className="flex flex-col px-6 pt-10">
            {navItems.map((item, i) => (
              <a key={item} href="#products" onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/10 py-6 font-display text-3xl">
                {item}<span className="text-[10px] tracking-widest text-primary">0{i + 1}</span>
              </a>
            ))}
            <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45">
              <Globe2 size={15} /> EN / USD
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="top" className="relative bg-grid">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-12 lg:pb-32 lg:pt-24">
          <div className="animate-reveal">
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-primary">
              <span className="h-px w-10 bg-primary" /> The 2026 Collection
            </div>
            <h1 className="font-display text-[clamp(3.6rem,8vw,7.6rem)] leading-[0.88] tracking-tight">
              Where tech<br />meets <span className="italic text-gold-gradient">ritual.</span>
            </h1>
            <p className="mt-8 max-w-md text-[13px] leading-7 text-white/50">
              An edited world of considered objects — precision engineering for the way you live,
              and quiet luxury for the way you feel.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="h-12 rounded-none bg-primary px-8 text-[10px] uppercase tracking-[0.25em] text-[#0a0a0c] hover:bg-[#e2c68c]">
                <a href="#products">Explore the edit <ArrowRight className="ml-2" size={14} /></a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-none border-white/25 bg-transparent px-8 text-[10px] uppercase tracking-[0.25em] text-white hover:border-primary hover:bg-transparent hover:text-primary">
                <a href="#story">Our philosophy <ArrowUpRight className="ml-2" size={14} /></a>
              </Button>
            </div>
            <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ['64', 'countries served'],
                ['150k+', 'thoughtful customers'],
                ['4.9', 'average rating'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-3xl text-white">{value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[560px] lg:h-[660px]">
            <div className="absolute inset-x-5 bottom-14 top-0 overflow-hidden border border-white/10 bg-[#141418]">
              <img src={photo('photo-1546435770-a3e426bf472b', 1200)} alt="AURA PRO wireless headphones" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 h-40 w-32 overflow-hidden border-[5px] border-background sm:h-52 sm:w-44 animate-float-slow">
              <img src={photo('photo-1487412947147-5cebf100ffc2', 600)} alt="Beauty colour collection" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 top-14 hidden border border-primary/30 bg-background/90 px-5 py-4 backdrop-blur sm:block animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <p className="text-[9px] uppercase tracking-[0.28em] text-primary">New arrival</p>
              <p className="mt-1 font-display text-xl">AURA PRO</p>
              <p className="mt-1 text-[10px] text-white/45">Studio-grade sound</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press marquee */}
      <div className="overflow-hidden border-y border-white/[0.07] bg-[#0b0b0e] py-6">
        <div className="flex w-max animate-marquee items-center gap-14">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center gap-14">
              {['VOGUE', 'GQ', 'MONOCLE', 'WALLPAPER*', 'ESQUIRE', 'KINFOLK'].map((name) => (
                <span key={name} className="whitespace-nowrap font-display text-2xl tracking-[0.2em] text-white/25">{name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
        <SectionLabel index="01">Two worlds, one point of view</SectionLabel>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl leading-tight lg:text-7xl">Curated with intention.</h2>
          <p className="max-w-xs text-xs leading-6 text-white/45">We bring together the objects that shape how we live — inside and out.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { name: 'Technology', title: 'Precision, made personal.', desc: 'Audio, wearables and everyday intelligence, engineered to disappear into your life.', image: photo('photo-1580910051074-3eb694886505', 1200), Icon: Headphones },
            { name: 'Beauty', title: 'Rituals, reimagined.', desc: 'High-performance formulas and objects of desire, crafted for the daily act of becoming.', image: photo('photo-1615634260167-c8cdede054de', 1200), Icon: Sparkles },
          ].map((cat) => (
            <a key={cat.name} href="#products" className="group relative block h-[420px] overflow-hidden border border-white/10 lg:h-[560px]">
              <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition [transition-duration:1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                  <cat.Icon size={14} strokeWidth={1.4} /> {cat.name}
                </div>
                <h3 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">{cat.title}</h3>
                <p className="mt-3 max-w-sm text-xs leading-6 text-white/60">{cat.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white transition group-hover:text-primary">
                  Discover <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-y border-white/[0.06] bg-[#0a0a0d] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
          <SectionLabel index="02">The collection</SectionLabel>
          <h2 className="mb-12 font-display text-5xl leading-tight lg:text-7xl">Objects of desire.</h2>

          <Tabs defaultValue="all">
            <TabsList className="mb-12 h-auto w-full justify-start gap-8 rounded-none border-b border-white/10 bg-transparent p-0 sm:gap-12">
              {[['all', 'All objects'], ['tech', 'Technology'], ['beauty', 'Beauty']].map(([value, label]) => (
                <TabsTrigger key={value} value={value} className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-4 text-[10px] uppercase tracking-[0.25em] text-white/40 shadow-none transition hover:text-white data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {[
              ['all', products],
              ['tech', products.filter((p) => p.category === 'Tech')],
              ['beauty', products.filter((p) => p.category === 'Beauty')],
            ].map(([value, list]) => (
              <TabsContent key={value as string} value={value as string} className="mt-0">
                <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
                  {(list as Product[]).map((product) => (
                    <article key={product.id} className="group">
                      <div className="relative aspect-[4/5] cursor-pointer overflow-hidden bg-[#141418]" onClick={() => setQuickView(product)}>
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        <span className="absolute left-3 top-3 bg-black/60 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                          {product.tag}
                        </span>
                        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <Button onClick={(e) => { e.stopPropagation(); addToCart(product) }} className="h-10 w-full rounded-none bg-primary text-[9px] uppercase tracking-[0.2em] text-[#0a0a0c] hover:bg-[#e2c68c]">
                            Add to bag · ${product.price}
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 pt-5">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.25em] text-primary/80">{product.category}</p>
                          <h3 className="mt-2 font-display text-xl lg:text-2xl">{product.name}</h3>
                        </div>
                        <span className="pt-5 text-xs text-white/45">${product.price}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative h-[420px] lg:h-[600px]">
            <img src={photo('photo-1570172619644-dfd03ed5d881', 1100)} alt="The LUMIÈRE philosophy" className="h-full w-full object-cover" />
            <div className="absolute -bottom-6 -right-2 hidden border border-primary/40 bg-background px-8 py-6 lg:block">
              <p className="font-display text-5xl text-primary">12</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/45">years of considered design</p>
            </div>
          </div>
          <div>
            <SectionLabel index="03">Our philosophy</SectionLabel>
            <h2 className="font-display text-5xl leading-[1.05] lg:text-6xl">
              Objects that earn<br /><em className="text-gold-gradient">their place.</em>
            </h2>
            <p className="mt-8 max-w-lg text-[13px] leading-7 text-white/50">
              We started with a simple question: what if the things we use every day felt as considered
              as the moments they belong to? Twelve years later, that question still drives every decision —
              from the materials we choose to the way a package opens.
            </p>
            <ul className="mt-10 space-y-5">
              {['Small-batch manufacturing in family-run workshops', 'Carbon-neutral fulfilment to 64 countries', 'Designed to be repaired, not replaced'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs leading-6 text-white/65">
                  <Check size={14} className="mt-1 shrink-0 text-primary" strokeWidth={1.5} /> {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-12 h-12 rounded-none border-white/25 bg-transparent px-8 text-[10px] uppercase tracking-[0.25em] text-white hover:border-primary hover:bg-transparent hover:text-primary">
              <a href="#products">Read our story <ArrowRight className="ml-2" size={14} /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="border-y border-white/[0.07] bg-[#0b0b0e]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/[0.06] px-0 lg:grid-cols-4">
          {[
            { Icon: ShieldCheck, title: '2-year warranty', sub: 'On every object' },
            { Icon: Truck, title: 'Global delivery', sub: 'Dispatched in 48 hours' },
            { Icon: RotateCcw, title: '30-day returns', sub: 'No questions asked' },
            { Icon: Globe2, title: '64 countries', sub: 'Trusted worldwide' },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center bg-[#0b0b0e] px-4 py-12 text-center">
              <Icon size={22} strokeWidth={1.2} className="text-primary" />
              <p className="mt-5 font-display text-xl">{title}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
        <SectionLabel index="04">In their words</SectionLabel>
        <h2 className="mb-14 font-display text-5xl lg:text-6xl">Loved, far and wide.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { quote: 'The AURA PRO changed my commute. The noise cancellation is genuinely in a different class.', name: 'Campaign Manager', place: 'London, UK' },
            { quote: 'I ordered the beauty collection on a Monday and had it in Copenhagen by Thursday. Beautiful packaging, better formula.', name: 'Sophie L.', place: 'Copenhagen, DK' },
            { quote: 'We now stock LUMIÈRE in three of our stores. It is the only line our customers ask for by name.', name: 'Retail Partner', place: 'Melbourne, AU' },
          ].map((item) => (
            <div key={item.name} className="border border-white/10 p-8 lg:p-10">
              <div className="flex gap-1 text-primary">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-white/85">“{item.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">{item.name}</p>
                <p className="mt-1 text-[10px] text-white/35">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/[0.07] bg-[#0a0a0d] py-24 text-center lg:py-32">
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary">The LUMIÈRE letter</p>
        <h2 className="mt-6 font-display text-5xl leading-tight lg:text-7xl">A little light,<br /><em className="text-gold-gradient">in your inbox.</em></h2>
        <p className="mx-auto mt-6 max-w-md text-xs leading-6 text-white/45">New arrivals, quiet collaborations and the occasional idea worth keeping.</p>
        <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true) }} className="mx-auto mt-10 flex max-w-lg items-center border-b border-white/25 focus-within:border-primary">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your email address" className="h-14 rounded-none border-0 bg-transparent text-sm text-white placeholder:text-white/35 focus-visible:ring-0" />
          <Button type="submit" className="shrink-0 rounded-none bg-transparent px-2 text-[10px] uppercase tracking-[0.25em] text-primary hover:bg-transparent hover:text-white">
            Subscribe <ArrowRight className="ml-2" size={14} />
          </Button>
        </form>
        {subscribed && <p className="mt-5 text-xs text-primary">Thank you — welcome to the letter.</p>}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary">Get in Touch</p>
              <div className="mt-6 space-y-3 text-[11px] leading-5 text-white/50">
                <p><span className="font-semibold text-white/75">Company:</span> {companyName}</p>
                <p><span className="font-semibold text-white/75">Contact:</span> {contactPerson}</p>
                <p><span className="font-semibold text-white/75">Email:</span> <a href={`mailto:${companyEmail}`} className="transition hover:text-primary">{companyEmail}</a></p>
                <p><span className="font-semibold text-white/75">Phone:</span> {phone}</p>
                <p><span className="font-semibold text-white/75">Address:</span> {address}</p>
              </div>
            </div>
            <div>
              <p className="font-display text-3xl tracking-[0.3em]">LUMIÈRE</p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-primary/70">A {companyName} company</p>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/40">An edited world of technology and beauty. Designed for the way you live now.</p>
              <div className="mt-7 flex gap-4 text-white/40">
                <a href="#top" aria-label="Instagram" className="hover:text-primary"><Instagram size={17} strokeWidth={1.3} /></a>
                <a href="#top" aria-label="YouTube" className="hover:text-primary"><Youtube size={17} strokeWidth={1.3} /></a>
                <a href="#top" aria-label="Twitter" className="hover:text-primary"><Twitter size={17} strokeWidth={1.3} /></a>
              </div>
            </div>
            {[
              { title: 'Shop', links: ['Technology', 'Beauty', 'New arrivals', 'Bestsellers', 'Gift cards'] },
              { title: 'Company', links: ['Our story', 'Sustainability', 'Journal', 'Careers', 'Press'] },
              { title: 'Support', links: ['Shipping & returns', 'Warranty', 'Contact us', 'FAQs', 'Wholesale'] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary">{col.title}</p>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href={link === 'Contact us' || link === 'Wholesale' ? `mailto:${companyEmail}` : '#top'} className="text-xs text-white/45 transition hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.15em] text-white/30">
            <span>© 2026 {companyName}. All rights reserved.</span>
            <a href={`mailto:${companyEmail}`} className="text-white/50 transition hover:text-primary">{companyEmail}</a>
            <span className="flex items-center gap-5"><Globe2 size={13} /> English / USD <span className="hidden sm:inline">·</span> <span className="hidden sm:inline">Privacy · Terms</span></span>
          </div>
        </div>
      </footer>

      {/* Quick view */}
      <Dialog open={!!quickView} onOpenChange={(open) => !open && setQuickView(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-[#101014] p-0 text-white sm:rounded-none">
          <DialogTitle className="sr-only">Product details</DialogTitle>
          {quickView && (
            <div className="grid md:grid-cols-2">
              <div className="h-64 bg-[#141418] md:h-full">
                <img src={quickView.image} alt={quickView.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="text-[9px] uppercase tracking-[0.3em] text-primary">{quickView.category} · {quickView.tag}</p>
                <h3 className="mt-4 font-display text-4xl">{quickView.name}</h3>
                <p className="mt-5 text-xs leading-7 text-white/50">{quickView.description}</p>
                <p className="mt-7 font-display text-3xl text-primary">${quickView.price}</p>
                <Button onClick={() => addToCart(quickView)} className="mt-7 h-12 rounded-none bg-primary text-[10px] uppercase tracking-[0.25em] text-[#0a0a0c] hover:bg-[#e2c68c]">
                  Add to bag <Plus className="ml-2" size={14} />
                </Button>
                <p className="mt-5 text-[10px] text-white/35">Free worldwide shipping · 2-year warranty</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="max-w-md border-white/10 bg-[#101014] text-white sm:rounded-none">
          <DialogTitle className="font-display text-3xl">Your bag</DialogTitle>
          {cart.length === 0 ? (
            <p className="py-10 text-center text-xs text-white/40">Your bag is waiting for something good.</p>
          ) : (
            <>
              <div className="mt-6 max-h-72 space-y-4 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <img src={item.image} alt={item.name} className="h-16 w-14 object-cover" />
                    <div className="flex-1">
                      <p className="font-display text-lg">{item.name}</p>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">{item.category}</p>
                    </div>
                    <span className="text-sm">${item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Total</span>
                <span className="font-display text-3xl text-primary">${total}</span>
              </div>
              <Button className="mt-6 h-12 w-full rounded-none bg-primary text-[10px] uppercase tracking-[0.25em] text-[#0a0a0c] hover:bg-[#e2c68c]">Proceed to checkout</Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 border border-primary/40 bg-[#151518] px-5 py-4 text-xs text-white shadow-2xl">
          <Check size={15} className="text-primary" /> {toast}
        </div>
      )}
    </div>
  )
}

export default App
