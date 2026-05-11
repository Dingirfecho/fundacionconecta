/* eslint-disable */
/* Extras — sections beyond the institutional kit */

function Manifest() {
  return (
    <section className="section" id="manifiesto">
      <div className="manifest">
        <div className="manifest-side">
          <div className="kicker-line">Por qué Conecta</div>
          <h2 className="section-t">Sin tecnicismos. <em>Hecha para vos.</em></h2>
        </div>
        <div className="manifest-body">
          <p>
            En Argentina conviven una rotisería de Villa Urquiza que <strong>nunca usó una hoja de cálculo</strong>{' '}
            con un laboratorio del CONICET que entrena modelos propios. La brecha no es de hardware: es de{' '}
            <strong>criterio</strong>, de tiempo para aprender y de a quién preguntarle.
          </p>
          <p>
            Conecta nació en 2025 para acortar esa distancia. Producimos guías públicas, ejercicios prácticos
            y formaciones gratuitas para que cualquier persona —tenga 16 o 78 años, viva en Villa Crespo o en
            General Pico— pueda usar la tecnología con autonomía.
          </p>
          <blockquote className="manifest-pq">
            <p>
              Lo que antes llevaba un equipo entero, hoy lo hace una persona con criterio. Queremos que
              esa persona pueda ser cualquiera.
            </p>
            <cite>— Equipo Conecta</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const items = [
    {
      icon: '📖', tag: 'Guía pública', new: true,
      title: 'Introducción a la Inteligencia Artificial',
      body: '12 capítulos con ejercicios, casos argentinos y un quiz al cierre. Pensada para leer de corrido o por temas.',
      meta: ['Argentina · 2026', '12 capítulos', '~3 hs de lectura'],
    },
    {
      icon: '📊', tag: 'Resumen anual', new: false,
      title: 'El Estado de la IA en 2025',
      body: 'Lo que pasó el año pasado en modelos, regulación, adopción local y costos. Versión web con sidebar.',
      meta: ['Curso · Dark mode', '8 secciones', 'Actualizado 12/2025'],
    },
    {
      icon: '⚡', tag: 'Mini-evaluación', new: false,
      title: '5 señales de que tu estrategia de IA funciona',
      body: 'Test de 2 minutos para PyMEs y áreas chicas. Te devolvemos un diagnóstico concreto, sin humo.',
      meta: ['Test · 2 min', 'Para equipos', 'Por Federico Andino'],
    },
    {
      icon: '🛠', tag: 'Cuaderno técnico', new: false,
      title: 'IA + Make.com para flujos reales',
      body: 'Cómo conectar un modelo con Sheets, WhatsApp, Mercado Pago y un CRM sin escribir código.',
      meta: ['Cuaderno · Práctica', '14 ejemplos', 'Nivel intermedio'],
    },
    {
      icon: '🔌', tag: 'Cuaderno técnico', new: false,
      title: 'Integraciones para organizaciones chicas',
      body: 'Plantillas para que un consultorio, una cooperativa o una rotisería tengan agenda, tickets y reportes.',
      meta: ['Cuaderno · Práctica', '8 plantillas', 'Nivel inicial'],
    },
    {
      icon: '✏️', tag: 'Banco de prompts', new: true,
      title: 'Prompts para docentes argentinos',
      body: 'Plantillas listas para corregir, planificar clases y preparar evaluaciones. Probadas con escuelas reales.',
      meta: ['Banco vivo', '60+ prompts', 'Actualizado 03/2026'],
    },
  ];

  return (
    <section className="section" id="recursos">
      <div className="section-h">Recursos públicos</div>
      <h2 className="section-t">
        Todo lo que producimos es <em>libre y gratuito</em>.
      </h2>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', color: 'var(--ink2)', maxWidth: 640, marginTop: '-22px', marginBottom: 32, lineHeight: 1.7 }}>
        Cada guía la podés leer en el navegador, descargar como PDF o forkear desde GitHub.
        Si encontrás un error, podés abrir un issue —es la idea.
      </p>
      <div className="resources">
        {items.map((it, i) => (
          <a className="res" key={i} href="#" onClick={e => e.preventDefault()}>
            <div className="res-icon">{it.icon}</div>
            <div className="res-body">
              <div className={`res-tag ${it.new ? 'is-new' : ''}`}>
                <span className="dot"></span>
                {it.new ? 'Nuevo · ' : ''}{it.tag}
              </div>
              <h4>{it.title}</h4>
              <p>{it.body}</p>
              <div className="res-meta">
                {it.meta.map((m, j) => (
                  <React.Fragment key={j}>
                    {j > 0 && <span className="sep">·</span>}
                    {m}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const items = [
    {
      q: 'Tenía 71 años y nunca había usado WhatsApp. Después de tres talleres en el centro de jubilados de Caballito ya hago las videollamadas con mi nieta sola, sin que me ayude nadie.',
      who: 'Nélida P.', where: 'Mayores en Red · Caballito, CABA', initials: 'NP',
    },
    {
      q: 'Soy maestra de séptimo en una escuela rural de Junín. Las plantillas de prompts me ahorran como cuatro horas por semana de planificación. Los chicos lo notan cuando hay tiempo de verdad.',
      who: 'Romina A.', where: 'Aulas Conectadas · Junín, Buenos Aires', initials: 'RA',
    },
    {
      q: 'Tenemos una panadería con tres locales. Después del curso armamos un sistema de pedidos por WhatsApp que nos ahorra más de $200.000 por mes en errores y reclamos.',
      who: 'Dario M.', where: 'PyME Conecta · Avellaneda', initials: 'DM',
    },
  ];
  return (
    <section className="section--paper2" id="voces">
      <div className="section-inner">
        <div className="section-h">Voces de la red</div>
        <h2 className="section-t">Cómo se ve <em>cuando funciona</em>.</h2>
        <div className="voices">
          {items.map((v, i) => (
            <article className="voice" key={i}>
              <p className="voice-q">{v.q}</p>
              <div className="voice-meta">
                <div className="voice-avatar">{v.initials}</div>
                <div>
                  <div className="voice-name">{v.who}</div>
                  <div className="voice-where">{v.where}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { i: 'FA', name: 'Federico Andino', role: 'Dir. de contenidos', bio: 'Investigador. Dirige las guías largas y el banco de prompts. Antes: UBA, sector privado.' },
    { i: 'MV', name: 'Mariela Vázquez', role: 'Dir. de programa', bio: 'Coordina Aulas Conectadas en 22 provincias. 14 años en educación pública.' },
    { i: 'JC', name: 'Julián Coronel', role: 'Equipo técnico', bio: 'Desarrollo de los artefactos web y las integraciones. Hace que todo se publique solo.' },
    { i: 'LR', name: 'Lucía Romero', role: 'Comunidad', bio: 'Articulación con centros barriales, cooperativas y municipios. Voluntaria desde 2019.' },
  ];
  return (
    <section className="section" id="equipo">
      <div className="section-h">Equipo</div>
      <h2 className="section-t">Quiénes <em>la pelean</em> todos los días.</h2>
      <div className="team">
        {members.map((m, i) => (
          <article className="member" key={i}>
            <div className="member-portrait">{m.i}</div>
            <div className="member-role">{m.role}</div>
            <h4 className="member-name">{m.name}</h4>
            <p className="member-bio">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Allies() {
  const items = [
    { n: '38', l: 'Escuelas públicas socias' },
    { n: '12', l: 'Centros barriales activos' },
    { n: '6', l: 'Universidades aliadas' },
    { n: '22', l: 'Municipios convenios' },
  ];
  return (
    <section className="section" id="aliados" style={{ marginTop: 72 }}>
      <div className="section-h">Red de alianzas</div>
      <h2 className="section-t">Trabajamos en red con quienes <em>ya están en el barrio</em>.</h2>
      <div className="allies">
        {items.map((a, i) => (
          <div className="ally" key={i}>
            <div className="ally-n">{a.n}</div>
            <div className="ally-l">{a.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Participate() {
  const ways = [
    { n: '01', t: 'Donar', b: 'Tu aporte mensual sostiene los talleres barriales y la producción de las guías. Desde $3.000 por mes.', cta: 'Donar ahora →' },
    { n: '02', t: 'Voluntariado', b: 'Necesitamos docentes, traductores, diseñadores y gente que conozca su barrio. Compromiso desde 4 horas semanales.', cta: 'Postularme →' },
    { n: '03', t: 'Alianzas institucionales', b: 'Si trabajás en una escuela, cooperativa, municipio o empresa que quiere capacitar a su gente, escribinos.', cta: 'Conversemos →' },
  ];
  return (
    <section className="section" id="participar">
      <div className="section-h">Cómo participar</div>
      <h2 className="section-t">Tres formas de <em>sumarte</em>.</h2>
      <div className="participate">
        {ways.map((w, i) => (
          <article className="part" key={i}>
            <div className="part-num">{w.n}</div>
            <h4>{w.t}</h4>
            <p>{w.b}</p>
            <button className="part-cta" onClick={e => e.preventDefault()}>{w.cta}</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section className="news" id="newsletter">
      <div className="news-inner">
        <div className="news-text">
          <span className="kicker">Lo que sale, te llega</span>
          <h3>Una vez por mes, sin relleno.</h3>
          <p>Te avisamos cuando publicamos una guía nueva, abrimos inscripción a un taller o pasa algo grande en IA en Argentina. Nada de marketing.</p>
        </div>
        <form className="news-form" onSubmit={e => {
          e.preventDefault();
          if (!email) return;
          const subject = encodeURIComponent('Suscripción al newsletter');
          const body = encodeURIComponent(`Hola, quiero suscribirme al newsletter.\n\nMi correo: ${email}`);
          window.location.href = `mailto:fundacion@conecta.fund?subject=${subject}&body=${body}`;
          setSent(true);
        }}>
          {sent ? (
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '.95rem', fontWeight: 700, color: 'var(--teal)' }}>
              ✓ Listo. Te escribimos a {email}.
            </div>
          ) : (
            <>
              <input
                type="email" required placeholder="fundacion@conecta.fund"
                className="news-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary">Suscribirme</button>
              <div className="news-mini" style={{ flexBasis: '100%' }}>
                Sin spam. Podés darte de baja con un click en cualquier mail.
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* Header extendido — más anclas que el kit base */
function HeaderExt({ active, onJump }) {
  const links = [
    ['manifiesto', 'Por qué'],
    ['programas', 'Programas'],
    ['__page__shambhala', 'Shambhala'],
    ['__page__mision', 'Misión'],
    ['participar', 'Participar'],
  ];
  return (
    <header className="ih">
      <a href="#" className="ih-brand" onClick={e => { e.preventDefault(); onJump?.('top'); }}>
        <span className="ih-mark">FC</span>
        <span>Fundación <strong>Conecta</strong></span>
      </a>
      <nav className="ih-nav">
        {links.map(([id, label]) => {
          if (id.startsWith('__page__')) {
            const page = id.replace('__page__', '');
            return <a key={id} href={`${page}.html`}>{label}</a>;
          }
          return (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}
               onClick={e => { e.preventDefault(); onJump?.(id); }}>{label}</a>
          );
        })}
      </nav>
      <a href="#donar" className="ih-cta" onClick={e => { e.preventDefault(); onJump?.('participar'); }}>Sumate</a>
    </header>
  );
}

/* Footer extendido con redes y más enlaces */
function FooterExt() {
  return (
    <footer className="ifoot">
      <div className="ifoot-inner">
        <div>
          <div className="ifoot-brand"><span className="ih-mark">FC</span> Fundación <strong>Conecta</strong></div>
          <p>Alfabetización digital y bienestar para la comunidad. Buenos Aires, Argentina · desde 2025.</p>
          <div className="ifoot-social">
            <a href="#" aria-label="GitHub" onClick={e => e.preventDefault()}>GH</a>
            <a href="#" aria-label="Instagram" onClick={e => e.preventDefault()}>IG</a>
            <a href="#" aria-label="LinkedIn" onClick={e => e.preventDefault()}>in</a>
            <a href="#" aria-label="YouTube" onClick={e => e.preventDefault()}>YT</a>
          </div>
        </div>
        <div>
          <div className="ifoot-h">Fundación</div>
          <a href="#manifiesto" onClick={e => { e.preventDefault(); document.getElementById('manifiesto')?.scrollIntoView({behavior:'smooth'}); }}>Por qué</a>
          <a href="#equipo" onClick={e => { e.preventDefault(); document.getElementById('equipo')?.scrollIntoView({behavior:'smooth'}); }}>Equipo</a>
          <a href="#" onClick={e => e.preventDefault()}>Memorias 2024</a>
          <a href="#" onClick={e => e.preventDefault()}>Estatuto</a>
        </div>
        <div>
          <div className="ifoot-h">Programas</div>
          <a href="#" onClick={e => e.preventDefault()}>Aulas Conectadas</a>
          <a href="#" onClick={e => e.preventDefault()}>Mayores en Red</a>
          <a href="#" onClick={e => e.preventDefault()}>PyME Conecta</a>
          <a href="#recursos" onClick={e => { e.preventDefault(); document.getElementById('recursos')?.scrollIntoView({behavior:'smooth'}); }}>Guías públicas</a>
        </div>
        <div>
          <div className="ifoot-h">Contacto</div>
          <a href="mailto:hola@fundacionconecta.org.ar">hola@fundacionconecta.org.ar</a>
          <a href="#participar" onClick={e => { e.preventDefault(); document.getElementById('participar')?.scrollIntoView({behavior:'smooth'}); }}>Donar</a>
          <a href="#participar" onClick={e => { e.preventDefault(); document.getElementById('participar')?.scrollIntoView({behavior:'smooth'}); }}>Voluntariado</a>
          <a href="#participar" onClick={e => { e.preventDefault(); document.getElementById('participar')?.scrollIntoView({behavior:'smooth'}); }}>Alianzas</a>
        </div>
      </div>
      <div className="ifoot-rule">© 2026 Fundación Conecta · Asociación Civil sin fines de lucro · CUIT 30-71500000-0</div>
    </footer>
  );
}

/* Progress strip top */
function ProgressBar() {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: 3, width: w + '%',
      background: 'var(--accent)', zIndex: 100, transition: 'width .1s linear'
    }} />
  );
}

Object.assign(window, {
  Manifest, Resources, Voices, Team, Allies, Participate, Newsletter,
  HeaderExt, FooterExt, ProgressBar
});
