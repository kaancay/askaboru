"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from "lucide-react";
export default function Contact() {
  const [product, setProduct] = useState("");
  const [note, setNote] = useState("");
  const message = `Merhaba Aska Boru, ${product || "ürünleriniz"} hakkında bilgi ve fiyat teklifi almak istiyorum.${note.trim() ? `\n\nProje notum: ${note.trim()}` : ""}`;
  return (
    <section id="iletisim" className="section contact-section contact-tinted">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">DOĞRUDAN ULAŞIN</p>
          <h2>
            Bizimle
            <br />
            <span>iletişime geçin.</span>
          </h2>
          <p>Ürün bilgisi ve fiyat teklifi için buradayız.</p>
          <div className="contact-details">
            <a className="contact-method" href="tel:+902423381666">
              <Phone size={23} aria-hidden="true" />
              <span>
                <small>Telefon</small>
                <strong>(0242) 338 16 66</strong>
              </span>
            </a>
            <a
              className="contact-method"
              href="https://wa.me/905374198285"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={23} aria-hidden="true" />
              <span>
                <small>WhatsApp</small>
                <strong>+90 537 419 82 85</strong>
              </span>
            </a>
            <div className="contact-method contact-email">
              <Mail size={23} aria-hidden="true" />
              <div>
                <small>E-posta</small>
                <a href="mailto:info@askaboru.com">info@askaboru.com</a>
                <a href="mailto:askaboru@gmail.com">askaboru@gmail.com</a>
              </div>
            </div>
          </div>
          <a className="text-link contact-visit" href="#harita">
            <MapPin size={18} aria-hidden="true" /> Adres ve çalışma saatlerimiz
          </a>
        </div>
        <div className="quote-card">
          <span className="quote-badge">
            <MessageCircle size={18} aria-hidden="true" /> WHATSAPP TEKLİF HATTI
          </span>
          <h3>Malzeme listenizi gönderin.</h3>
          <p>Ürün, ölçü ve miktar bilgilerini paylaşın.</p>
          <label htmlFor="quote-product">Ürün grubu</label>
          <div className="select-wrap">
            <select
              id="quote-product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="">Ürün grubu seçin</option>
              <option>Silenta 3A</option>
              <option>Silenta Premium</option>
              <option>Silenta FR</option>
              <option>PVC Atık Su Sistemleri</option>
              <option>Aquasystem PP-R / PP-RCT</option>
              <option>Yerden Isıtma Sistemleri</option>
              <option>Diğer / Genel bilgi</option>
            </select>
            <ChevronDown size={18} />
          </div>
          <label htmlFor="quote-note">Ölçü, miktar veya malzeme listeniz</label>
          <textarea
            id="quote-note"
            rows={3}
            maxLength={1500}
            placeholder="Örneğin: PVC boru 110 mm, 30 metre; 10 adet dirsek..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <a
            className="button button-whatsapp"
            href={`https://wa.me/905374198285?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> WhatsApp’tan teklif isteyin
          </a>
          <p className="quote-note">
            Talebiniz WhatsApp’ta açılır; göndermeden önce düzenleyebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
