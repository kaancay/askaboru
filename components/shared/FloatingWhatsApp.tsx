import { MessageCircle } from "lucide-react";
export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%2C%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp üzerinden iletişim kurun"
    >
      <MessageCircle size={25} />
      <span>Nasıl yardımcı olabiliriz?</span>
    </a>
  );
}
