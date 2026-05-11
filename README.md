# Fundación Conecta — sitio institucional

Sitio público de la Fundación Conecta. Un único `index.html` con CSS, JSX y assets, sin build tools.

## Estructura

```
index.html              ← entrada
styles/
  tokens.css            ← design tokens (colores, tipografía, espaciado)
  site.css              ← componentes institucionales del kit
  extra.css             ← secciones extra (manifiesto, recursos, voces, equipo…)
src/
  Base.jsx              ← Header, Hero, MissionStrip, ProgramCard, ImpactStat, CTABanner, InstFooter
  extras.jsx            ← Manifest, Resources, Voices, Team, Allies, Participate, Newsletter, ProgressBar
assets/
  logo-mark-square.svg
  logo-wordmark.svg
```

## Publicar en GitHub Pages

1. Creá un repo público en GitHub (ej. `fundacionconecta/site`).
2. Subí el contenido de esta carpeta a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "Sitio institucional Conecta"
   git branch -M main
   git remote add origin git@github.com:fundacionconecta/site.git
   git push -u origin main
   ```
3. En el repo, andá a **Settings → Pages** y elegí:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / root (`/`)
4. En 1–2 minutos tu sitio queda en `https://<usuario>.github.io/<repo>/`.

> Si querés un dominio propio (ej. `fundacionconecta.org.ar`), agregá un archivo `CNAME` con el dominio y configurá los DNS según [la guía de Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Editar contenido

- **Texto de cards de recursos**: `src/extras.jsx`, función `Resources`, array `items`.
- **Equipo**: `src/extras.jsx`, función `Team`.
- **Stats de impacto**: `index.html`, sección `#impacto`.
- **Programas**: `index.html`, sección `#programas`.
- **Tipografía y colores**: `styles/tokens.css` (no inventes nuevos colores; usá los `--accent*`, `--paper*`, `--ink*`).

## Lineamientos editoriales

- Voseo siempre.
- Sentence case en titulares; itálica + acento bermellón en la palabra clave.
- Casos argentinos concretos (nombrar barrio, organismo, monto en pesos).
- Sin lenguaje corporativo. Sin "stakeholders", "sinergias", "en primer lugar".
- Emoji solo como pictograma funcional.

Toda la guía visual y editorial vive en el design system de Conecta.
