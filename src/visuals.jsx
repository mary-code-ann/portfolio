export function TechLogos() {
  return (
    <ul className="tech-logos">
      {tools.map(([name, Icon]) => (
        <li key={name}>
          <span className="tech-mark">
            <Icon />
          </span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectArt({ id }) {
  const Scene = scenes[id] || VoiceScene;
  return (
    <div className={`project-art art-${id}`} aria-hidden="true">
      <Scene />
    </div>
  );
}

const tools = [
  ["Python", PythonMark],
  ["FastAPI", FastApiMark],
  ["MongoDB", MongoMark],
  ["React", ReactMark],
  ["Angular", AngularMark],
  ["TypeScript", TypeMark],
  ["Ionic", IonicMark],
  ["AWS", AwsMark],
  ["Linux", LinuxMark],
  ["HTML5", HtmlMark],
  ["SCSS", ScssMark],
  ["SQLite", SqliteMark],
];

function VoiceScene() {
  const heights = [18, 34, 48, 28, 56, 36, 22];
  return (
    <svg viewBox="0 0 320 132">
      <circle className="ring" cx="160" cy="66" r="26" />
      <circle className="ring b" cx="160" cy="66" r="26" />
      {heights.map((height, index) => (
        <rect
          key={height + index}
          className="bar"
          x={118 + index * 14}
          y={66 - height / 2}
          width="6"
          height={height}
          rx="3"
          style={{ animationDelay: `${index * 0.12}s` }}
        />
      ))}
    </svg>
  );
}

function ReportScene() {
  return (
    <svg viewBox="0 0 320 132">
      <rect className="soft" x="118" y="24" width="84" height="88" rx="8" />
      <path className="ink line" d="M132 46h56" />
      <path className="ink line" d="M132 60h48" style={{ animationDelay: "0.25s" }} />
      <path className="ink line" d="M132 74h52" style={{ animationDelay: "0.5s" }} />
      <path className="ink line" d="M132 88h36" style={{ animationDelay: "0.75s" }} />
      <circle className="soft" cx="214" cy="86" r="16" />
      <path className="ink" d="M206 86l6 6 12-14" />
    </svg>
  );
}

function DnsScene() {
  return (
    <svg viewBox="0 0 320 132">
      <path className="ink" d="M48 78H272" />
      <circle className="fill pulse" cx="48" cy="78" r="5" />
      {[48, 122, 198, 272].map((x) => (
        <g key={x}>
          <rect className="soft" x={x - 16} y="48" width="32" height="26" rx="6" />
          <path className="ink" d={`M${x - 8} 62h16`} />
        </g>
      ))}
    </svg>
  );
}

function TopologyScene() {
  return (
    <svg viewBox="0 0 320 132">
      <path className="ink link" d="M160 36v28" />
      <path className="ink link" d="M160 64L96 96" style={{ animationDelay: "0.2s" }} />
      <path className="ink link" d="M160 64L224 96" style={{ animationDelay: "0.4s" }} />
      <circle className="fill" cx="160" cy="30" r="7" />
      <circle className="soft" cx="160" cy="70" r="9" />
      <circle className="soft" cx="90" cy="102" r="9" />
      <circle className="soft" cx="230" cy="102" r="9" />
    </svg>
  );
}

function BotScene() {
  return (
    <svg viewBox="0 0 320 132">
      <rect className="soft" x="78" y="36" width="92" height="36" rx="12" />
      <rect className="soft" x="108" y="78" width="70" height="28" rx="12" />
      <g className="orbit">
        <circle className="fill" cx="214" cy="40" r="4" />
      </g>
      <circle className="ink" cx="214" cy="58" r="16" />
      <circle className="fill" cx="214" cy="58" r="3" />
    </svg>
  );
}

function LmsScene() {
  return (
    <svg viewBox="0 0 320 132">
      <rect className="soft" x="132" y="18" width="56" height="96" rx="10" />
      <rect className="fill grow" x="142" y="40" width="36" height="8" rx="3" />
      <rect
        className="fill grow"
        x="142"
        y="58"
        width="36"
        height="8"
        rx="3"
        style={{ animationDelay: "0.3s" }}
      />
      <rect
        className="fill grow"
        x="142"
        y="76"
        width="36"
        height="8"
        rx="3"
        style={{ animationDelay: "0.6s" }}
      />
    </svg>
  );
}

const scenes = {
  secureco: VoiceScene,
  "user-report": ReportScene,
  dns: DnsScene,
  niva: TopologyScene,
  "resolve-bot": BotScene,
  livewire: LmsScene,
};

function PythonMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#3776AB" d="M16 3c-4.2 0-5.2 1.8-5.2 4.2V10h5.3v1.2H8.2c-2.4 0-4.2 1.6-4.2 4.2v4.2c0 2.6 2.1 4.2 4.2 4.2h3.2V20c0-2.4 1.9-4.2 4.4-4.2h6.4c2.3 0 3.6-1.6 3.6-3.6V7.2C26 4.8 24.2 3 20.8 3H16z" />
      <path fill="#FFD43B" d="M16 29c4.2 0 5.2-1.8 5.2-4.2V22h-5.3v-1.2h7.9c2.4 0 4.2-1.6 4.2-4.2v-4.2c0-2.6-2.1-4.2-4.2-4.2h-3.2V12c0 2.4-1.9 4.2-4.4 4.2H10.2c-2.3 0-3.6 1.6-3.6 3.6v4.8c0 2.4 1.8 4.2 5.2 4.2H16z" />
      <circle cx="12.4" cy="7.2" r="1.1" fill="#fff" />
      <circle cx="19.6" cy="24.8" r="1.1" fill="#fff" />
    </svg>
  );
}

function FastApiMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="#009688" />
      <path fill="#fff" d="M18.2 7.5l-7.4 9.2h5.2l-1.2 7.8 7.6-9.6h-5.4l1.2-7.4z" />
    </svg>
  );
}

function MongoMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#00684A" d="M16.2 3s6.2 5.2 6.2 12.4c0 4.2-2.2 7.6-4.6 9.6-.4 2.2-.8 3.6-1.6 4-.8-.4-1.2-1.8-1.6-4-2.4-2-4.6-5.4-4.6-9.6C10 8.2 16.2 3 16.2 3z" />
      <path fill="#00ED64" d="M16.2 6.2s3.4 4 3.4 8.8c0 3-1.4 5.6-3.4 7.4-2-1.8-3.4-4.4-3.4-7.4 0-4.8 3.4-8.8 3.4-8.8z" />
    </svg>
  );
}

function ReactMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="#149ECA" strokeWidth="1.4">
        <ellipse cx="16" cy="16" rx="12" ry="4.6" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(120 16 16)" />
      </g>
      <circle cx="16" cy="16" r="2.1" fill="#149ECA" />
    </svg>
  );
}

function AngularMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#DD0031" d="M16 3l11 4.2-1.8 15.2L16 29 6.8 22.4 5 7.2 16 3z" />
      <path fill="#fff" d="M16 8.2l5.2 12.2h-2.4l-1-2.5h-3.6l-1 2.5H11L16 8.2zm0 4.2l-1.2 3.2h2.4L16 12.4z" />
    </svg>
  );
}

function TypeMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <text x="16" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#fff">TS</text>
    </svg>
  );
}

function IonicMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="#3880FF" />
      <circle cx="16" cy="16" r="5.5" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="23.2" cy="9.2" r="1.7" fill="#fff" />
    </svg>
  );
}

function AwsMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#232F3E" />
      <text x="16" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fff">aws</text>
      <path d="M8 22c4 3 12 3 16 0" fill="none" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LinuxMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="18" rx="7" ry="8" fill="#333" />
      <ellipse cx="16" cy="19.5" rx="4" ry="5" fill="#fff" />
      <circle cx="13.4" cy="15.2" r="1" fill="#fff" />
      <circle cx="18.6" cy="15.2" r="1" fill="#fff" />
      <ellipse cx="16" cy="18" rx="1.3" ry="0.8" fill="#F6A623" />
      <path d="M10 12c1-3 3-5 6-5s5 2 6 5" fill="none" stroke="#333" strokeWidth="1.4" />
    </svg>
  );
}

function HtmlMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#E34F26" d="M6 4h20l-2 22-8 3-8-3L6 4z" />
      <path fill="#F06529" d="M16 7v19.2l6.2-2.2L23.6 7H16z" />
      <path fill="#fff" d="M16 13.2H11.6l.3-2.4H16V8.4H9.2l.8 8.4H16v-3.6zm0 7.2v-3.2H12.8l.4 3.8 2.8 1.1v-1.7z" />
    </svg>
  );
}

function ScssMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="#CF649A" />
      <text x="16" y="20" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#fff">{"{}"}</text>
    </svg>
  );
}

function SqliteMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#003B57" d="M18 4c2 4 2 6 1 10 3 1 6 4 6 8 0 4-3 6-7 6s-8-2-9-6c2 1 4 1 6 0-2-2-3-5-3-8 2 1 3 1 5 0-1-3-1-7 1-10z" />
      <path fill="#8FCBF5" d="M17.2 8c1 2.4.8 4.2 0 6.4 1.6.4 3.2 2 3.2 4.2 0 2-1.4 3.2-3.4 3.2-1.6 0-3.2-.6-4-2.4 1 .4 2 .4 2.8 0-.8-1-1.2-2.4-1.2-3.8.8.4 1.4.4 2.2 0-.4-1.6-.4-3.6.4-5.6z" />
    </svg>
  );
}
