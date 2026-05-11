/* eslint-disable */
function Header({ active, onJump }) {
  const links = [['mision','Misión'], ['programas','Programas'], ['impacto','Impacto'], ['recursos','Recursos']];
  return (
    <header className="ih">
      <a href="#" className="ih-brand" onClick={e => { e.preventDefault(); onJump?.('top'); }}>
        <span className="ih-mark">FC</span>
        <span>Fundación <strong>Conecta</strong></span>
      </a>
      <nav className="ih-nav">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}
             onClick={e => { e.preventDefault(); onJump?.(id); }}>{label}</a>
        ))}
      </nav>
      <a href="#donar" className="ih-cta" onClick={e => { e.preventDefault(); onJump?.('donar'); }}>Sumate</a>
    </header>
  );
}

function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="ihero" id="top">
      <div className="ihero-inner">
        <div className="ihero-kicker"><span></span> Fundación · Argentina · Desde 2025</div>
        <h1>Tendemos puentes hacia la <em>alfabetización digital</em>.</h1>
        <p className="ihero-lead">
          Trabajamos con escuelas, centros barriales y organizaciones para que más personas en Argentina
          puedan usar la tecnología con criterio, autonomía y bienestar.
        </p>
        <div className="ihero-actions">
          <button className="btn-primary" onClick={onPrimary}>Conocer los programas</button>
          <button className="btn-ghost" onClick={onSecondary}>Cómo participar →</button>
        </div>
      </div>
    </section>
  );
}

function MissionStrip() {
  const items = [
    { k: 'Acceso', d: 'Que la tecnología llegue donde no llega.' },
    { k: 'Criterio', d: 'Aprender a distinguir, decidir y dudar.' },
    { k: 'Bienestar', d: 'Una vida digital sana, no una más rota.' }
  ];
  return (
    <section className="mission" id="mision">
      {items.map(it => (
        <div className="mission-card" key={it.k}>
          <div className="mission-k">{it.k}</div>
          <p>{it.d}</p>
        </div>
      ))}
    </section>
  );
}

function ProgramCard({ tag, title, body, action, onAction, featured }) {
  return (
    <article className={`program ${featured ? 'is-featured' : ''}`}>
      <div className="program-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button className="program-cta" onClick={onAction}>{action} →</button>
    </article>
  );
}

function ImpactStat({ value, suffix, label }) {
  return (
    <div className="stat">
      <div className="stat-v">{value}<span>{suffix}</span></div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function CTABanner({ title, body, primary, secondary, onPrimary, onSecondary }) {
  return (
    <section className="cta" id="donar">
      <div className="cta-inner">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="cta-actions">
          <button className="btn-primary" onClick={onPrimary}>{primary}</button>
          <button className="btn-ghost-light" onClick={onSecondary}>{secondary}</button>
        </div>
      </div>
    </section>
  );
}

function InstFooter() {
  return (
    <footer className="ifoot">
      <div className="ifoot-inner">
        <div>
          <div className="ifoot-brand"><span className="ih-mark">FC</span> Fundación <strong>Conecta</strong></div>
          <p>Alfabetización digital y bienestar para la comunidad. Buenos Aires, Argentina.</p>
        </div>
        <div>
          <div className="ifoot-h">Fundación</div>
          <a href="#">Misión</a><a href="#">Equipo</a><a href="#">Memorias</a>
        </div>
        <div>
          <div className="ifoot-h">Programas</div>
          <a href="#">Aulas conectadas</a><a href="#">Adultos mayores</a><a href="#">IA Argentina 2026</a>
        </div>
        <div>
          <div className="ifoot-h">Contacto</div>
          <a href="#">hola@fundacionconecta.org.ar</a><a href="#">Donar</a>
        </div>
      </div>
      <div className="ifoot-rule">© 2026 Fundación Conecta · Asociación Civil sin fines de lucro</div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, MissionStrip, ProgramCard, ImpactStat, CTABanner, InstFooter });
