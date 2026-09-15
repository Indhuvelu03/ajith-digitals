"use client";

import { useState } from "react";

const testimonials = [
  { name: "Priya Raman", role: "Retail founder", quote: "AjiDigitalAds gave us a clearer brand, a faster store and a launch that finally felt joined up.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=85" },
  { name: "Arun Kumar", role: "Operations director", quote: "They translated a complicated internal process into software our team understood from the first day.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85" },
  { name: "Meera Shah", role: "Marketing lead", quote: "The strategy was focused, the creative was distinctive and every decision had a practical reason behind it.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85" },
  { name: "Naveen Raj", role: "SaaS founder", quote: "We moved from scattered ideas to a credible product story and a website that makes the value immediately clear.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85" },
  { name: "Divya Menon", role: "Learning manager", quote: "The training was practical, generous and immediately useful—the team started applying it the following morning.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=85" },
  { name: "Rahul Iyer", role: "Brand director", quote: "They found the simple idea inside a difficult brief and turned it into work our whole organisation could stand behind.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=85" },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonial-label shell">
        <p className="eyebrow">Client perspectives</p>
        <h2 id="testimonials-title">The work is measured<br/>by what it <em>changes.</em></h2>
      </div>
      <div className="testimonial-stage">
        <div className="testimonial-rings" aria-hidden />
        <blockquote key={testimonial.name} className="testimonial-quote">
          <span aria-hidden>“</span>
          <p>{testimonial.quote}</p>
          <footer><strong>{testimonial.name}</strong><small>{testimonial.role}</small></footer>
        </blockquote>
        <div className="testimonial-people">
          {testimonials.map((item, index) => (
            <button
              className={`testimonial-person testimonial-person-${index + 1}${active === index ? " is-active" : ""}`}
              key={item.name}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-label={`Read testimonial from ${item.name}`}
              aria-pressed={active === index}
            >
              <img src={item.image} alt="" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
