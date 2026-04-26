import React, { useState, useEffect } from 'react';

export default function LanguageSelector() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Sincronizamos con localStorage al montar
  useEffect(() => {
    const saved = localStorage.getItem('lang') as 'es' | 'en' | null;
    if (saved) {
      setLang(saved);
      document.documentElement.setAttribute('data-lang', saved);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    // Este atributo en <html> es la clave: el CSS y los scripts lo leen
    document.documentElement.setAttribute('data-lang', newLang);
    // Evento para que cualquier otro componente también pueda reaccionar
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: newLang } }));
  };

  return (
    <button
      onClick={toggleLang}
      aria-label="Cambiar idioma"
      className="flex items-center gap-2 px-4 py-2 bg-teto-card border border-slate-700 rounded-full text-xs font-bold tracking-widest hover:border-teto-blue hover:text-teto-blue transition-all duration-200 hover:scale-105 text-slate-300"
    >
      <span className="text-base leading-none">{lang === 'es' ? '🇺🇸' : '🇭🇳'}</span>
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}