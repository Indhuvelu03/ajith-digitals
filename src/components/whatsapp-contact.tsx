"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919092373329";
const directMessage = "Hi AjiDigitalAds, I would like to discuss a project.";

const whatsappUrl = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3A12.84 12.84 0 0 0 5.1 22.56L3.4 28.8l6.38-1.67A12.94 12.94 0 1 0 16.04 3Zm0 23.7c-1.94 0-3.83-.52-5.47-1.5l-.39-.23-3.78.99 1.01-3.68-.25-.4a10.66 10.66 0 1 1 8.88 4.82Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppContactForm() {
  return (
    <div className="whatsapp-contact-form">
      <a href={whatsappUrl(directMessage)} target="_blank" rel="noreferrer"><WhatsAppMark /><span>Continue on WhatsApp</span><i>↗</i></a>
      <p>Opens a direct conversation with AjiDigitalAds on WhatsApp.</p>
    </div>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`whatsapp-widget ${open ? "is-open" : ""}`} aria-label="WhatsApp contact">
      <div className="whatsapp-widget-panel" aria-hidden={!open}>
        <button type="button" className="whatsapp-widget-close" onClick={() => setOpen(false)} aria-label="Close WhatsApp panel">×</button>
        <span className="whatsapp-widget-mark"><WhatsAppMark /></span>
        <p>Have a project in mind?</p>
        <strong>Let’s talk on WhatsApp.</strong>
        <a href={whatsappUrl(directMessage)} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
      </div>
      <button className="whatsapp-widget-toggle" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close WhatsApp contact" : "Open WhatsApp contact"}><WhatsAppMark /><span>{open ? "×" : "WhatsApp"}</span></button>
    </aside>
  );
}
