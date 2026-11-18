
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const T = {
  es: {
    skip: 'Saltar al contenido',
    small: 'ARCHIVO HISTÓRICO',
    nav: ['Historia', 'Aurelio Biosca', 'Entrevista TVE', 'Bibliografía', 'Archivo'],
    hero: 'Una galería.<br><em>Una época.</em><br>Un legado.',
    intro: 'Un espacio de memoria dedicado a Aurelio Biosca, a la Galería Biosca y a su lugar en la historia del arte español.',
    discover: 'Descubrir su historia',
    book: 'Una publicación dedicada a Aurelio Biosca y al arte español.',
    quote: '“Conservar la memoria también es una forma de cultura.”',
    band: 'UN ARCHIVO EN CONSTRUCCIÓN',
    hTitle: 'Un lugar para<br><em>el arte y las ideas.</em>',
    h: [
      'La Galería Biosca forma parte de la memoria artística de Madrid y de la historia del arte español del siglo XX.',
      'Este sitio nace para reunir testimonios, publicaciones, imágenes y documentos relacionados con la galería, sus artistas y las personas que hicieron posible su trayectoria.',
      'Queremos construir un relato documentado y abierto: una memoria que pueda crecer con nuevas aportaciones y materiales.'
    ],
    aLead: 'Galerista y figura vinculada a una etapa decisiva de la vida artística madrileña.',
    aText: 'La historia de la galería no puede separarse de la de Aurelio Biosca. Este apartado recogerá su trayectoria, su visión del arte y los testimonios de quienes le conocieron y trabajaron con él.',
    note: 'La biografía se ampliará a medida que incorporemos referencias documentales y materiales familiares.',
    vTitle: 'La voz de<br><em>Aurelio Biosca.</em>',
    vCaption: 'Entrevista emitida por TVE. El vídeo se reproduce desde YouTube y se inicia en el minuto 2:59.',
    arTitle: 'Una historia que<br><em>seguimos escribiendo.</em>',
    arIntro: 'Este archivo digital está concebido como un proyecto abierto de conservación y difusión de la memoria de la Galería Biosca.',
    cards: [
      ['Artistas y exposiciones', 'Nombres, muestras y documentos que permitan reconstruir la actividad de la galería.', 'EN PREPARACIÓN'],
      ['Fotografías y documentos', 'Imágenes, invitaciones, catálogos, recortes de prensa y otros testimonios.', 'EN PREPARACIÓN'],
      ['Memoria familiar', 'Recuerdos y materiales relacionados con Aurelio Biosca y la familia Biosca.', 'EN PREPARACIÓN']
    ],
    close: 'El arte permanece.<br><em>La memoria también.</em>',
    back: 'Volver al inicio ↑',
    foot: ['Archivo histórico Galería Biosca', 'Proyecto conmemorativo y documental'],
    museumKicker: 'ARCHIVO Y LEGADO',
    museumLink: 'Archivo Biosca · Museo Reina Sofía',
    locEyebrow: '02 / El espacio',
    locTitle: 'La sede de<br><em>la Galería Biosca.</em>',
    locLead: 'Calle Génova, 11 · Madrid',
    locText: 'En este local estuvo situada la Galería Biosca. Esta fotografía conserva la imagen de su fachada y nos acerca al espacio físico donde se desarrolló parte de su historia.',
    locNote: 'Fotografía de la década de 1980.',
    locAlt: 'Fotografía histórica de la fachada de la Galería Biosca en la calle Génova, 11, Madrid',
    alt: 'Portada del libro Aurelio Biosca y el Arte Español',
    vAlt: 'Entrevista a Aurelio Biosca en TVE'
  },

  en: {
    skip: 'Skip to content',
    small: 'HISTORICAL ARCHIVE',
    nav: ['History', 'Aurelio Biosca', 'TVE Interview', 'Bibliography', 'Archive'],
    hero: 'A gallery.<br><em>An era.</em><br>A legacy.',
    intro: 'A space of remembrance dedicated to Aurelio Biosca, the Biosca Gallery and its place in the history of Spanish art.',
    discover: 'Discover its story',
    book: 'A publication dedicated to Aurelio Biosca and Spanish art.',
    quote: '“Preserving memory is also a form of culture.”',
    band: 'AN ARCHIVE IN THE MAKING',
    hTitle: 'A place for<br><em>art and ideas.</em>',
    h: [
      'The Biosca Gallery is part of Madrid’s artistic memory and the history of 20th-century Spanish art.',
      'This website brings together testimonies, publications, images and documents related to the gallery, its artists and the people who made its history possible.',
      'Our aim is to build a documented, open account: a living record that can grow through new contributions and materials.'
    ],
    aLead: 'Art dealer and a figure associated with a decisive period in Madrid’s artistic life.',
    aText: 'The history of the gallery cannot be separated from that of Aurelio Biosca. This section will explore his career, his vision of art and the memories of those who knew him and worked alongside him.',
    note: 'The biography will be expanded as documentary references and family materials become available.',
    vTitle: 'The voice of<br><em>Aurelio Biosca.</em>',
    vCaption: 'Interview broadcast by TVE. The video is hosted on YouTube and starts at 2:59.',
    arTitle: 'A story we<br><em>are still writing.</em>',
    arIntro: 'This digital archive is conceived as an open project to preserve and share the memory of the Biosca Gallery.',
    cards: [
      ['Artists and exhibitions', 'Names, exhibitions and documents that help reconstruct the gallery’s activity.', 'IN PREPARATION'],
      ['Photographs and documents', 'Images, invitations, catalogues, press clippings and other records.', 'IN PREPARATION'],
      ['Family memories', 'Memories and materials relating to Aurelio Biosca and the Biosca family.', 'IN PREPARATION']
    ],
    close: 'Art endures.<br><em>So does memory.</em>',
    back: 'Back to top ↑',
    foot: ['Historical archive of the Biosca Gallery', 'Commemorative and documentary project'],
    museumKicker: 'ARCHIVE AND LEGACY',
    museumLink: 'Biosca Archive · Reina Sofía Museum',
    locEyebrow: '02 / The location',
    locTitle: 'The home of<br><em>Galería Biosca.</em>',
    locLead: '11 Génova Street · Madrid',
    locText: 'The Biosca Gallery was located at these premises. This photograph preserves the image of its façade and brings us closer to the physical place where part of its history unfolded.',
    locNote: 'Photograph from the 1980s.',
    locAlt: 'Historical photograph of the façade of the Biosca Gallery at 11 Génova Street, Madrid',
    alt: 'Cover of the book Aurelio Biosca and Spanish Art',
    vAlt: 'Interview with Aurelio Biosca on TVE'
  }
};

const langBtn = document.querySelector('.language-toggle');

function setLang(lang) {
  const t = T[lang] || T.es;

  document.documentElement.lang = lang;

  document.title = lang === 'en'
    ? 'Biosca Gallery — The memory of an art gallery'
    : 'Galería Biosca — Memoria de una galería de arte';

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.content = lang === 'en'
      ? 'A tribute to Aurelio Biosca and the history of the Biosca Gallery in Madrid. Historical archive, family memories and a TVE interview.'
      : 'Un homenaje a Aurelio Biosca y a la historia de la Galería Biosca de Madrid. Archivo histórico, memoria familiar y entrevista de TVE.';
  }

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setHTML = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };

  setText('.skip-link', t.skip);
  setText('.wordmark-small', t.small);

  document.querySelectorAll('.main-nav a').forEach((element, index) => {
    if (t.nav[index]) element.textContent = t.nav[index];
  });

  setHTML('.hero h1', t.hero);
  setText('.hero-intro', t.intro);
  setHTML('.text-link', t.discover + ' <span aria-hidden="true">↘</span>');
  setText('.book-cover figcaption', t.book);

  const bookImage = document.querySelector('.book-cover img');
  if (bookImage) bookImage.alt = t.alt;

  setText('.intro-band p', t.quote);
  setText('.intro-band span', t.band);

  // Sede de la galería
  const locationCopy = document.querySelector('#sede .location-copy');

  if (locationCopy) {
    setText('#sede .location-copy .eyebrow', t.locEyebrow);
    setHTML('#sede .location-copy h2', t.locTitle);
    setText('#sede .location-copy .lead', t.locLead);

    const locationText = locationCopy.querySelector('.lead')?.nextElementSibling;
    if (locationText) locationText.textContent = t.locText;

    setText('#sede .location-copy .note', t.locNote);
    setText('#sede .location-caption', t.locLead);

    const locationImage = document.querySelector('#sede .location-photo img');
    if (locationImage) locationImage.alt = t.locAlt;
  }

  // Historia
  setHTML('.history-section h2', t.hTitle);

  document.querySelectorAll('.history-section .section-body p').forEach((element, index) => {
    if (t.h[index]) element.textContent = t.h[index];
  });

  // Aurelio Biosca
  setText('.aurelio-copy .lead', t.aLead);

  const aurelioText = document.querySelector('.aurelio-copy .lead')?.nextElementSibling;
  if (aurelioText) aurelioText.textContent = t.aText;

  setText('.aurelio-copy .note', t.note);

  // Entrevista TVE
  setHTML('.video-section h2', t.vTitle);

  const videoFrame = document.querySelector('.video-frame iframe');
  if (videoFrame) videoFrame.title = t.vAlt;

  setText('.video-caption', t.vCaption);

  // Archivo Museo Reina Sofía
  setText('.museum-kicker', t.museumKicker);

  const museumAnchor = document.querySelector('.museum-link-anchor');
  if (museumAnchor && museumAnchor.firstChild) {
    museumAnchor.firstChild.textContent = t.museumLink + ' ';
  }

  // Archivo
  setHTML('.archive-top h2', t.arTitle);
  setText('.archive-top>p:last-child', t.arIntro);

  document.querySelectorAll('.archive-grid article').forEach((element, index) => {
    if (!t.cards[index]) return;

    element.querySelector('h3').textContent = t.cards[index][0];
    element.querySelector('p').textContent = t.cards[index][1];
    element.querySelector('small').textContent = t.cards[index][2];
  });

  // Cierre y pie
  setHTML('.closing h2', t.close);
  setText('.back-top', t.back);

  const footerFirst = document.querySelector('.site-footer span:first-child');

  if (footerFirst) {
    const year = footerFirst.querySelector('#year');
    footerFirst.textContent = '© ';

    if (year) footerFirst.appendChild(year);

    footerFirst.append(' ' + t.foot[0]);
  }

  setText('.site-footer span:last-child', t.foot[1]);

  if (langBtn) {
    langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    langBtn.setAttribute(
      'aria-label',
      lang === 'es' ? 'Switch to English' : 'Cambiar a español'
    );
  }

  try {
    localStorage.setItem('biosca-language', lang);
  } catch (error) {}
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'es';
    setLang(current === 'es' ? 'en' : 'es');
  });
}

let initialLang = 'es';

try {
  initialLang = localStorage.getItem('biosca-language') || 'es';
} catch (error) {}

setLang(initialLang === 'en' ? 'en' : 'es');

const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
