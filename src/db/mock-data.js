// ─── Mock Products ───────────────────────────────────────────────────────────
export const mockProducts = [
  {
    id: 1,
    name: 'Heritage Crossbody Bag',
    slug: 'heritage-crossbody-bag',
    description:
      'Hand-stitched from full-grain Italian leather, the Heritage Crossbody blends timeless silhouette with modern utility. An adjustable strap, magnetic closure, and three interior pockets keep your essentials organized in effortless style.',
    price: '189.00',
    compareAtPrice: '249.00',
    category: 'bags',
    imageUrl: '/images/products/leather-bag.jpg',
    images: [
      '/images/products/leather-bag.jpg',
    ],
    inStock: true,
    featured: true,
    rating: '4.8',
    reviewCount: 124,
    createdAt: new Date('2026-01-10'),
  },
  {
    id: 2,
    name: 'Noir Pro Earbuds',
    slug: 'noir-pro-earbuds',
    description:
      'Adaptive noise cancellation meets audiophile-grade drivers in a design so light you forget you\'re wearing them. With 36 hours of total battery life and spatial audio, the Noir Pro redefines personal sound.',
    price: '149.00',
    compareAtPrice: null,
    category: 'tech',
    imageUrl: '/images/products/earbuds.jpg',
    images: [
      '/images/products/earbuds.jpg',
    ],
    inStock: true,
    featured: true,
    rating: '4.9',
    reviewCount: 312,
    createdAt: new Date('2026-02-05'),
  },
  {
    id: 3,
    name: 'Aurelius Timepiece',
    slug: 'aurelius-timepiece',
    description:
      'A Swiss-movement automatic watch housed in brushed 316L stainless steel. The domed sapphire crystal reveals a skeleton dial inspired by classical architecture — a statement of quiet confidence.',
    price: '329.00',
    compareAtPrice: '399.00',
    category: 'accessories',
    imageUrl: '/images/products/watch.jpg',
    images: [
      '/images/products/watch.jpg',
    ],
    inStock: true,
    featured: true,
    rating: '4.7',
    reviewCount: 89,
    createdAt: new Date('2026-01-20'),
  },
  {
    id: 4,
    name: 'Luxe Aviator Shades',
    slug: 'luxe-aviator-shades',
    description:
      'Titanium frames finished in matte gold hold gradient polarized lenses that cut glare without distorting color. Ultralight at 22 g, these aviators are as comfortable on a twelve-hour flight as they are at brunch.',
    price: '219.00',
    compareAtPrice: null,
    category: 'accessories',
    imageUrl: '/images/products/sunglasses.jpg',
    images: [
      '/images/products/sunglasses.jpg',
    ],
    inStock: true,
    featured: true,
    rating: '4.6',
    reviewCount: 156,
    createdAt: new Date('2026-03-01'),
  },
  {
    id: 5,
    name: 'Obsidian Bifold Wallet',
    slug: 'obsidian-bifold-wallet',
    description:
      'Slim enough for a front pocket, yet built to hold eight cards, a bill compartment, and a hidden RFID-blocking layer. The pebbled calfskin exterior develops a rich patina with time.',
    price: '89.00',
    compareAtPrice: null,
    category: 'accessories',
    imageUrl: '/images/products/wallet.jpg',
    images: [
      '/images/products/wallet.jpg',
    ],
    inStock: true,
    featured: false,
    rating: '4.8',
    reviewCount: 201,
    createdAt: new Date('2026-02-14'),
  },
  {
    id: 6,
    name: 'Atelier Low-top Sneakers',
    slug: 'atelier-low-top-sneakers',
    description:
      'Bench-crafted in Portugal from vegetable-tanned leather uppers on a margom rubber sole. The minimalist profile and hand-painted edges make these sneakers transition seamlessly from studio to dinner.',
    price: '269.00',
    compareAtPrice: null,
    category: 'footwear',
    imageUrl: '/images/products/sneakers.jpg',
    images: [
      '/images/products/sneakers.jpg',
    ],
    inStock: true,
    featured: false,
    rating: '4.5',
    reviewCount: 78,
    createdAt: new Date('2026-03-10'),
  },
  {
    id: 7,
    name: 'Aura Sandalwood Candle',
    slug: 'aura-sandalwood-candle',
    description:
      'A coconut-soy wax blend infused with Indian sandalwood, cedar, and a whisper of vanilla. Hand-poured into a reusable ceramic vessel, it delivers up to 60 hours of warm, grounding fragrance.',
    price: '45.00',
    compareAtPrice: null,
    category: 'lifestyle',
    imageUrl: '/images/products/candle.jpg',
    images: [
      '/images/products/candle.jpg',
    ],
    inStock: true,
    featured: false,
    rating: '4.9',
    reviewCount: 445,
    createdAt: new Date('2026-01-05'),
  },
  {
    id: 8,
    name: 'Vellum Leather Journal',
    slug: 'vellum-leather-journal',
    description:
      'Bound in soft Nappa leather with lay-flat binding and 192 pages of 100 gsm acid-free paper. Whether sketching, journaling, or note-taking, every page feels intentional.',
    price: '65.00',
    compareAtPrice: '85.00',
    category: 'lifestyle',
    imageUrl: '/images/products/notebook.jpg',
    images: [
      '/images/products/notebook.jpg',
    ],
    inStock: true,
    featured: false,
    rating: '4.7',
    reviewCount: 167,
    createdAt: new Date('2026-02-20'),
  },
];

// ─── Mock Categories ─────────────────────────────────────────────────────────
export const mockCategories = [
  {
    id: 1,
    name: 'Accessories',
    slug: 'accessories',
    description: 'Timeless pieces crafted for the modern individual',
    imageUrl: '/images/products/sunglasses.jpg',
  },
  {
    id: 2,
    name: 'Tech',
    slug: 'tech',
    description: 'Premium audio and gadgets for discerning tastes',
    imageUrl: '/images/products/earbuds.jpg',
  },
  {
    id: 3,
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Curated essentials for intentional living',
    imageUrl: '/images/products/candle.jpg',
  },
  {
    id: 4,
    name: 'Footwear',
    slug: 'footwear',
    description: 'Handcrafted shoes built to last',
    imageUrl: '/images/products/sneakers.jpg',
  },
];

// ─── Mock Blog Posts ─────────────────────────────────────────────────────────
export const mockBlogPosts = [
  {
    id: 1,
    title: 'The Art of Mindful Accessories',
    slug: 'art-of-mindful-accessories',
    excerpt:
      'How choosing fewer, better accessories can transform your daily ritual and redefine personal style.',
    content: `
      <h2>Less Is More — When It's the Right More</h2>
      <p>
        In an age of fast fashion and disposable trends, the most radical thing you can do is slow down.
        Mindful accessorising isn't about restriction; it's about intention. Every piece you carry should
        earn its place — through craftsmanship, through sentiment, or through the quiet confidence it lends
        when you step out the door.
      </p>

      <h2>The Daily Carry Philosophy</h2>
      <p>
        Think of your everyday carry as a personal exhibit. A well-worn leather bag tells your story in a way
        a logo-splashed tote never could. The patina on a brass buckle, the softening of vegetable-tanned
        leather — these are marks of a life lived, not consumed. When you invest in one great crossbody
        instead of five forgettable ones, you build a relationship with the object itself.
      </p>

      <blockquote>
        "Style is knowing who you are, what you want to say, and not giving a damn." — Orson Welles
      </blockquote>

      <h2>Building Your Capsule</h2>
      <p>
        Start with the pieces that touch your hands every day: a wallet, a watch, a bag. Choose materials that
        age gracefully — full-grain leather, brushed steel, sapphire crystal. Then let the rest fall away.
        You'll find that owning less frees up not just closet space, but mental space too. That's the quiet
        power of mindful accessories.
      </p>

      <p>
        At Pocket Toto, every product in our collection is designed to be a long-term companion. We believe
        the best accessory is the one you never want to replace — and we craft accordingly.
      </p>
    `,
    coverImage: '/images/products/leather-bag.jpg',
    author: 'Sophia Chen',
    tags: ['lifestyle', 'accessories', 'guide'],
    publishedAt: new Date('2026-06-15'),
    createdAt: new Date('2026-06-14'),
  },
  {
    id: 2,
    title: 'Why Quality Over Quantity Wins Every Time',
    slug: 'quality-over-quantity',
    excerpt:
      'The economics, ethics, and everyday joy of choosing fewer, better things.',
    content: `
      <h2>The True Cost of "Cheap"</h2>
      <p>
        A thirty-dollar candle that burns for twelve hours costs you $2.50 per hour of ambiance. A five-dollar
        candle that sputters out in ninety minutes? $3.33 — and it leaves a headache-inducing cloud of
        synthetic fragrance behind. Quality isn't a luxury surcharge; it's smarter economics disguised as
        good taste.
      </p>

      <h2>The Environmental Equation</h2>
      <p>
        Every product that ends up in a landfill started as someone's impulse buy. The single most impactful
        thing a consumer can do is buy less, but buy better. A pair of sneakers that lasts four years replaces
        eight pairs of fast-fashion trainers — along with all the water, carbon, and chemical dyes that went
        into producing them. Longevity is sustainability in its most practical form.
      </p>

      <blockquote>
        "Buy less, choose well, make it last." — Vivienne Westwood
      </blockquote>

      <h2>The Joy of Fewer, Better Things</h2>
      <p>
        There's a particular pleasure in reaching for an object you genuinely love — the weight of a solid
        timepiece on your wrist, the scent of real sandalwood filling a room, the satisfying click of a
        precision-engineered magnetic clasp. These micro-moments of delight are unavailable to anyone
        stockpiling disposable goods. Quality cultivates gratitude; quantity breeds indifference.
      </p>

      <p>
        We founded Pocket Toto on a simple conviction: you deserve things that last. Not because scarcity is
        stylish, but because your time and attention are worth more than the throwaway economy would have you
        believe.
      </p>
    `,
    coverImage: '/images/products/candle.jpg',
    author: 'Marcus Rivera',
    tags: ['philosophy', 'sustainability'],
    publishedAt: new Date('2026-06-01'),
    createdAt: new Date('2026-05-30'),
  },
  {
    id: 3,
    title: 'Summer Essentials: The 2026 Edit',
    slug: 'summer-essentials-2026',
    excerpt:
      'Our curated picks for a season of sun-soaked style, from UV-blocking aviators to breathable low-tops.',
    content: `
      <h2>Sun-Ready Staples</h2>
      <p>
        Summer 2026 is all about refined nonchalance — pieces that look effortless but are anything but.
        Leading our seasonal edit are the Luxe Aviator Shades, featuring gradient polarized lenses that
        protect your eyes while keeping every sunset Instagram-worthy. Pair them with the Heritage Crossbody
        in natural tan for a look that moves seamlessly from farmers' market to rooftop bar.
      </p>

      <h2>The Sound of Summer</h2>
      <p>
        Whether you're poolside or mid-hike, the Noir Pro Earbuds are the only audio companion you need this
        season. IP55 water resistance handles splashes and sweat, while spatial audio turns your favourite
        playlist into a private concert. Pro tip: enable transparency mode when you want to hear the ocean
        between tracks.
      </p>

      <blockquote>
        "Summer afternoon — summer afternoon; to me those have always been the two most beautiful words in
        the English language." — Henry James
      </blockquote>

      <h2>Footwear That Breathes</h2>
      <p>
        Our Atelier Low-top Sneakers in off-white are the ultimate warm-weather shoe. The unlined
        vegetable-tanned upper breathes naturally, while the Margom sole provides all-day comfort on hot
        pavement. Roll your chinos, skip the socks, and let the leather do the talking.
      </p>

      <p>
        Explore the full summer collection and build a warm-weather wardrobe that's as intentional as it is
        inviting. Because the best summer memories deserve accessories that keep up.
      </p>
    `,
    coverImage: '/images/products/sunglasses.jpg',
    author: 'Sophia Chen',
    tags: ['seasonal', 'guide', 'trending'],
    publishedAt: new Date('2026-05-20'),
    createdAt: new Date('2026-05-18'),
  },
  {
    id: 4,
    title: 'Behind the Craft: How Our Leather Goods Are Made',
    slug: 'behind-the-craft',
    excerpt:
      "A journey through the ateliers and tanneries where Pocket Toto's leather goods come to life.",
    content: `
      <h2>It Starts at the Tannery</h2>
      <p>
        Our leather begins its journey in Tuscany, at a family-run tannery that has operated since 1952. Here,
        raw hides are slowly vegetable-tanned using chestnut bark and mimosa — a process that takes up to
        forty days, compared to the few hours of chrome tanning used by most mass-market brands. The result is
        leather with depth, character, and a lifespan measured in decades, not seasons.
      </p>

      <h2>Hand-Cutting and Stitching</h2>
      <p>
        Every Heritage Crossbody and Vellum Journal is cut by hand using brass-edged templates that haven't
        changed in twenty years. Our artisans select each section of hide individually, reading the grain the
        way a carpenter reads wood. Stitching is done on vintage Singer machines using waxed polyester thread
        that resists UV degradation — so the seams will outlast the leather itself.
      </p>

      <blockquote>
        "The details are not the details. They make the design." — Charles Eames
      </blockquote>

      <h2>Edge Finishing and Quality Control</h2>
      <p>
        After assembly, every edge is hand-painted with multiple coats of water-based edge paint, sanded
        between layers to create a smooth, sealed finish. Hardware — zips, clasps, D-rings — is sourced from
        a single Japanese supplier known for silent, precise mechanisms. Finally, each piece passes a
        thirty-point inspection before it earns the Pocket Toto stamp.
      </p>

      <p>
        This isn't the fastest way to make leather goods, and it certainly isn't the cheapest. But when you
        open a Pocket Toto bag for the first time and feel that heft, smell that leather, and hear the
        satisfying click of the clasp — you'll understand why we wouldn't do it any other way.
      </p>
    `,
    coverImage: '/images/products/leather-bag.jpg',
    author: 'James Okafor',
    tags: ['craftsmanship', 'behind-the-scenes'],
    publishedAt: new Date('2026-05-05'),
    createdAt: new Date('2026-05-03'),
  },
];
