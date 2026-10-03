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

    about_title: 'Una marca enfocada en productos textiles de limpieza.',
    about_text_1:
      'Trabajamos con una línea de productos pensada para limpieza cotidiana y comercial, con especial atención a clientes de mayoreo y distribución.',
    about_text_2:
      'Esta página será también un punto de contacto directo para conocer productos, solicitar precios y facilitar nuevas relaciones comerciales.',

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

    about_title: 'A brand focused on textile cleaning products.',
    about_text_1:
      'We offer a line of products designed for everyday and commercial cleaning, with special attention to wholesale and distribution customers.',
    about_text_2:
      'This website also serves as a direct point of contact to explore our products, request pricing, and build new business relationships.',

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
