import Image from "next/image";
import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";

const products = [
  {
    title: "PVC Boru Sistemleri",
    image: "/images/products/pvc.jpg",
    description:
      "Altyapı ve üstyapı projeleri için yüksek dayanıklılığa sahip PVC boru çözümleri.",
  },
  {
    title: "Temiz Su Sistemleri",
    image: "/images/products/temiz-su.jpg",
    description:
      "Konut ve ticari yapılarda güvenilir temiz su tesisat sistemleri.",
  },
  {
    title: "Atık Su Sistemleri",
    image: "/images/products/atik-su.jpg",
    description:
      "Uzun ömürlü ve yüksek performanslı atık su çözümleri.",
  },
  {
    title: "Sessiz Boru Sistemleri",
    image: "/images/products/sessiz-boru.jpg",
    description:
      "Gürültüyü minimum seviyeye indiren modern sessiz boru sistemleri.",
  },
  {
    title: "Ek Parçalar",
    image: "/images/products/ek-parca.jpg",
    description:
      "Dirsek, manşon, kelepçe ve tüm bağlantı ekipmanları.",
  },
  {
    title: "Yerden Isıtma Sistemleri",
    image: "/images/products/yerden-isitma.jpg",
    description:
      "Konforlu ve verimli yaşam alanları için yerden ısıtma çözümleri.",
  },
];

export default function Products() {
  return (
    <section
      id="urunler"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <Container>
        <SectionTitle
          badge="ÜRÜNLERİMİZ"
          title="Ürün Gruplarımız"
          description="Aska Boru olarak Hakan Plastik ürünleriyle altyapı, üstyapı ve tesisat projeleriniz için güvenilir çözümler sunuyoruz."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {product.description}
                </p>

                <button className="mt-8 rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800">
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}