// Utställningar som visas under Aktuellt, på svenska, norska och engelska.
// Svenska är grunddata. Norska och engelska anges som översättningar i `sprak`.
// Lägg till en ny utställning genom att lägga ett nytt objekt i UTSTALLNINGAR.
import type { ImageMetadata } from 'astro';
import type { Locale } from './i18n';

import skulptur from '../assets/utstallningar/friktion/skulptur.jpg';
import skogen from '../assets/utstallningar/friktion/skogen.jpg';
import akvarell1 from '../assets/utstallningar/friktion/akvarell-1.jpg';
import akvarell2 from '../assets/utstallningar/friktion/akvarell-2.jpg';
import tillflykt from '../assets/utstallningar/friktion/tillflykt.jpg';
import fagel from '../assets/utstallningar/friktion/fagel.jpg';
import agg from '../assets/utstallningar/friktion/agg.jpg';
import kanske from '../assets/utstallningar/friktion/kanske.jpg';
import panorama from '../assets/utstallningar/friktion/panorama.jpg';
import chat from '../assets/utstallningar/friktion/chat.jpg';
import vingar from '../assets/utstallningar/friktion/vingar.jpg';
import dans from '../assets/utstallningar/friktion/dans.jpg';

/** En sida i katalogen. Boken läses som uppslag: vänster sida, höger sida. */
export type Sida =
  | { typ: 'omslag'; bild: ImageMetadata; alt: string; rubrik: string; underrubrik: string }
  | { typ: 'baksida'; text: string }
  | { typ: 'tom' }
  | { typ: 'text'; text: string }
  | { typ: 'bild'; bild: ImageMetadata; alt: string; skala?: number }
  /** Ett verk som löper över hela uppslaget. Används på två sidor i rad. */
  | { typ: 'uppslag'; bild: ImageMetadata; alt: string; halva: 'v' | 'h' };

export interface Utstallning {
  slug: string;
  titel: string;
  konstnar: string;
  galleri: { namn: string; adress: string; stad: string; webb: string; karta: string };
  /** ISO-datum, lokal tid Stockholm */
  start: string;
  slut: string;
  vernissage: { datum: string; tid: string; startUtc: string; slutUtc: string };
  oppettider: string[];
  ovrigaTider: string;
  telefon: string;
  datumText: string;
  bild: ImageMetadata;
  bildAlt: string;
  /** Strofer, varje strof är en lista med rader */
  dikt: string[][];
  katalog: Sida[];
  katalogNot: string;
  /** Översättningar. Allt som inte anges här visas på svenska. */
  sprak?: Partial<Record<Exclude<Locale, 'sv'>, Oversattning>>;
}

export interface Oversattning {
  vernissage: { datum: string; tid: string };
  oppettider: string[];
  ovrigaTider: string;
  telefon: string;
  datumText: string;
  bildAlt: string;
  katalogNot: string;
  dikt: string[][];
  /** Översättning av bildtexterna i katalogen, med den svenska texten som nyckel */
  alt: Record<string, string>;
}

const ALT_NO: Record<string, string> = {
  'Omslag: skulpturen med fågeln och stolen': 'Omslag: skulpturen med fuglen og stolen',
  'Kolteckning av skog': 'Kulltegning av skog',
  'Akvarell med träd': 'Akvarell med trær',
  'Akvarell med träd och dimma': 'Akvarell med trær og tåke',
  'Installation med hängande grenar och bon av ull': 'Installasjon med hengende greiner og reder av ull',
  'Fågelskulptur i vit sten i en trädgård': 'Fugleskulptur i hvit stein i en hage',
  'Ägg i trä': 'Egg i tre',
  'Målning med svarta penseldrag': 'Maleri med svarte penselstrøk',
  'Stor kolteckning över hela uppslaget': 'Stor kulltegning over hele oppslaget',
  'Skulptur i patinerad brons: ett badkar med två elefanter': 'Skulptur i patinert bronse: et badekar med to elefanter',
  'Två små figurer i brons på en stor sten': 'To små figurer i bronse på en stor stein',
  'Kolteckning': 'Kulltegning',
};

const ALT_EN: Record<string, string> = {
  'Omslag: skulpturen med fågeln och stolen': 'Cover: the sculpture with the bird and the chair',
  'Kolteckning av skog': 'Charcoal drawing of a forest',
  'Akvarell med träd': 'Watercolour with trees',
  'Akvarell med träd och dimma': 'Watercolour with trees and mist',
  'Installation med hängande grenar och bon av ull': 'Installation with hanging branches and woollen nests',
  'Fågelskulptur i vit sten i en trädgård': 'Bird sculpture in white stone in a garden',
  'Ägg i trä': 'Wooden egg',
  'Målning med svarta penseldrag': 'Painting with black brushstrokes',
  'Stor kolteckning över hela uppslaget': 'Large charcoal drawing across the spread',
  'Skulptur i patinerad brons: ett badkar med två elefanter': 'Sculpture in patinated bronze: a bathtub with two elephants',
  'Två små figurer i brons på en stor sten': 'Two small bronze figures on a large stone',
  'Kolteckning': 'Charcoal drawing',
};

export const FRIKTION: Utstallning = {
  slug: 'friktion',
  titel: 'Friktion',
  konstnar: 'Liv Due',
  galleri: {
    namn: 'Ulf Lindell Gallery',
    adress: 'Hornsgatan 44 A',
    stad: 'Stockholm',
    webb: 'https://ulflindell.com',
    karta: 'https://maps.google.com/?q=Ulf+Lindell+Gallery,+Hornsgatan+44A,+Stockholm',
  },
  start: '2026-10-17',
  slut: '2026-11-15',
  vernissage: {
    datum: 'Lördag 17 oktober',
    tid: '12–16',
    // 12.00–16.00 svensk sommartid (UTC+2)
    startUtc: '20261017T100000Z',
    slutUtc: '20261017T140000Z',
  },
  oppettider: ['Onsdagar 12–18', 'Lördagar 12–16'],
  ovrigaTider: 'Övriga tider efter överenskommelse',
  telefon: '070 155 51 47',
  datumText: '17 oktober – 15 november 2026',
  bild: skulptur,
  bildAlt: 'Skulptur i svart metall på en sockel av granit: en fågel som bär en stol på huvudet.',
  dikt: [
    [
      'Daggen lägger sig i små spindelväv i gryningen.',
      'Vita mattor lyser',
      'i ljungen.',
      'Kolet är svart, hårt, sprött, och lätt.',
      'Som aska?',
      'Jag tecknar på stora ark.',
      'Dimman fastnar i skira trådar',
      'som tårar på vår sårbarhet...?',
    ],
    [
      '(Var är jag?)',
      'Ibland stark som en noshörning,',
      'ibland rädd med huvudet i sanden.',
      'En grävmaskinstand har hål som passar för en nagel av glas.',
      'Schackbrädet, skon, stegen. Är det tangon?',
      'Skålen klingar, tar emot.',
      'Tills det rinner över.',
      'En liten elefantkvinna gungar, faller bakåt, lutar sig, skrattar.',
    ],
    [
      'En annan är ute med ryggsäcken och slår undan något.',
      '(Vad ska bort?)',
      'Ulliga fågelbon började som hjärtan, varma mjuka – vissa skrek',
      'Ljudlöst men tystnade efter tvätt.',
      'Fågeln (som Millie kallar gräshoppan) har en stol på huvudet',
      '– för den älskade.',
    ],
  ],
  sprak: {
    no: {
      vernissage: { datum: 'Lørdag 17. oktober', tid: '12–16' },
      oppettider: ['Onsdager 12–18', 'Lørdager 12–16'],
      ovrigaTider: 'Andre tider etter avtale',
      telefon: '+46 70 155 51 47',
      datumText: '17. oktober – 15. november 2026',
      bildAlt: 'Skulptur i svart metall på en sokkel av granitt: en fugl som bærer en stol på hodet.',
      katalogNot: 'Katalogen finnes også i noen eksemplarer som kan blas i på galleriet.',
      alt: ALT_NO,
      dikt: [
      [
        'Duggen legger seg i små spindelvev i grålysningen.',
        'Hvite tepper lyser',
        'i lyngen.',
        'Kullet er svart, hardt, sprøtt, og lett.',
        'Som aske?',
        'Jeg tegner på store ark.',
        'Tåken setter seg fast i florlette tråder',
        'som tårer på vår sårbarhet...?',
      ],
      [
        '(Hvor er jeg?)',
        'Iblant sterk som et neshorn,',
        'iblant redd med hodet i sanden.',
        'En gravemaskintann har hull som passer til en negl av glass.',
        'Sjakkbrettet, skoen, stigen. Er det tangoen?',
        'Skålen klinger, tar imot.',
        'Til det renner over.',
        'En liten elefantkvinne gynger, faller bakover, lener seg, ler.',
      ],
      [
        'En annen er ute med ryggsekken og slår unna noe.',
        '(Hva skal bort?)',
        'Ullne fuglereder begynte som hjerter, varme myke – noen skrek',
        'Lydløst men stilnet etter vask.',
        'Fuglen (som Millie kaller gresshoppen) har en stol på hodet',
        '– for den elskede.',
      ],
      ],
    },
    en: {
      vernissage: { datum: 'Saturday 17 October', tid: '12–4 pm' },
      oppettider: ['Wednesdays 12–6 pm', 'Saturdays 12–4 pm'],
      ovrigaTider: 'Other times by appointment',
      telefon: '+46 70 155 51 47',
      datumText: '17 October – 15 November 2026',
      bildAlt: 'Sculpture in black metal on a granite base: a bird carrying a chair on its head.',
      katalogNot: 'A few copies of the catalogue are also available to browse at the gallery.',
      alt: ALT_EN,
      dikt: [
      [
        'The dew settles in small cobwebs at dawn.',
        'White carpets glow',
        'in the heather.',
        'The charcoal is black, hard, brittle, and light.',
        'Like ash?',
        'I draw on large sheets.',
        'The mist catches in gossamer threads',
        'like tears on our vulnerability...?',
      ],
      [
        '(Where am I?)',
        'Sometimes strong as a rhinoceros,',
        'sometimes afraid with my head in the sand.',
        'An excavator tooth has holes that fit a fingernail of glass.',
        'The chessboard, the shoe, the ladder. Is it the tango?',
        'The bowl rings, receives.',
        'Until it overflows.',
        'A little elephant woman sways, falls back, leans, laughs.',
      ],
      [
        'Another is out with the rucksack, knocking something aside.',
        '(What has to go?)',
        'Woolly birds’ nests began as hearts, warm soft – some screamed',
        'Soundlessly but fell silent after washing.',
        'The bird (which Millie calls the grasshopper) has a chair on its head',
        '– for the beloved.',
      ],
      ],
    },
  },
  katalog: [
    {
      typ: 'omslag',
      bild: skulptur,
      alt: 'Omslag: skulpturen med fågeln och stolen',
      rubrik: 'FRIKTION',
      underrubrik: 'LIV DUE  Ulf Lindell Gallery',
    },
    { typ: 'tom' },
    { typ: 'text', text: 'FRIKTION' },
    { typ: 'text', text: 'Skogen' },
    { typ: 'bild', bild: skogen, alt: 'Kolteckning av skog' },
    { typ: 'bild', bild: akvarell1, alt: 'Akvarell med träd' },
    { typ: 'bild', bild: akvarell2, alt: 'Akvarell med träd och dimma' },
    { typ: 'text', text: 'Tillflyktsplatser för\nförvildade tankar' },
    { typ: 'bild', bild: tillflykt, alt: 'Installation med hängande grenar och bon av ull' },
    { typ: 'bild', bild: fagel, alt: 'Fågelskulptur i vit sten i en trädgård' },
    { typ: 'bild', bild: agg, alt: 'Ägg i trä', skala: 0.42 },
    { typ: 'text', text: 'kanske' },
    { typ: 'bild', bild: kanske, alt: 'Målning med svarta penseldrag' },
    { typ: 'uppslag', bild: panorama, alt: 'Stor kolteckning över hela uppslaget', halva: 'v' },
    { typ: 'uppslag', bild: panorama, alt: 'Stor kolteckning över hela uppslaget', halva: 'h' },
    { typ: 'bild', bild: chat, alt: 'Skulptur i patinerad brons: ett badkar med två elefanter', skala: 0.84 },
    { typ: 'text', text: 'chat' },
    { typ: 'text', text: 'Om jag hade vingar...' },
    { typ: 'bild', bild: vingar, alt: 'Två små figurer i brons på en stor sten', skala: 0.88 },
    { typ: 'text', text: 'Dans' },
    { typ: 'bild', bild: dans, alt: 'Kolteckning' },
    { typ: 'baksida', text: 'LIV DUE' },
  ],
  katalogNot: 'Katalogen finns också i några exemplar att bläddra i på galleriet.',
};

export const UTSTALLNINGAR: Utstallning[] = [FRIKTION];

export type Status = 'kommande' | 'pagar' | 'avslutad';

/** Status räknat i svensk tid. Används vid bygget och uppdateras i webbläsaren. */
export function status(u: Utstallning, nu = new Date()): Status {
  const idag = nu.toLocaleDateString('sv-SE', { timeZone: 'Europe/Stockholm' });
  if (idag < u.start) return 'kommande';
  if (idag > u.slut) return 'avslutad';
  return 'pagar';
}

export const STATUS_TEXT: Record<Locale, Record<Status, string>> = {
  sv: { kommande: 'Kommande utställning', pagar: 'Pågående utställning', avslutad: 'Tidigare utställning' },
  no: { kommande: 'Kommende utstilling', pagar: 'Pågående utstilling', avslutad: 'Tidligere utstilling' },
  en: { kommande: 'Upcoming exhibition', pagar: 'Current exhibition', avslutad: 'Past exhibition' },
};

/** Utställningen med texter på valt språk. Det som saknar översättning visas på svenska. */
export function lokal(u: Utstallning, lang: Locale): Utstallning {
  const o = lang === 'sv' ? undefined : u.sprak?.[lang];
  if (!o) return u;
  return {
    ...u,
    vernissage: { ...u.vernissage, ...o.vernissage },
    oppettider: o.oppettider,
    ovrigaTider: o.ovrigaTider,
    telefon: o.telefon,
    datumText: o.datumText,
    bildAlt: o.bildAlt,
    katalogNot: o.katalogNot,
    dikt: o.dikt,
    katalog: u.katalog.map((s) => ('alt' in s ? { ...s, alt: o.alt[s.alt] ?? s.alt } : s)),
  };
}

/** Utställningen som Aktuellt pekar på: den första som inte har stängt, annars den senaste. */
export function aktuellUtstallning(nu = new Date()): Utstallning {
  return UTSTALLNINGAR.find((u) => status(u, nu) !== 'avslutad') ?? UTSTALLNINGAR[0];
}
