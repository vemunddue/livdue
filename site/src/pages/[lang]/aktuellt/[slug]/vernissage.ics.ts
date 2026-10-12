import type { APIRoute } from 'astro';
import { UTSTALLNINGAR, lokal, type Utstallning } from '../../../../lib/utstallningar';
import { UTS_TEXT } from '../../../../lib/utstallning-text';
import { LOCALES, type Locale } from '../../../../lib/i18n';

export function getStaticPaths() {
  return LOCALES.flatMap((lang) => UTSTALLNINGAR.map((u) => ({ params: { lang, slug: u.slug }, props: { u } })));
}

export const GET: APIRoute = ({ props, params }) => {
  const lang = params.lang as Locale;
  const u = lokal(props.u as Utstallning, lang);
  const t = UTS_TEXT[lang];
  const g = u.galleri;
  const rader = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//livdue.com//Utstallning//SV',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:vernissage-${u.slug}@livdue.com`,
    `DTSTAMP:${u.vernissage.startUtc}`,
    `DTSTART:${u.vernissage.startUtc}`,
    `DTEND:${u.vernissage.slutUtc}`,
    `SUMMARY:${t.vernissage}: ${u.konstnar} – ${u.titel}`,
    `LOCATION:${g.namn}\\, ${g.adress}\\, ${g.stad}`,
    `DESCRIPTION:${t.pagarTill(u.datumText)} ${t.oppetRad(u.oppettider)}`.replace(/,/g, '\\,'),
    `URL:https://livdue.com/${lang}/aktuellt/${u.slug}/`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Response(rader.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
