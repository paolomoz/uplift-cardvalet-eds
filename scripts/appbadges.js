/**
 * Shared app-store badges (App Store + Google Play) used by snow-hero / snow-app / snow-download.
 * Standard store colors + icons: white Apple mark, 4-colour Google Play triangle, black pill.
 */
const APPLE = '<svg viewBox="0 0 384 512" fill="#fff" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C61.5 141.2 0 184.5 0 272.5c0 26 4.7 52.8 14.2 80.4 12.6 36.3 58 125.3 105.3 123.8 24.8-.6 42.3-17.5 74.5-17.5 31.3 0 47.5 17.5 75.2 17.5 47.7-.7 88.8-81.5 100.7-117.9-63.9-30.1-60.6-88.1-60.5-90.1zM256.6 84.5c25.9-30.8 23.5-58.8 22.8-69-22.9 1.3-49.4 15.6-64.5 33.2-16.6 18.9-26.4 42.2-24.3 68.5 24.7 1.9 47.3-10.8 66-32.7z"/></svg>';
const PLAY = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4.5 3.3 22 20 4.5 36.7c-.6-.4-1-1.1-1-2V5.3c0-.9.4-1.6 1-2z" fill="#00D2FF"/><path d="M4.5 3.3 22 20l5.2-5.2L7.8 3.5C6.6 2.8 5.4 2.7 4.5 3.3z" fill="#00E676"/><path d="M4.5 36.7 22 20l5.2 5.2L7.8 36.5c-1.2.7-2.4.8-3.3.2z" fill="#FF3D00"/><path d="m27.2 14.8-5.2 5.2 5.2 5.2 6.4-3.7c1.4-.8 1.4-2.2 0-3l-6.4-3.7z" fill="#FFC400"/></svg>';

export function appBadges(links) {
  const wrap = document.createElement('div');
  wrap.className = 'snow-appbadges';
  links.forEach((a) => {
    const apple = /itunes\.apple|apps\.apple/.test(a.href);
    const badge = document.createElement('a');
    badge.className = `snow-appbadge ${apple ? 'is-apple' : 'is-play'}`;
    badge.href = a.href;
    badge.setAttribute('aria-label', apple ? 'Download on the App Store' : 'Get it on Google Play');
    badge.innerHTML = `<span class="snow-appbadge-ic">${apple ? APPLE : PLAY}</span>`
      + `<span class="snow-appbadge-tx"><small>${apple ? 'Download on the' : 'Get it on'}</small>`
      + `<strong>${apple ? 'App Store' : 'Google Play'}</strong></span>`;
    wrap.append(badge);
  });
  return wrap;
}
