function abrirWhatsApp(
  message = "Olá! Gostaria de falar com um especialista da SOLUWAY.",
) {
  const phone = "555194704936";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener");
}

function mapearLinkWhatsApp(id, message) {
  const link = document.getElementById(id);

  if (!link) {
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    abrirWhatsApp(message);
  });
}

mapearLinkWhatsApp(
  "whatsapp-fale-conosco-header",
  "Olá! Gostaria de falar com a SOLUWAY.",
);

mapearLinkWhatsApp(
  "whatsapp-especialista-hero",
  "Olá! Gostaria de falar com um especialista da SOLUWAY.",
);

mapearLinkWhatsApp(
  "whatsapp-especialista-why",
  "Olá! Gostaria de falar com um especialista da SOLUWAY.",
);

mapearLinkWhatsApp(
  "whatsapp-especialista-cta",
  "Olá! Gostaria de falar com um especialista da SOLUWAY.",
);
