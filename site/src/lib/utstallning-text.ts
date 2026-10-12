// Gränssnittstexter för utställningssidorna, katalogen och inbjudan.
import type { Locale } from './i18n';

export interface UtsText {
  vernissage: string;
  utstallningen: string;
  oppet: string;
  plats: string;
  ring: string;
  laggTillKalender: string;
  visaPaKarta: string;
  text: string;
  oversattNot: string;
  katalogen: string;
  katalogIngress: string;
  inbjudan: string;
  tillUtstallningen: string;
  katalog: string;
  valkommen: string;
  kl: string;
  pagarTill: (datum: string) => string;
  oppetRad: (tider: string[]) => string;
  ovrigaRad: (tel: string) => string;
  delaInbjudan: string;
  lankKopierad: string;
  inbjudanTill: string;
  vernissageText: (datum: string, tid: string, galleri: string) => string;
  bok: {
    foreg: string;
    nasta: string;
    omslag: string;
    baksida: string;
    stang: string;
    forstora: string;
    forstoradBild: string;
    tipsMus: string;
    tipsTouch: string;
  };
}

export const UTS_TEXT: Record<Locale, UtsText> = {
  sv: {
    vernissage: 'Vernissage',
    utstallningen: 'Utställningen',
    oppet: 'Öppet',
    plats: 'Plats',
    ring: 'ring',
    laggTillKalender: 'Lägg till i kalendern',
    visaPaKarta: 'Visa på karta',
    text: 'Text',
    oversattNot: '',
    katalogen: 'Katalogen',
    katalogIngress: 'Bläddra i utställningens katalog.',
    inbjudan: 'Inbjudan',
    tillUtstallningen: 'Till utställningen',
    katalog: 'Katalog',
    valkommen: 'Välkommen på vernissage',
    kl: 'kl.',
    pagarTill: (d) => `Utställningen pågår ${d}.`,
    oppetRad: (t) => `Öppet ${t.join(' och ').toLowerCase()}.`,
    ovrigaRad: (tel) => `För besök vid övriga tider, ring ${tel}.`,
    delaInbjudan: 'Dela inbjudan',
    lankKopierad: 'Länken är kopierad.',
    inbjudanTill: 'Inbjudan till',
    vernissageText: (d, t, g) => `Vernissage ${d.toLowerCase()} kl. ${t} på ${g}.`,
    bok: {
      foreg: 'Föregående sida',
      nasta: 'Nästa sida',
      omslag: 'Omslag',
      baksida: 'Baksida',
      stang: 'Stäng',
      forstora: 'Förstora bilden',
      forstoradBild: 'Förstorad bild',
      tipsMus: 'Klicka på sidan, svep eller använd piltangenterna för att bläddra',
      tipsTouch: 'Svep för att bläddra, tryck på en sida för att se den större',
    },
  },
  no: {
    vernissage: 'Vernissasje',
    utstallningen: 'Utstillingen',
    oppet: 'Åpent',
    plats: 'Sted',
    ring: 'ring',
    laggTillKalender: 'Legg til i kalenderen',
    visaPaKarta: 'Vis på kart',
    text: 'Tekst',
    oversattNot: 'Oversatt fra svensk',
    katalogen: 'Katalogen',
    katalogIngress: 'Bla i utstillingens katalog.',
    inbjudan: 'Invitasjon',
    tillUtstallningen: 'Til utstillingen',
    katalog: 'Katalog',
    valkommen: 'Velkommen til vernissasje',
    kl: 'kl.',
    pagarTill: (d) => `Utstillingen varer ${d}.`,
    oppetRad: (t) => `Åpent ${t.join(' og ').toLowerCase()}.`,
    ovrigaRad: (tel) => `For besøk på andre tider, ring ${tel}.`,
    delaInbjudan: 'Del invitasjonen',
    lankKopierad: 'Lenken er kopiert.',
    inbjudanTill: 'Invitasjon til',
    vernissageText: (d, t, g) => `Vernissasje ${d.toLowerCase()} kl. ${t} på ${g}.`,
    bok: {
      foreg: 'Forrige side',
      nasta: 'Neste side',
      omslag: 'Omslag',
      baksida: 'Bakside',
      stang: 'Lukk',
      forstora: 'Forstørr bildet',
      forstoradBild: 'Forstørret bilde',
      tipsMus: 'Klikk på siden, sveip eller bruk piltastene for å bla',
      tipsTouch: 'Sveip for å bla, trykk på en side for å se den større',
    },
  },
  en: {
    vernissage: 'Opening',
    utstallningen: 'Exhibition',
    oppet: 'Open',
    plats: 'Venue',
    ring: 'call',
    laggTillKalender: 'Add to calendar',
    visaPaKarta: 'Show on map',
    text: 'Text',
    oversattNot: 'Translated from Swedish',
    katalogen: 'The catalogue',
    katalogIngress: 'Browse the exhibition catalogue.',
    inbjudan: 'Invitation',
    tillUtstallningen: 'To the exhibition',
    katalog: 'Catalogue',
    valkommen: 'You are warmly invited to the opening',
    kl: '',
    pagarTill: (d) => `The exhibition runs ${d}.`,
    oppetRad: (t) => `Open ${t.join(' and ')}.`,
    ovrigaRad: (tel) => `To visit at other times, call ${tel}.`,
    delaInbjudan: 'Share invitation',
    lankKopierad: 'The link has been copied.',
    inbjudanTill: 'Invitation to',
    vernissageText: (d, t, g) => `Opening ${d}, ${t}, at ${g}.`,
    bok: {
      foreg: 'Previous page',
      nasta: 'Next page',
      omslag: 'Cover',
      baksida: 'Back cover',
      stang: 'Close',
      forstora: 'Enlarge image',
      forstoradBild: 'Enlarged image',
      tipsMus: 'Click the page, swipe or use the arrow keys to turn pages',
      tipsTouch: 'Swipe to turn the page, tap a page to see it larger',
    },
  },
};

/** "Lördag 17 oktober, kl. 12–16" / "Saturday 17 October, 12–4 pm" */
export function nar(lang: Locale, datum: string, tid: string) {
  const kl = UTS_TEXT[lang].kl;
  return `${datum}, ${kl ? kl + ' ' : ''}${tid}`;
}
