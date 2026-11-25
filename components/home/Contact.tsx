"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronDown,
  Check,
} from "lucide-react";
export default function Contact() {
  const [product, setProduct] = useState("");
  const [note, setNote] = useState("");
  const message = `Merhaba Aska Boru, ${product || "ürünleriniz"} hakkında bilgi ve fiyat teklifi almak istiyorum.${note.trim() ? `\n\nProje notum: ${note.trim()}` : ""}`;
  return (
    <section id="iletisim" className="section contact-section">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">İLETİŞİME GEÇİN</p>
          <h2>
            Bir sonraki projenize
            <br />
            <span>birlikte başlayalım.</span>
          </h2>
          <p>
            Ürün bilgisi, fiyat teklifi veya teknik destek.
            <br />
            İhtiyacınızı paylaşın, birlikte değerlendirelim.
          </p>
          <div className="contact-details">
            <a href="tel:+902423381666">
              <Phone size={22} />
              <span>
                <small>BİZİ ARAYIN</small>
                <strong>(0242) 338 16 66</strong>
              </span>
            </a>
            <a href="mailto:info@askaboru.com">
              <Mail size={22} />
              <span>
                <small>E-POSTA GÖNDERİN</small>
                <strong>info@askaboru.com</strong>
              </span>
            </a>
            <a href="mailto:askaboru@gmail.com">
              <Mail size={22} />
              <span>
                <small>ALTERNATİF E-POSTA</small>
                <strong>askaboru@gmail.com</strong>
              </span>
            </a>
            <a href="#harita">
              <MapPin size={22} />
              <span>
                <small>ANTALYA MERKEZ</small>
                <strong>Kızılarık, 2814. Sk. No:54/1</strong>
                <span>07310 Muratpaşa / Antalya</span>
              </span>
            </a>
          </div>
        </div>
        <div className="quote-card">
          <span className="quote-badge">
            <MessageCircle size={18} /> WHATSAPP TEKLİF HATTI
          </span>
          <h3>İhtiyacınızı bize anlatın.</h3>
          <p>Ürün grubunuzu seçin, teklif talebinizi hazırlayın.</p>
          <label htmlFor="quote-product">İlgilendiğiniz ürün grubu</label>
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
          <label htmlFor="quote-note">
            Projenizle ilgili kısa bir not <span>(isteğe bağlı)</span>
          </label>
          <textarea
            id="quote-note"
            rows={3}
            maxLength={1500}
            placeholder="Ölçü, miktar veya proje ihtiyacınızı yazabilirsiniz..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <a
            className="button button-whatsapp"
            href={`https://wa.me/905374198285?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> WhatsApp’ta talep oluşturun
          </a>
          <p className="quote-note">
            <Check size={15} /> Mesajınız WhatsApp’ta açılır; gönderimi siz
            yaparsınız.
          </p>
        </div>
      </div>
    </section>
  );
}
