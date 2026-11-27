import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

type PageContent = {
  nav: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  heroImage: string;
  heroPosition: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionCopy: string;
  pillars: { number: string; title: string; copy: string }[];
  experiences: { category: string; title: string; copy: string; image: string }[];
  closing: string;
  cta: string;
  message: string;
};

const pages: Record<string, PageContent> = {
  adventures: {
    nav: "ADVENTURES",
    eyebrow: "THE ROAD IS YOURS",
    title: "GO BEYOND",
    emphasis: "THE EXPECTED.",
    intro: "Motorcycle and automotive journeys built around extraordinary roads, remote places and experiences worth remembering.",
    heroImage: "/hero-image.jpg",
    heroPosition: "center 48%",
    sectionEyebrow: "MORE THAN DISTANCE",
    sectionTitle: "Journeys with a reason.",
    sectionCopy: "Every Crossborder adventure is shaped by considered route planning, experienced leadership and the details that turn a ride into a story.",
    pillars: [
      { number: "01", title: "Adventure motorcycle tours", copy: "Curated rides across India's remarkable mountain roads, remote valleys and changing landscapes." },
      { number: "02", title: "Automotive & 4×4 experiences", copy: "Driving experiences and off-road explorations designed around terrain, capability and discovery." },
      { number: "03", title: "International expeditions", copy: "Go further with thoughtfully planned journeys beyond familiar borders and well-worn routes." }
    ],
    experiences: [
      { category: "HIGH ALTITUDE · INDIA", title: "The Himalayan routes", copy: "Mountain passes, high-country roads and the landscapes of Ladakh and the western Himalayas.", image: "/hero-image.jpg" },
      { category: "REMOTE EAST · INDIA", title: "The eastern frontier", copy: "Discover the lesser-travelled roads and cultural richness of Arunachal Pradesh and the Northeast.", image: "/hero-vietnam.jpg" },
      { category: "BEYOND INDIA", title: "International journeys", copy: "New roads, new perspectives and the right people to share the journey with.", image: "/hero-vietnam.jpg" }
    ],
    closing: "The best journeys begin with a conversation.",
    cta: "PLAN YOUR ADVENTURE",
    message: "Hello Crossborder Adventures, I’d like to enquire about an upcoming adventure."
  },
  destinations: {
    nav: "DESTINATIONS",
    eyebrow: "FIND YOUR HORIZON",
    title: "PLACES THAT",
    emphasis: "STAY WITH YOU.",
    intro: "From high Himalayan passes to the eastern frontier and roads beyond India—explore destinations chosen for the journey they make possible.",
    heroImage: "/hero-vietnam.jpg",
    heroPosition: "center 48%",
    sectionEyebrow: "THE MAP IS ONLY THE BEGINNING",
    sectionTitle: "A destination. A thousand details.",
    sectionCopy: "We look beyond the pin on the map—considering the roads, seasons, local culture, logistics and experiences that make each place worth the ride.",
    pillars: [
      { number: "01", title: "The Himalayas", copy: "Ladakh, Spiti and the high mountain corridors where every turn changes the view." },
      { number: "02", title: "The eastern frontier", copy: "Arunachal Pradesh and the Northeast—remote valleys, borderland roads and living traditions." },
      { number: "03", title: "International roads", copy: "Explore journeys beyond India, including the varied landscapes and routes of Vietnam." }
    ],
    experiences: [
      { category: "INDIA · HIGH ALTITUDE", title: "Ladakh & the Himalayas", copy: "Big landscapes, high passes and the perspective that comes from travelling slowly.", image: "/hero-image.jpg" },
      { category: "INDIA · THE NORTHEAST", title: "Arunachal Pradesh", copy: "A remarkable eastern frontier of mountain roads, remote communities and cultural discovery.", image: "/hero-vietnam.jpg" },
      { category: "INTERNATIONAL", title: "Vietnam", copy: "A different rhythm of travel, from winding mountain roads to immersive local experiences.", image: "/hero-vietnam.jpg" }
    ],
    closing: "Tell us the places you’ve been dreaming about.",
    cta: "EXPLORE DESTINATIONS",
    message: "Hello Crossborder Adventures, I’d like to explore destination options for a journey."
  },
  training: {
    nav: "TRAINING",
    eyebrow: "SKILL BUILDS FREEDOM",
    title: "RIDE WITH",
    emphasis: "CONFIDENCE.",
    intro: "Practical off-road and adventure riding training that helps riders build the skills, judgement and confidence to travel further.",
    heroImage: "/hero-image.jpg",
    heroPosition: "center 55%",
    sectionEyebrow: "FROM FIRST TRAIL TO BIGGER JOURNEYS",
    sectionTitle: "Capability before kilometres.",
    sectionCopy: "Good training is progressive, practical and grounded in real riding conditions. Build a stronger foundation before taking on more demanding terrain and longer expeditions.",
    pillars: [
      { number: "01", title: "Off-road fundamentals", copy: "Develop core techniques, body position, balance, braking and control on loose and uneven surfaces." },
      { number: "02", title: "Trail to tour", copy: "Understand how off-road skills translate into the demands of multi-day adventure riding." },
      { number: "03", title: "Team & brand programmes", copy: "Purpose-built rider development and experiential training for dealerships, OEMs and groups." }
    ],
    experiences: [
      { category: "FOUNDATION", title: "Off-road basics", copy: "A structured introduction to terrain awareness, machine control and essential trail techniques.", image: "/hero-image.jpg" },
      { category: "MASTERCLASS", title: "From trail to tour", copy: "Bridge individual riding skills with the planning and judgement needed for multi-day expeditions.", image: "/hero-vietnam.jpg" },
      { category: "CUSTOM PROGRAMMES", title: "Training for teams", copy: "Talk to us about tailored sessions for rider communities, dealerships and corporate groups.", image: "/hero-image.jpg" }
    ],
    closing: "Build the skills. Then follow the road.",
    cta: "ENQUIRE ABOUT TRAINING",
    message: "Hello Crossborder Adventures, I’d like to enquire about adventure riding training."
  },
  "private-experiences": {
    nav: "PRIVATE EXPERIENCES",
    eyebrow: "YOUR JOURNEY, YOUR TERMS",
    title: "MADE FOR",
    emphasis: "YOUR KIND OF ROAD.",
    intro: "Private motorcycle, automotive and 4×4 experiences shaped around your interests, pace, group and idea of a perfect journey.",
    heroImage: "/hero-image.jpg",
    heroPosition: "center 50%",
    sectionEyebrow: "PERSONAL BY DESIGN",
    sectionTitle: "Not a package. A considered plan.",
    sectionCopy: "Start with the experience you want. We bring together route intelligence, practical logistics, trusted leadership and thoughtful local moments to shape the journey around you.",
    pillars: [
      { number: "01", title: "A route around you", copy: "Choose the destination, pace, duration and kind of terrain that feels right for your group." },
      { number: "02", title: "The right level of support", copy: "Discuss ride leadership, support vehicles, accommodation and logistics to suit the journey." },
      { number: "03", title: "Experiences beyond the road", copy: "Make room for local food, culture, heritage and meaningful encounters along the way." }
    ],
    experiences: [
      { category: "PRIVATE MOTORCYCLE JOURNEYS", title: "Ride your own route", copy: "A personally planned motorcycle journey for friends, family or a private riding group.", image: "/hero-image.jpg" },
      { category: "PRIVATE DRIVING EXPERIENCES", title: "Take the longer way", copy: "A considered driving or 4×4 experience shaped around roads, terrain and time together.", image: "/hero-vietnam.jpg" },
      { category: "SPECIAL INTEREST", title: "A journey with a purpose", copy: "Build an itinerary around photography, culture, food, heritage or a personal milestone.", image: "/hero-image.jpg" }
    ],
    closing: "Tell us what an unforgettable journey looks like to you.",
    cta: "PLAN A PRIVATE EXPERIENCE",
    message: "Hello Crossborder Adventures, I’d like to plan a private experience."
  },
  "for-brands": {
    nav: "FOR BRANDS",
    eyebrow: "BRING PEOPLE CLOSER TO THE BRAND",
    title: "EXPERIENCES",
    emphasis: "THAT CONNECT.",
    intro: "Premium automotive and motorcycle activations, customer rides, training and motorsport experiences designed with care from first briefing to final kilometre.",
    heroImage: "/hero-vietnam.jpg",
    heroPosition: "center 50%",
    sectionEyebrow: "BUILT AROUND YOUR OBJECTIVE",
    sectionTitle: "From brief to road-ready.",
    sectionCopy: "We combine adventure expertise, operational planning and on-ground delivery to create brand experiences that are engaging for participants and dependable for partners.",
    pillars: [
      { number: "01", title: "OEM & dealership activations", copy: "Customer rides, product experiences, dealer engagement and launch events that put the machine in its element." },
      { number: "02", title: "Corporate experiences", copy: "Thoughtfully produced drives, rides and outdoor experiences for teams, clients and communities." },
      { number: "03", title: "Motorsport & training", copy: "Rallies, TSD formats, rider development and specialist programmes supported by experienced professionals." }
    ],
    experiences: [
      { category: "CUSTOMER & DEALER ENGAGEMENT", title: "Make the product the experience", copy: "Create meaningful time on the road with customer rides, dealership programmes and launches.", image: "/hero-image.jpg" },
      { category: "CORPORATE & COMMUNITY", title: "Bring people together", copy: "Shared challenges and memorable experiences designed around your audience and objectives.", image: "/hero-vietnam.jpg" },
      { category: "MOTORSPORT & SKILLS", title: "Built on expertise", copy: "Explore rally formats, technical events, off-road training and specialist event operations.", image: "/hero-image.jpg" }
    ],
    closing: "Have a brief in mind? Let’s put it on the road.",
    cta: "DISCUSS A PARTNERSHIP",
    message: "Hello Crossborder Adventures, I’d like to discuss a brand, dealership or corporate experience."
  }
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? {
    title: `${page.nav} | Crossborder Adventures`,
    description: page.intro,
  } : {};
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const wa = "919356378178";
  const enquiry = `https://wa.me/${wa}?text=${encodeURIComponent(page.message)}`;

  return (
    <>
      <SiteHeader />
      <main className="section-page">
        <section className="section-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(8,10,11,.94) 0%,rgba(8,10,11,.72) 43%,rgba(8,10,11,.18) 100%),linear-gradient(0deg,rgba(8,10,11,.52),transparent 38%),url('${page.heroImage}')`, backgroundPosition: page.heroPosition }}>
          <div className="section-hero-content">
            <p className="eyebrow light"><i /> {page.eyebrow}</p>
            <h1>{page.title}<br /><em>{page.emphasis}</em></h1>
            <p>{page.intro}</p>
            <div className="section-hero-actions">
              <a className="button gold" href={enquiry}>{page.cta} <b>↗</b></a>
              <a className="button hero-secondary" href="#discover">DISCOVER MORE</a>
            </div>
          </div>
          <span className="section-hero-coordinate">CROSSBORDER · INDIA</span>
          <a className="scroll-explore" href="#discover"><span>SCROLL TO EXPLORE</span><i aria-hidden="true">⌄</i></a>
        </section>
        <section id="discover" className="section-page-intro section-pad">
          <p className="eyebrow"><i /> {page.sectionEyebrow}</p>
          <div className="section-page-intro-grid">
            <h2>{page.sectionTitle}</h2>
            <p>{page.sectionCopy}</p>
          </div>
        </section>
        <section className="section-page-pillars">
          {page.pillars.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <b>↗</b>
            </article>
          ))}
        </section>
        <section className="section-page-collection section-pad">
          <div className="section-head">
            <div><p className="eyebrow"><i /> EXPLORE CROSSBORDER</p><h2>Find your <em>next horizon.</em></h2></div>
            <a className="arrow-link" href="/#contact">Talk to our team <span>↗</span></a>
          </div>
          <div className="section-page-cards">
            {page.experiences.map((item, index) => (
              <article className="section-page-card" key={item.title}>
                <div className="section-page-card-image" style={{ backgroundImage: `linear-gradient(0deg,rgba(8,10,11,.56),transparent 60%),url('${item.image}')` }}>
                  <span>0{index + 1} / 03</span><b>↗</b>
                </div>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section-page-cta">
          <p className="eyebrow light"><i /> YOUR NEXT STORY STARTS HERE</p>
          <h2>{page.closing}</h2>
          <a className="button gold" href={enquiry}>{page.cta} <b>↗</b></a>
        </section>
      </main>
      <SiteFooter />
      <div className="mobile-bar">
        <a href="/adventures">EXPLORE</a>
        <a className="mobile-bar-primary" href={enquiry}>ENQUIRE NOW <span>↗</span></a>
        <a href={`https://wa.me/${wa}`}>WHATSAPP</a>
      </div>
    </>
  );
}
