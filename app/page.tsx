"use client";

import { useState } from "react";

const wa = "919356378178";
const experiences = [
  { no: "01", category: "MOTORCYCLE · INDIA", name: "Himalayan high country", place: "Ladakh, India", days: "8 DAYS", image: "photo-1464822759023-fed622ff2c3b", note: "A world above the clouds." },
  { no: "02", category: "MOTORCYCLE · INDIA", name: "Into the wild east", place: "Arunachal Pradesh, India", days: "7 DAYS", image: "photo-1519681393784-d120267933ba", note: "Follow the road less travelled." },
  { no: "03", category: "MOTORCYCLE · INTERNATIONAL", name: "Vietnam, by the long way", place: "Northern Vietnam", days: "9 DAYS", image: "photo-1500530855697-b586d89ba3ee", note: "A different rhythm. A different road." },
];

function waLink(message: string) { return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`; }

export default function Home() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const questions = [
    { title: "What do you ride?", options: ["Adventure motorcycle", "Road motorcycle", "Car / 4×4", "I’m looking for a brand or team"] },
    { title: "How much time do you have?", options: ["A weekend", "3–5 days", "A week or more", "Let’s plan around the destination"] },
    { title: "Where do you want the road to take you?", options: ["The Himalayas", "India, somewhere new", "Beyond India", "I’d like a recommendation"] },
    { title: "What kind of experience feels right?", options: ["A social group ride", "A remote expedition", "A private journey", "A brand or corporate experience"] },
  ];
  function choose(answer: string) {
    const updated = [...answers.slice(0, step), answer];
    setAnswers(updated);
    if (step < questions.length - 1) setStep(step + 1);
    else window.location.href = waLink(`Hello Crossborder Adventures, help me find my adventure. ${updated.map((a, i) => `Q${i + 1}: ${a}`).join(" | ")}`);
  }

  return <>
    <header className="topbar"><a className="wordmark" href="#home" aria-label="Crossborder Adventures home"><span className="mark">C<span>↗</span></span><span>CROSSBORDER<small>ADVENTURES · INDIA</small></span></a><nav><a href="#adventures">Adventures</a><a href="#brands">For brands</a><a href="#story">Our approach</a></nav><a className="nav-cta" href="#contact">Plan an adventure <span>↗</span></a><button className="menu" onClick={() => setOpen(true)} aria-label="Find your adventure">☰</button></header>
    <main>
      <section id="home" className="hero">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow light"><i /> BUILT FOR THE WAY OUT THERE</p><h1>Some roads<br />stay with you Always<span>.</span></h1><p className="hero-copy">Premium motorcycle and automotive adventures, built around extraordinary roads, remote places and the people you meet along the way.</p><div className="hero-actions"><button className="button gold" onClick={() => { setOpen(true); setStep(0); setAnswers([]); }}>Find your adventure <b>↗</b></button><a className="text-link" href="#adventures">Explore the journeys <span>↓</span></a></div></div>
        <div className="hero-bottom"><span>18°31′N&nbsp; 73°51′E&nbsp; · &nbsp;PUNE, INDIA</span><span>GO FURTHER. COME BACK DIFFERENT.</span><span>01 / 04</span></div>
        <div className="vertical-note">CROSSBORDER · PUNE, INDIA</div>
      </section>
      <section className="intro section-pad"><div className="intro-label"><span className="eyebrow"><i /> A DIFFERENT KIND OF JOURNEY</span><span className="index">01 — 04</span></div><div className="intro-body"><h2>Not just a ride.<br /><em>A story you come back with.</em></h2><div className="intro-right"><p>We turn touring into experiences. Every journey is shaped by route intelligence, thoughtful planning and a moment you couldn’t have found on your own.</p><a href="#story" className="arrow-link">The Crossborder way <span>↗</span></a></div></div></section>
      <section id="adventures" className="adventures section-pad"><div className="section-head"><div><p className="eyebrow"><i /> THE ROAD IS YOURS</p><h2>Choose your <em>horizon.</em></h2></div><a className="arrow-link" href="#contact">See all experiences <span>↗</span></a></div><div className="experience-grid">{experiences.map((e) => <article className="experience" key={e.no}><a href="#contact" className="experience-image" style={{ backgroundImage: `url(https://images.unsplash.com/${e.image}?auto=format&fit=crop&w=1200&q=85)` }}><span className="card-number">{e.no} / 03</span><span className="card-arrow">↗</span><span className="image-caption">{e.note}</span></a><div className="experience-meta"><span>{e.category}</span><span>{e.days}</span></div><h3>{e.name}</h3><p>{e.place}</p></article>)}</div><div className="availability"><span className="pulse" /> NEW JOURNEYS ARE TAKING SHAPE <button onClick={() => setOpen(true)}>Tell us what you’re looking for <span>↗</span></button></div></section>
      <section className="manifesto"><div className="manifesto-image" /><div className="manifesto-content"><p className="eyebrow light"><i /> THE THOUGHT BEHIND EVERY TURN</p><h2>Well planned.<br />Never <em>ordinary.</em></h2><p>Remote roads ask for more than a route. Our team brings the preparation, people and on-ground support that let you be fully present for the ride.</p><a href="#story" className="light-link">How we make it happen <span>↗</span></a><span className="manifesto-coord">32°16′N&nbsp; 78°02′E</span></div></section>
      <section id="story" className="principles section-pad"><div className="principles-lead"><p className="eyebrow"><i /> OUR PROMISE, IN PRACTICE</p><h2>The details make<br />the <em>difference.</em></h2><p>Adventure should feel expansive. The work behind it should feel considered.</p></div><div className="principle-list"><article><span>01</span><div><h3>Routes with a reason</h3><p>Roads and detours chosen for what they reveal—not just where they lead.</p></div><b>↗</b></article><article><span>02</span><div><h3>Prepared for the unexpected</h3><p>Experienced ride leaders, dependable support and thoughtful contingency planning.</p></div><b>↗</b></article><article><span>03</span><div><h3>People make the journey</h3><p>Small groups, shared stories and the kind of connections that outlast the trip.</p></div><b>↗</b></article></div></section>
      <section id="brands" className="brands"><div className="brands-photo" /><div className="brands-panel"><p className="eyebrow light"><i /> FOR THE PEOPLE BEHIND THE BADGE</p><p className="brands-kicker">OEM · DEALERSHIP · CORPORATE</p><h2>Make your next<br />experience <em>mean more.</em></h2><p>From customer rides and launches to rallies, training and roadshows—we design brand experiences that bring people closer to what you build.</p><a className="button outline" href={waLink("Hello Crossborder Adventures, I’d like to plan a brand or corporate experience.")}>Plan an experience <b>↗</b></a><div className="brand-services"><span>PRODUCT LAUNCHES</span><span>DEALER RIDES</span><span>ROADSHOWS</span><span>TRAINING</span><span>RALLIES & MORE</span></div></div></section>
      <section className="proof section-pad"><div><span className="proof-number">04<span>+</span></span><p>YEARS MAKING<br />ROOM FOR ADVENTURE</p></div><div><span className="proof-number">75<span>+</span></span><p>INTERNATIONAL<br />PODIUM FINISHES*</p></div><div><span className="proof-number">05</span><p>OEM PARTNERSHIPS*</p></div><small>*Business proof points supplied in the discovery brief. Confirm exact wording and evidence before launch.</small></section>
      <section id="contact" className="closing"><p className="eyebrow light"><i /> YOUR NEXT STORY STARTS HERE</p><h2>Where do you<br /><em>want to go?</em></h2><p>A weekend away, a road across the mountains, a journey built just for you.</p><div><button className="button gold" onClick={() => { setOpen(true); setStep(0); setAnswers([]); }}>Let’s find your adventure <b>↗</b></button><a className="text-link" href={waLink("Hello Crossborder Adventures, I'd like to talk about an upcoming adventure.")}>Or chat on WhatsApp <span>↗</span></a></div></section>
    </main>
    <footer><a className="wordmark" href="#home"><span className="mark">C<span>↗</span></span><span>CROSSBORDER<small>ADVENTURES · INDIA</small></span></a><div className="footer-contact"><a href="tel:+919356378178">+91 93563 78178</a><a href="mailto:crossborderadventures@gmail.com">crossborderadventures@gmail.com</a><span>Pune, Maharashtra, India</span></div><div className="footer-social"><a href="https://instagram.com/crossborderadventures" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href={waLink("Hello Crossborder Adventures!")}>WHATSAPP ↗</a></div><div className="footer-bottom"><span>© 2026 CROSSBORDER ADVENTURES</span><span>MADE FOR THE WAY OUT THERE.</span><a href="mailto:crossborderadventures@gmail.com?subject=Privacy%20policy">PRIVACY · CONTACT</a></div></footer>
    <div className="mobile-bar"><a href="#adventures">EXPLORE</a><button onClick={() => { setOpen(true); setStep(0); setAnswers([]); }}>FIND YOUR ADVENTURE <span>↗</span></button><a href={waLink("Hello Crossborder Adventures!")}>WHATSAPP</a></div>
    {open && <div className="quiz-backdrop" role="dialog" aria-modal="true" aria-label="Adventure matchmaker"><div className="quiz"><button className="quiz-close" onClick={() => setOpen(false)} aria-label="Close">×</button><p className="eyebrow"><i /> FIND YOUR ADVENTURE</p><div className="quiz-progress"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div><span className="quiz-step">0{step + 1} / 0{questions.length}</span><h2>{questions[step].title}</h2><div className="quiz-options">{questions[step].options.map(o => <button key={o} onClick={() => choose(o)}>{o}<span>↗</span></button>)}</div><p className="quiz-foot">A few quick answers help us point you in the right direction.</p></div></div>}
  </>;
}
