import Container from '@mui/material/Container';
import * as React from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Heading } from './components/heading';
import { LoadingScreen } from './components/loading/LoadingScreen';
import Place from './contents/date';
import Detail from './contents/detail';
import Group from './contents/group';
import Past from './contents/past';
import {
  detailItems,
  faqItems,
  groups,
  pastEvents,
  scheduleItems,
  siteInfo,
  timelineItems,
} from './data/siteData';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [query, setQuery] = React.useState('');
  const [spotlight, setSpotlight] = React.useState({ x: '50%', y: '40%' });

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => window.clearTimeout(timeoutId);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealTargets = document.querySelectorAll('.reveal');
    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(window.scrollY / total);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredGroups = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return groups;
    }

    return groups.filter((group) => {
      return (
        group.name.toLowerCase().includes(normalizedQuery) ||
        group.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query]);

  const sections = [
    { id: 'overview', label: '概要' },
    { id: 'contents', label: '開催内容' },
    { id: 'timeline', label: 'タイムライン' },
    { id: 'circle', label: '参加団体' },
    { id: 'faq', label: 'FAQ' },
    { id: 'past', label: '過去の開催' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  return (
    <main className="app-shell">
      <LoadingScreen visible={isLoading} />
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${Math.min(1, Math.max(0, scrollProgress))})` }}
      />

      <Header
        title={siteInfo.title}
        sections={sections}
        theme={theme}
        onToggleTheme={() =>
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        }
      />

      <section
        className="hero"
        aria-label="ヒーロー"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          setSpotlight({ x: `${x}%`, y: `${y}%` });
        }}
      >
        <div
          className="hero-ambient"
          aria-hidden="true"
          style={{
            '--spot-x': spotlight.x,
            '--spot-y': spotlight.y,
          }}
        />
        <Container maxWidth="lg">
          <p className="hero-eyebrow">{siteInfo.subtitle}</p>
          <h1>{siteInfo.title}</h1>
          <p className="hero-copy">
            気になる団体を一気に見比べて、実際に話して、雰囲気まで確かめられる。
            技術系サークル選びの最初の一歩として使える、2026年度の合同新歓です。
          </p>
          <div className="hero-meta" aria-label="イベント情報ハイライト">
            <span>2026 SPRING</span>
            <span>UEC TECH CLUBS</span>
            <span>ON CAMPUS + ONLINE</span>
          </div>
          <div className="hero-actions">
            <a href="#contents" className="cta primary">
              開催内容を見る
            </a>
            <a href="#circle" className="cta secondary">
              参加団体を見る
            </a>
          </div>
        </Container>
      </section>

      <Container maxWidth="lg">
        <section className="section section-tone-aurora reveal" id="overview">
          <Heading name="概要" />
          <p>
            「何を作れるのか」「どんな先輩がいるのか」「授業と両立できるか」。
            新入生が気になるポイントを、1日でまとめて確認できる場として
            企画しています。ハードウェア、ソフトウェア、デザイン、データ分析まで、
            幅広い分野の団体が参加します。
          </p>
        </section>

        <section className="section section-tone-sunset reveal" id="contents">
          <Heading name="開催内容" />
          <Place scheduleItems={scheduleItems} />
          <Detail items={detailItems} />
        </section>

        <section className="section section-tone-mint reveal" id="timeline">
          <Heading name="タイムライン" />
          <div className="timeline">
            {timelineItems.map((item) => (
              <article className="timeline-item" key={item.date + item.label}>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tone-cosmic reveal" id="circle">
          <Heading name="参加団体" />
          <div className="search-panel">
            <label htmlFor="group-search">団体検索</label>
            <input
              id="group-search"
              type="search"
              placeholder="団体名・活動内容で検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Group groups={filteredGroups} />
        </section>

        <section className="section section-tone-rose reveal" id="faq">
          <Heading name="FAQ" />
          <div className="faq-list">
            {faqItems.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section-tone-amber reveal" id="past">
          <Heading name="過去の開催" />
          <p>
            会場の空気感や発表の雰囲気は、過去開催の動画がいちばん伝わります。
            参加前のイメージづくりに活用してください。
          </p>
          <Past events={pastEvents} />
        </section>

        <section className="section section-tone-ocean reveal" id="contact">
          <Heading name="お問い合わせ" />
          <p>
            本合同新歓に関するお問い合わせは、以下のメールアドレスまたは
            𝕏アカウントまでお願いします。大学側は主催に関わっていないため、
            大学への直接のお問い合わせはお控えください。
          </p>
          <p>
            e-mail:{' '}
            <a href={`mailto:${siteInfo.contact.email}`}>
              {siteInfo.contact.email}
            </a>
          </p>
          <p>
            𝕏(Twitter):{' '}
            <a
              href={siteInfo.contact.xUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteInfo.contact.xLabel}
            </a>
          </p>
        </section>
      </Container>
      <Footer title={siteInfo.title} />
    </main>
  );
}

export default App;
