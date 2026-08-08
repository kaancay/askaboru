import Image from "next/image";
import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";


const products = [
  {
    title: "Silenta 3A",
    image: "/images/products/silenta.3a.png",
    pdf: "/pdf/silenta.3a.pdf",
  },
  {
    title: "Silenta Premium",
    image: "/images/products/silenta.premium.png",
    pdf: "/pdf/silenta.premium.pdf",
  },
  {
    title: "Silenta FR",
    image: "/images/products/silenta.fr.png",
    pdf: "/pdf/silenta.fr.pdf",
  },
  {
    title: "PVC Atık Su Sistemleri",
    image: "/images/products/pvc.png",
    pdf: "/pdf/pvc.pdf",
  },
  {
    title: "Aquasystem PP-R ve PP-RCT",
    image: "/images/products/aquasystem.png",
    pdf: "/pdf/ppr.pdf",
  },
  {
    title: "Yerden Isıtma Sistemleri",
    image: "/images/products/yerden.isitma.png",
    pdf: "",
  },
];



export default function Products() {

return (

<section id="urunler">


  <Container>


    <SectionTitle

      badge="ÜRÜNLERİMİZ"

      title="Ürün Gruplarımız"

      description="GF Hakan Plastik ürünleriyle altyapı ve üstyapı projeleriniz için güvenilir çözümler sunuyoruz."

    />




    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">



      {products.map((product) => (


        <div

          key={product.title}

          className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          "

        >



          <div className="relative h-72 bg-white">


            <Image

              src={product.image}

              alt={product.title}

              fill

              sizes="(max-width:768px) 100vw, 33vw"

              className="
              object-contain
              p-5
              transition
              duration-500
              hover:scale-105
              "

            />


          </div>






          <div className="px-8 pb-8 pt-5">



            <h3
              className="
              text-xl
              font-black
              text-neutral-900
              "
            >

              {product.title}

            </h3>





            <div
              className="
              mt-4
              h-1
              w-12
              rounded-full
              bg-[#005B9A]
              "
            />







            {product.pdf ? (


              <a

                href={product.pdf}

                target="_blank"

                rel="noopener noreferrer"

                className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#005B9A]
                px-7
                py-3
                text-sm
                font-bold
                !text-white
                shadow-md
                transition
                hover:bg-[#003B5C]
                "

              >

                Detaylı Bilgi Al


              </a>



            ) : (



              <a

                href="#iletisim"

                className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#005B9A]
                px-7
                py-3
                text-sm
                font-bold
                !text-white
                shadow-md
                transition
                hover:bg-[#003B5C]
                "

              >

                İletişime Geçiniz


              </a>


            )}



          </div>




        </div>


      ))}



    </div>



  </Container>


</section>

);

}