# Štěpán Stehlík – osobní web

Osobní prezentační web zaměřený na QA automatizaci, API testování a tvorbu moderních firemních webů. Jednostránková aplikace s responzivním designem, přepínáním barevného motivu a jazyka (CZ/EN).

## Technologie

| Technologie | Verze |
|---|---|
| Next.js (App Router) | 16.4.3 |
| React | 19.2.4 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Lucide React / React Icons | – |

## Požadavky

- Node.js **20.9.0 nebo novější** (doporučeno 22 LTS)
- npm

## Lokální spuštění

```bash
npm install
npm run dev
```

Web běží na [http://localhost:3000](http://localhost:3000).

## Skripty

| Příkaz | Popis |
|---|---|
| `npm run dev` | Vývojový server s hot reloadem |
| `npm run build` | Produkční build |
| `npm run start` | Spuštění produkčního buildu |
| `npm run lint` | ESLint kontrola |

## Struktura projektu

```
app/
  layout.tsx        # Root layout, fonty, providery
  page.tsx          # Složení sekcí stránky
  globals.css       # Tailwind a design systém

src/
  components/       # Sekce stránky (hero, služby, o mně…)
  providers/        # ThemeProvider a LanguageProvider
  design-system/    # Definice barevných motivů
  i18n/             # Český a anglický slovník
  ui/               # Znovupoužitelné UI komponenty a animace
```

## Přizpůsobení

- **Motivy:** `src/design-system/themes.ts` – barvy a náhledy; názvy a popisy v `src/i18n/cs.ts` a `src/i18n/en.ts`. Nový motiv je potřeba přidat do `themeIds` i do obou slovníků.
- **Jazyky:** `src/i18n/cs.ts` a `src/i18n/en.ts` – texty; nový jazyk se registruje v `src/i18n/index.ts` a `src/ui/languageSelector.tsx`.
- **Obsah stránky:** jednotlivé sekce v `src/components/`.
- **Kontaktní údaje:** odkazy na e-mail, LinkedIn a GitHub v `src/components/contact.tsx`.

Volitelný motiv a jazyk se ukládají do `localStorage` prohlížeče.

## Nasazení na Vercel

Projekt je připraven k nasazení na [Vercel](https://vercel.com):

1. Vytvoř nový projekt a propoj repository.
2. Framework preset nech na **Next.js** – Vercel ho rozpozná automaticky.
3. Build command ponech `npm run build`, output directory nech prázdné (Vercel použije výchozí `.next`).
4. V **Settings → General → Node.js Version** nastav **22.x**.
5. Projekt nevyžaduje žádné environment variables.

Každý push do produkční větve spustí produkční deploy. Větve a pull requesty automaticky vytvářejí preview deploymenty. Vlastní doménu lze nastavit v **Settings → Domains**.

## Poznámky

- Projekt neobsahuje databázi ani API routes – jde o staticky generovanou stránku.
- Fonty Geist se načítají přes `next/font` a při buildu se optimalizují.
- Pro produkci je vhodné dokončit metadata (title, description, Open Graph) v `app/layout.tsx`.
