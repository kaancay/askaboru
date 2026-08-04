import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Container>

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Image
              src="/logos/aska-logo.png"
              alt="Aska Boru"
              width={180}
              height={60}
            />

            <p className="mt-6 leading-8 text-neutral-400">
              2016 yılından bu yana Antalya merkezli olarak Hakan Plastik
              ürünleriyle Türkiye genelinde güvenilir çözümler sunuyoruz.
            </p>

          </div>

          {/* Kurumsal */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Kurumsal
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                  <ChevronRight size={18} />
                  Anasayfa
                </Link>
              </li>

              <li>
                <Link href="/hakkimizda" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                  <ChevronRight size={18} />
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link href="/urunler" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                  <ChevronRight size={18} />
                  Ürünler
                </Link>
              </li>

              <li>
                <Link href="/iletisim" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                  <ChevronRight size={18} />
                  İletişim
                </Link>
              </li>

            </ul>

          </div>

          {/* Ürünler */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Ürün Grupları
            </h3>

            <ul className="space-y-4 text-neutral-400">

              <li>PVC Boru Sistemleri</li>
              <li>Temiz Su Sistemleri</li>
              <li>Atık Su Sistemleri</li>
              <li>Sessiz Boru Sistemleri</li>
              <li>Ek Parçalar</li>
              <li>Yerden Isıtma</li>

            </ul>

          </div>

          {/* İletişim */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              İletişim
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin className="mt-1 text-red-600" size={20} />
                <span className="text-neutral-400">
                  Antalya
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 text-red-600" size={20} />
                <span className="text-neutral-400">
                  Telefon eklenecek
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-red-600" size={20} />
                <span className="text-neutral-400">
                  info@askaboru.com
                </span>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 text-red-600" size={20} />
                <span className="text-neutral-400">
                  Pazartesi - Cumartesi
                  <br />
                  08:00 - 18:00
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 py-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">

            <p>
              © 2026 Aska Boru. Tüm Hakları Saklıdır.
            </p>

            <p>
              Antalya • Türkiye
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}