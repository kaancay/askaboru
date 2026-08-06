import Image from "next/image";
import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";


const products = [
  {
    title: "PVC Boru Sistemleri",
    image: "/images/products/pvc.jpg",
    description:
      "Altyapı ve üstyapı projeleri için dayanıklı ve uzun ömürlü PVC boru çözümleri.",
  },
  {
    title: "Temiz Su Sistemleri",
    image: "/images/products/temiz-su.jpg",
    description:
      "Konut ve ticari yapılarda güvenilir temiz su tesisat sistemleri.",
  },
  {
    title: "Yerden Isıtma Sistemleri",
    image: "/images/products/yerden-isitma.jpg",
    description:
      "Konforlu ve verimli yaşam alanları için modern yerden ısıtma çözümleri.",
  },
];


export default function Products() {
  return (
    <section
      id="urunler"
      className="bg-gradient-to-b from-gray-50 to-white py-28"
    >

      <Container>


        <SectionTitle
          badge="ÜRÜNLERİMİZ"
          title="Ürün Gruplarımız"
          description="GF Hakan Plastik ürünleriyle altyapı, üstyapı ve tesisat projeleriniz için güvenilir çözümler sunuyoruz."
        />




        {/* ÖNE ÇIKAN SILENTA */}

        <div className="mt-16 overflow-hidden rounded-[40px] bg-white shadow-2xl">


          <div className="grid lg:grid-cols-2">


            {/* Silenta Görsel */}

            <div className="relative h-[450px]">

              <Image
                src="/images/products/sessiz-boru.jpg"
                alt="Silenta Sessiz Boru Sistemleri"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>





            {/* Silenta Yazı */}

            <div className="flex flex-col justify-center p-10 lg:p-14">


              <span className="w-fit rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-700">
                ÖNE ÇIKAN ÜRÜN
              </span>



              <h3 className="mt-6 text-4xl font-black text-neutral-900">
                Silenta Sessiz Boru Sistemleri
              </h3>



              <p className="mt-6 text-lg leading-8 text-neutral-600">

                Modern yapılarda maksimum konfor sağlayan,
                ses yalıtımı yüksek ve dayanıklı sessiz boru çözümleri.

              </p>



              <button className="mt-8 w-fit rounded-xl bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800">

                Detaylı Bilgi

              </button>


            </div>


          </div>


        </div>








        {/* ALT ÜRÜN KARTLARI */}

        <div className="mt-12 grid gap-8 md:grid-cols-3">


          {products.map((product) => (

            <div
              key={product.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >


              <div className="relative h-64 overflow-hidden">


                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
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