import { useMemo, useState } from "react";
import "./App.css";
import { guideDatabase, levelInfo } from "./data/guideDatabase";
import type { GuideDoc, GuideLevel } from "./data/guideDatabase";

const READ_STORAGE_KEY = "yesterday-guide-read-docs-v1";

export default function App() {
  const [level, setLevel] = useState<GuideLevel | null>(null);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [levelMenuOpen, setLevelMenuOpen] = useState(false);
  const [mobileDocOpen, setMobileDocOpen] = useState(false);

  const [readDocIds, setReadDocIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(READ_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const docs = useMemo(() => {
    if (!level) return [];
    return guideDatabase.filter((doc) => doc.level === level);
  }, [level]);

  const selectedDoc: GuideDoc | null =
    docs.find((doc) => doc.id === selectedDocId) ?? docs[0] ?? null;

  const saveReadDocs = (next: string[]) => {
    try {
      localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // noop
    }
  };

  const markAsRead = (docId: string) => {
    setReadDocIds((prev) => {
      if (prev.includes(docId)) return prev;
      const next = [...prev, docId];
      saveReadDocs(next);
      return next;
    });
  };

  const openDoc = (docId: string) => {
    setSelectedDocId(docId);
    markAsRead(docId);
    setMobileDocOpen(true);
  };

  const selectLevel = (nextLevel: GuideLevel) => {
    const firstDoc = guideDatabase.find((doc) => doc.level === nextLevel);
    setLevel(nextLevel);
    setSelectedDocId(firstDoc?.id ?? null);
    setLevelMenuOpen(false);
    setMobileDocOpen(false);
  };

  if (!level) {
    return (
      <main className="archive-root landing-mode">
        <section className="start-panel">
          <img className="main-logo" src="/yesterday-logo.png" alt="YESTERDAY" />
          <p className="eyebrow">YESTERDAY ARCHIVE</p>
          <h1>예스터데이 입문 가이드</h1>
          <p className="start-desc">
            현재 숙련도에 맞는 문서 목록을 불러옵니다. 처음이라면 입문자 단계를
            선택하세요.
          </p>

          <div className="level-select-grid">
            {(["beginner", "intermediate", "advanced"] as GuideLevel[]).map((item) => (
              <button key={item} onClick={() => selectLevel(item)}>
                <strong>{levelInfo[item].label}</strong>
                <span>{levelInfo[item].description}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`archive-root ${mobileDocOpen ? "mobile-doc-open" : ""}`}>
      <header className="archive-header">
        <div className="header-brand">
          <img className="header-logo" src="/yesterday-logo.png" alt="YESTERDAY" />
          <div>
            <p className="eyebrow">YESTERDAY GUIDE ARCHIVE</p>
            <h1>예스터데이 입문 자료실</h1>
          </div>
        </div>

        <div className="level-switcher">
          <button
            className="level-switch-button"
            onClick={() => setLevelMenuOpen((prev) => !prev)}
          >
            {levelInfo[level].label}
          </button>

          {levelMenuOpen && (
            <div className="level-menu">
              {(["beginner", "intermediate", "advanced"] as GuideLevel[]).map((item) => (
                <button key={item} onClick={() => selectLevel(item)}>
                  {levelInfo[item].label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <section className="archive-layout">
        <aside className="document-list">
          <div className="list-head">
            <h2>문서 목록</h2>
            <p>{levelInfo[level].description}</p>
          </div>

          <div className="list-items">
            {docs.map((doc) => {
              const isRead = readDocIds.includes(doc.id);

              return (
                <button
                  key={doc.id}
                  className={selectedDoc?.id === doc.id ? "active" : ""}
                  onClick={() => openDoc(doc.id)}
                >
                  <div className="doc-list-top">
                    <span className="category">{doc.category}</span>
                    {!isRead && <span className="new-badge">NEW</span>}
                  </div>

                  <strong>{doc.title}</strong>
                  <small>{doc.subtitle}</small>
                </button>
              );
            })}
          </div>
        </aside>

        <article className="document-viewer">
          <button className="mobile-close-button" onClick={() => setMobileDocOpen(false)}>
            ×
          </button>

          {selectedDoc && (
            <>
              <div className="doc-title-area">
                <span className="category">{selectedDoc.category}</span>
                <h2>{selectedDoc.title}</h2>
                <p>{selectedDoc.subtitle}</p>
              </div>

              {selectedDoc.image && (
                <div className="doc-image-wrap">
                  <img src={selectedDoc.image} alt={selectedDoc.title} />
                </div>
              )}

              <div className="doc-content">
                {selectedDoc.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </>
          )}
        </article>
      </section>
    </main>
  );
}