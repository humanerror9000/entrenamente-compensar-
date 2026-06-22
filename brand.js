// ─────────────────────────────────────────────
// brand.js — Mente en Forma (white-label config for Compensar)
//
// This file holds everything about THIS deployment that's likely to
// change per client. index.html reads from window.BRAND instead of
// hardcoding these values, so a future client (e.g. Colsubsidio) can
// ship their own version by swapping this one file.
//
// Cosmetic-only text (page <title> tags, footer wordmark) in the
// exercise files is NOT driven from here — it's edited directly in
// each file, since it's identical everywhere and not worth the extra
// script dependency.
// ─────────────────────────────────────────────

window.BRAND = {

  id: 'compensar',

  // ── Identity ──
  name: 'Mente en Forma',
  // Rendered with the second word emphasized, matching the original
  // logo treatment (e.g. Entrena*Mente* → Mente en *Forma*).
  logoHTML: 'Mente en <em>Forma</em>',
  tagline: 'UN PROGRAMA DE BIENESTAR COMPENSAR',

  // ── Age scope ──
  // This deployment only supports adults and seniors — no child/teen
  // profiles. Profile is derived from age directly; there's no
  // separate "pick your group" screen.
  minAge: 18,
  maxAge: 100,
  seniorAge: 60, // age >= this → 'senior', otherwise 'adult'
  profileFromAge(age) {
    return age >= this.seniorAge ? 'senior' : 'adult';
  },

  // ── Onboarding copy (3 screens: nombre → edad → saludo) ──
  onboarding: {
    s1: {
      title: 'Bienvenid@.<br>¿Cómo te llamas?',
      sub: 'Personalizaremos tu entrenamiento en pocos pasos.',
      placeholder: 'Escribe tu nombre…',
    },
    s2: {
      title: '¿Cuántos años <em>tienes</em>?',
      sub: 'Usamos tu edad para adaptar el ritmo de los ejercicios desde el inicio.',
    },
    s3: {
      sessionNote: 'Así es como entrena tu mente cada día.',
      cardText: 'Empezaremos con unos ejercicios para calentar.',
      closingLine: '¿List@ para poner tu mente en forma hoy?',
      startBtn: 'Comenzar →',
      exploreBtn: 'Ver todos los ejercicios primero',
    },
  },

  // ── First-session warm-up trio ──
  // Keys must match the EXERCISES map in index.html.
  firstSession: ['cats', 'flash', 'saltos'],

  // ── Visual palette (PLACEHOLDER — not Compensar's verified brand spec) ──
  // We don't have an official brand kit yet. This is a plausible
  // orange-led palette based on Compensar's public-facing visual
  // signals, meant to be swapped out the moment a real kit shows up.
  // Only the violet family is overridden — these files already define
  // a separate amber/gold, so we leave those alone to avoid two
  // near-identical oranges fighting for the same job.
  colors: {
    violet:     '#F2761E',
    violetD:    'rgba(242,118,30,0.10)',
    violetB:    'rgba(242,118,30,0.25)',
    violetDeep: '#C2540E',
    bg:         '#FFF8F2',
    bg2:        '#FBEFE3',
    card2:      '#FCF1E6',
  },
};

// Apply the color overrides immediately as CSS custom properties, so
// every file that loads this script gets the same palette without
// needing its own copy of these values.
(function applyBrandColors(){
  const c = window.BRAND.colors;
  const root = document.documentElement.style;
  root.setProperty('--violet', c.violet);
  root.setProperty('--violet-d', c.violetD);
  root.setProperty('--violet-b', c.violetB);
  root.setProperty('--violet-deep', c.violetDeep);
  root.setProperty('--bg', c.bg);
  root.setProperty('--bg2', c.bg2);
  root.setProperty('--card2', c.card2);
})();
