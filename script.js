const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');
const languageButtons = document.querySelectorAll('.language-button');

year.textContent = new Date().getFullYear();


// -------------------------
// MOBILE MENU
// -------------------------

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});


// -------------------------
// TRANSLATIONS
// -------------------------

const translations = {

  es: {
    nav_products: 'Productos',
    nav_wholesale: 'Mayoreo',
    nav_about: 'Nosotros',
    nav_quote: 'Solicitar cotización',

    hero_eyebrow: 'Textiles de limpieza para distribución y negocio',
    hero_title: 'Productos funcionales para limpiar, abastecer y vender mejor.',
    hero_text:
      'PROLIMTEX fabrica y comercializa soluciones textiles de limpieza para distribuidores, pequeños negocios y clientes que buscan abastecimiento confiable.',
    hero_quote: 'Solicitar cotización mayoreo',
    hero_products: 'Ver productos',

    hero_note_1: '✓ Atención a distribuidores',
    hero_note_2: '✓ Venta por volumen',
    hero_note_3: '✓ Opciones para retail',

    fabric_mop: 'JERGA',
    fabric_flannel: 'FRANELA',
    fabric_kitchen: 'COCINA',

    products_eyebrow: 'Productos',
    products_title: 'Lo esencial para limpieza diaria y reventa.',
    products_intro:
      'Una primera muestra de nuestro catálogo. Agregaremos fotografías, medidas y presentaciones finales en la siguiente versión.',

    product_1_title: 'Jerga para piso',
    product_1_text:
      'Textil absorbente para limpieza de pisos, disponible en presentaciones pensadas para distribución.',

    product_2_title: 'Franela',
    product_2_text:
      'Una opción versátil para limpieza general, mantenimiento y uso comercial.',

    product_3_title: 'Trapo de cocina',
    product_3_text:
      'Producto práctico para negocios, distribuidores y uso cotidiano.',

    product_quote: 'Cotizar →',

    wholesale_eyebrow: 'Mayoreo',
    wholesale_title: '¿Compras para distribuir o abastecer un negocio?',
    wholesale_text:
      'Cuéntanos qué producto necesitas, volumen aproximado y ciudad de entrega. Podemos preparar una cotización enfocada en tus necesidades de compra.',
    wholesale_button: 'Quiero precio de mayoreo',

    wholesale_step_1: 'Selecciona el producto.',
    wholesale_step_2: 'Indica cantidad y ubicación.',
    wholesale_step_3: 'Recibe seguimiento para tu cotización.',

        about_title: 'Acerca de Nosotros',
    about_text_1:
      'PROLIMTEX es una empresa mexicana dedicada a la fabricación de jergas de piso y de cocina elaboradas con materiales regenerados.',
    about_text_2:
      'Trabajamos directamente con nuestros clientes, sin intermediarios, para ofrecer productos de calidad consistente, precios competitivos y un abasto confiable.',
    about_text_3:
      'Buscamos construir relaciones comerciales a largo plazo, con atención cercana y soluciones que respondan a las necesidades de cada negocio.',

    contact_eyebrow: 'Contacto',
    contact_title: 'Solicita una cotización.',
    contact_text:
      'Completa tus datos y cuéntanos qué producto necesitas. Te contactaremos para dar seguimiento a tu cotización.',

    form_name: 'Nombre',
    form_company: 'Empresa',
    form_email: 'Correo',
    form_message: '¿Qué necesitas?',
    form_button: 'Enviar solicitud',

    form_name_placeholder: 'Tu nombre',
    form_company_placeholder: 'Nombre de tu empresa',
    form_email_placeholder: 'correo@empresa.com',
    form_message_placeholder:
      'Producto, cantidad aproximada y ciudad de entrega',

    footer_tagline: 'Soluciones textiles de limpieza.',
    footer_rights: 'Todos los derechos reservados.',

    form_status:
      'El formulario está listo. El siguiente paso es conectarlo directamente con WhatsApp.'
  },


  en: {
    nav_products: 'Products',
    nav_wholesale: 'Wholesale',
    nav_about: 'About Us',
    nav_quote: 'Request a Quote',

    hero_eyebrow: 'Cleaning textiles for distribution and business',
    hero_title: 'Functional products to clean, supply, and sell better.',
    hero_text:
      'PROLIMTEX manufactures and distributes textile cleaning products for distributors, small businesses, and customers looking for reliable supply.',
    hero_quote: 'Request a Wholesale Quote',
    hero_products: 'View Products',

    hero_note_1: '✓ Distributor support',
    hero_note_2: '✓ Volume sales',
    hero_note_3: '✓ Retail options',

    fabric_mop: 'FLOOR CLOTH',
    fabric_flannel: 'FLANNEL',
    fabric_kitchen: 'KITCHEN',

    products_eyebrow: 'Products',
    products_title: 'Essential products for daily cleaning and resale.',
    products_intro:
      'A first look at our catalog. Product photos, measurements, and final packaging options will be added in the next version.',

    product_1_title: 'Floor Cleaning Cloth',
    product_1_text:
      'Absorbent textile designed for floor cleaning, available in formats suitable for distribution.',

    product_2_title: 'Flannel Cloth',
    product_2_text:
      'A versatile option for general cleaning, maintenance, and commercial use.',

    product_3_title: 'Kitchen Cloth',
    product_3_text:
      'A practical product for businesses, distributors, and everyday use.',

    product_quote: 'Request Quote →',

    wholesale_eyebrow: 'Wholesale',
    wholesale_title: 'Buying for distribution or to supply your business?',
    wholesale_text:
      'Tell us which product you need, your approximate volume, and delivery city. We can prepare a quote based on your purchasing needs.',
    wholesale_button: 'Request Wholesale Pricing',

    wholesale_step_1: 'Choose your product.',
    wholesale_step_2: 'Tell us the quantity and location.',
    wholesale_step_3: 'Receive follow-up for your quote.',

     about_title: 'About Us',
    about_text_1:
      'PROLIMTEX is a Mexican company specializing in the manufacture of floor and kitchen cleaning cloths made from reclaimed materials.',
    about_text_2:
      'We work directly with our customers, without intermediaries, to offer consistent quality, competitive prices, and a reliable supply.',
    about_text_3:
      'We aim to build long-term business relationships through personalized service and solutions tailored to the needs of each business.',

    contact_eyebrow: 'Contact',
    contact_title: 'Request a Quote.',
    contact_text:
      'Complete the form and tell us what product you need. We will contact you to follow up on your quote.',

    form_name: 'Name',
    form_company: 'Company',
    form_email: 'Email',
    form_message: 'What do you need?',
    form_button: 'Send Request',

    form_name_placeholder: 'Your name',
    form_company_placeholder: 'Company name',
    form_email_placeholder: 'email@company.com',
    form_message_placeholder:
      'Product, approximate quantity, and delivery city',

    footer_tagline: 'Textile cleaning solutions.',
    footer_rights: 'All rights reserved.',

    form_status:
      'The form is ready. The next step is connecting it directly to WhatsApp.'
  }

};


// -------------------------
// CHANGE LANGUAGE
// -------------------------

function setLanguage(language) {

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });


  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;

    if (translations[language][key]) {
      element.placeholder = translations[language][key];
    }
  });


  languageButtons.forEach(button => {

    const isActive = button.dataset.lang === language;

    button.classList.toggle('active', isActive);

    button.setAttribute(
      'aria-pressed',
      String(isActive)
    );

  });


  if (language === 'en') {

    document.title =
      'PROLIMTEX | Textile Cleaning Solutions';

  } else {

    document.title =
      'PROLIMTEX | Soluciones textiles de limpieza';

  }


  localStorage.setItem(
    'prolimtex-language',
    language
  );

}


// -------------------------
// LANGUAGE BUTTONS
// -------------------------

languageButtons.forEach(button => {

  button.addEventListener('click', () => {

    const language = button.dataset.lang;

    setLanguage(language);

  });

});


// -------------------------
// REMEMBER LANGUAGE
// -------------------------

const savedLanguage =
  localStorage.getItem('prolimtex-language') || 'es';

setLanguage(savedLanguage);


// -------------------------
// QUOTE FORM
// -------------------------

// -------------------------
// QUOTE FORM - WHATSAPP
// -------------------------

quoteForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(quoteForm);

  const name = formData.get('name');
  const company = formData.get('company');
  const email = formData.get('email');
  const message = formData.get('message');

  const currentLanguage =
    document.documentElement.lang || 'es';

  let whatsappMessage;

  if (currentLanguage === 'en') {

    whatsappMessage =
`Hello PROLIMTEX!

I would like to request a wholesale quote.

Name: ${name}
Company: ${company || 'Not provided'}
Email: ${email}

Request:
${message}

I am contacting you through the PROLIMTEX website.`;

    formStatus.textContent =
      'Opening WhatsApp to send your quote request...';

  } else {

    whatsappMessage =
`¡Hola PROLIMTEX!

Me gustaría solicitar una cotización de mayoreo.

Nombre: ${name}
Empresa: ${company || 'No especificada'}
Correo: ${email}

Solicitud:
${message}

Me estoy comunicando a través del sitio web de PROLIMTEX.`;

    formStatus.textContent =
      'Abriendo WhatsApp para enviar tu solicitud de cotización...';
  }

  const phoneNumber = '522215792968';

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank');
});

// -------------------------
// CATÁLOGO Y CARRUSEL
// -------------------------

(() => {
  const imagePath = 'images-prolimtex-web/';

  const products = [
    {
      id: 'jerga',
      images: [
        'jerga-rollo.jpg',
        'jerga-panos.png',
        'jerga-panos-colores.png'
      ],
      es: {
        title: 'Jerga para piso',
        text: 'Jergas en rollo y paños para limpieza de pisos y reventa.',
        variants: [
          'Jerga en rollo',
          'Paños de jerga azul y roja',
          'Paños de jerga de colores'
        ]
      },
      en: {
        title: 'Floor Cleaning Cloths',
        text: 'Floor cleaning textiles in rolls and individual cloths for cleaning and resale.',
        variants: [
          'Floor cloth roll',
          'Blue and red floor cloths',
          'Colored floor cloths'
        ]
      }
    },
    {
      id: 'franela',
      images: ['franela-rollo.png'],
      es: {
        title: 'Franela para limpieza',
        text: 'Franela en rollo para limpieza general y mantenimiento.',
        variants: ['Franela roja en rollo']
      },
      en: {
        title: 'Flannel Cleaning Cloth',
        text: 'Flannel rolls for general cleaning and maintenance.',
        variants: ['Red flannel roll']
      }
    },
    {
      id: 'cocina',
      images: ['cocina-panos.png', 'cocina-rollo.png'],
      es: {
        title: 'Paños de cocina',
        text: 'Textiles de cocina en paños y rollos, con opciones de color.',
        variants: ['Paños de cocina de colores', 'Rollo de cocina']
      },
      en: {
        title: 'Kitchen Cloths',
        text: 'Kitchen textiles in individual cloths and rolls, with color options.',
        variants: ['Colored kitchen cloths', 'Kitchen cloth roll']
      }
    },
    {
      id: 'hilo',
      images: ['hilo-25.png'],
      es: {
        title: 'Hilo 2.5',
        text: 'Hilo en bobinas para fabricación. Consulta presentaciones y disponibilidad.',
        variants: ['Bobinas de hilo 2.5']
      },
      en: {
        title: '2.5 Yarn',
        text: 'Yarn bobbins for manufacturing. Ask about available formats and stock.',
        variants: ['2.5 yarn bobbins']
      }
    },
    {
      id: 'hilaza',
      images: ['hilaza-colores.png'],
      es: {
        title: 'Hilaza de colores',
        text: 'Hilaza para fabricación de trapeadores. Consulta los colores disponibles.',
        variants: ['Bobinas de hilaza de colores']
      },
      en: {
        title: 'Colored Mop Yarn',
        text: 'Yarn for mop manufacturing. Ask about available colors.',
        variants: ['Colored mop yarn bobbins']
      }
    },
    {
      id: 'estopa',
      images: ['estopa.png'],
      es: {
        title: 'Estopa para limpieza',
        text: 'Estopa para tareas de limpieza y mantenimiento. Consulta presentaciones.',
        variants: ['Estopa blanca']
      },
      en: {
        title: 'Cleaning Tow',
        text: 'Loose cleaning fibers for cleaning and maintenance. Ask about available formats.',
        variants: ['White cleaning tow']
      }
    }
  ];

  Object.assign(translations.es, {
    products_title: 'Textiles para limpiar, distribuir y fabricar.',
    products_intro:
      'Explora nuestras seis líneas de productos y consulta las opciones para tu negocio.',
    carousel_view: 'Ver producto →'
  });

  Object.assign(translations.en, {
    products_title: 'Textiles for cleaning, distribution and manufacturing.',
    products_intro:
      'Explore our six product lines and find options for your business.',
    carousel_view: 'View product →'
  });

  products.forEach(product => {
    ['es', 'en'].forEach(language => {
      const content = product[language];
      const dictionary = translations[language];

      dictionary[`catalog_${product.id}_title`] = content.title;
      dictionary[`catalog_${product.id}_text`] = content.text;

      content.variants.forEach((variant, index) => {
        dictionary[`catalog_${product.id}_image_${index}`] = variant;
      });
    });
  });

  // Construye las seis tarjetas dentro del catálogo existente.
  const grid = document.querySelector('.product-grid');

  if (grid) {
    grid.innerHTML = products.map(product => `
      <article class="product-card" id="producto-${product.id}">
        <img
          class="product-photo"
          src="${imagePath}${product.images[0]}"
          alt="${product.es.variants[0]}"
          data-product-main="${product.id}"
          data-product-image="0"
          loading="lazy"
          decoding="async"
          width="600"
          height="600"
        />

        ${product.images.length > 1 ? `
          <div class="product-thumbnails">
            ${product.images.map((file, index) => `
              <button
                type="button"
                class="product-thumbnail"
                data-product="${product.id}"
                data-image-index="${index}"
                aria-pressed="${index === 0}"
                aria-label="${product.es.variants[index]}"
              >
                <img src="${imagePath}${file}" alt="" loading="lazy" />
              </button>
            `).join('')}
          </div>
        ` : ''}

        <h3 data-i18n="catalog_${product.id}_title">
          ${product.es.title}
        </h3>

        <p data-i18n="catalog_${product.id}_text">
          ${product.es.text}
        </p>

        <a href="#contacto" data-i18n="product_quote">
          Cotizar →
        </a>
      </article>
    `).join('');
  }

  // Miniaturas: cambian la foto de la tarjeta seleccionada.
  grid?.addEventListener('click', event => {
    const button = event.target.closest('.product-thumbnail');
    if (!button) return;

    const product = products.find(item => item.id === button.dataset.product);
    const index = Number(button.dataset.imageIndex);
    const card = button.closest('.product-card');
    const mainImage = card.querySelector('.product-photo');
    const language = document.documentElement.lang === 'en' ? 'en' : 'es';

    mainImage.src = imagePath + product.images[index];
    mainImage.alt = product[language].variants[index];
    mainImage.dataset.productImage = String(index);

    card.querySelectorAll('.product-thumbnail').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });

  const carousel = document.querySelector('.product-carousel');
  if (!carousel) return;

  // Una diapositiva por línea de producto.
  carousel.innerHTML = `
    ${products.map((product, index) => `
      <div class="carousel-slide" ${index > 0 ? 'hidden' : ''}>
        <a class="carousel-link" href="#producto-${product.id}">
          <img
            class="carousel-photo"
            src="${imagePath}${product.images[0]}"
            alt="${product.es.variants[0]}"
            data-carousel-product="${product.id}"
            ${index === 0 ? 'fetchpriority="high"' : ''}
            decoding="async"
            width="600"
            height="600"
          />
          <div class="carousel-copy">
            <h2 data-i18n="catalog_${product.id}_title">
              ${product.es.title}
            </h2>
            <p data-i18n="catalog_${product.id}_text">
              ${product.es.text}
            </p>
            <span class="carousel-cta" data-i18n="carousel_view">
              Ver producto →
            </span>
          </div>
        </a>
      </div>
    `).join('')}

    <div class="carousel-controls">
      <button type="button" class="carousel-arrow" data-carousel-prev>
        ←
      </button>

      <button type="button" class="carousel-arrow" data-carousel-next>
        →
      </button>

      <button type="button" class="carousel-pause" data-carousel-pause>
        ❚❚
      </button>

      <div class="carousel-dots">
        ${products.map((product, index) => `
          <button
            type="button"
            class="carousel-dot"
            data-carousel-index="${index}"
            aria-label="${product.es.title}"
            aria-pressed="${index === 0}"
          ></button>
        `).join('')}
      </div>
    </div>
  `;

  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('[data-carousel-index]')];
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const pauseButton = carousel.querySelector('[data-carousel-pause]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let currentIndex = 0;
  let paused = reducedMotion.matches;
  let hovered = false;
  let timer = null;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, position) => {
      slide.hidden = position !== currentIndex;
    });

    dots.forEach((dot, position) => {
      dot.setAttribute('aria-pressed', String(position === currentIndex));
    });
  }

  function updateLabels() {
    const language = document.documentElement.lang === 'en' ? 'en' : 'es';
    const english = language === 'en';

    carousel.setAttribute('aria-label', english ? 'Products' : 'Productos');
    previous.setAttribute('aria-label', english ? 'Previous product' : 'Producto anterior');
    next.setAttribute('aria-label', english ? 'Next product' : 'Producto siguiente');

    pauseButton.textContent = paused ? '▶' : '❚❚';
    pauseButton.setAttribute(
      'aria-label',
      paused
        ? (english ? 'Resume carousel' : 'Reanudar carrusel')
        : (english ? 'Pause carousel' : 'Pausar carrusel')
    );

    dots.forEach((dot, index) => {
      dot.setAttribute('aria-label', products[index][language].title);
    });

    products.forEach(product => {
      const mainImage = document.querySelector(
        `[data-product-main="${product.id}"]`
      );

      if (mainImage) {
        mainImage.alt = product[language].variants[
          Number(mainImage.dataset.productImage)
        ];
      }

      const heroImage = carousel.querySelector(
        `[data-carousel-product="${product.id}"]`
      );
      heroImage.alt = product[language].variants[0];

      document.querySelectorAll(
        `.product-thumbnail[data-product="${product.id}"]`
      ).forEach(button => {
        button.setAttribute(
          'aria-label',
          product[language].variants[Number(button.dataset.imageIndex)]
        );
      });
    });
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = null;

    if (
      paused ||
      hovered ||
      document.hidden ||
      carousel.contains(document.activeElement)
    ) return;

    timer = window.setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  }

  function selectSlide(index) {
    paused = true;
    showSlide(index);
    updateLabels();
    restartTimer();
  }

  previous.addEventListener('click', () => selectSlide(currentIndex - 1));
  next.addEventListener('click', () => selectSlide(currentIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      selectSlide(Number(dot.dataset.carouselIndex));
    });
  });

  pauseButton.addEventListener('click', () => {
    paused = !paused;
    updateLabels();
    restartTimer();
  });

  carousel.addEventListener('mouseenter', () => {
    hovered = true;
    restartTimer();
  });

  carousel.addEventListener('mouseleave', () => {
    hovered = false;
    restartTimer();
  });

  carousel.addEventListener('focusin', restartTimer);
  carousel.addEventListener('focusout', () => {
    window.setTimeout(restartTimer, 0);
  });

  document.addEventListener('visibilitychange', restartTimer);

  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      paused = true;
      updateLabels();
      restartTimer();
    }
  });

  // Traduce también las etiquetas de imágenes y controles.
  languageButtons.forEach(button => {
    button.addEventListener('click', updateLabels);
  });

  setLanguage(document.documentElement.lang === 'en' ? 'en' : 'es');
  showSlide(0);
  updateLabels();
  restartTimer();
})();
