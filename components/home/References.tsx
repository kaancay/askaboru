"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";


const projects = [
  {
    title: "Turistik Tesis Projeleri",
    text:
      "Otel ve turistik tesis projelerinde konfor, dayanıklılık ve uzun ömürlü tesisat çözümleri sunuyoruz.",
  },
  {
    title: "Villa ve Konut Projeleri",
    text:
      "Modern yaşam alanları için sessiz boru sistemleri ve güvenilir altyapı çözümleri sağlıyoruz.",
  },
  {
    title: "AVM ve Hastane Projeleri",
    text:
      "Büyük ölçekli yapılarda ihtiyaç duyulan kaliteli ve profesyonel tesisat sistemleri.",
  },
  {
    title: "Toplu Konut ve Kamu Projeleri",
    text:
      "Kamu yatırımları ve toplu konut projelerinde güvenilir ürün tedariği sağlıyoruz.",
  },
  {
    title: "Sanayi Projeleri",
    text:
      "Endüstriyel tesisler için yüksek performanslı boru ve altyapı çözümleri sunuyoruz.",
  },
  {
    title: "Tarımsal Sulama Projeleri",
    text:
      "Tarım alanlarında verimli ve dayanıklı sulama sistemleri için çözümler üretiyoruz.",
  },
];



export default function References() {


  const [active, setActive] = useState(0);



  return (

    <section className="bg-gray-50 py-28">


      <Container>



        <div className="mx-auto max-w-3xl text-center">


          <span
            className="
            inline-flex
            rounded-full
            bg-[#005B9A]/10
            px-5
            py-2
            text-sm
            font-bold
            tracking-widest
            text-[#005B9A]
            "
          >
            PROJE ALANLARIMIZ
          </span>




          <h2
            className="
            mt-6
            text-4xl
            font-black
            text-neutral-900
            lg:text-5xl
            "
          >
            Çözüm Sunduğumuz Proje Alanları
          </h2>




          <p
            className="
            mt-5
            text-lg
            leading-8
            text-neutral-600
            "
          >
            Aska Boru olarak farklı ölçeklerdeki projelere
            GF Hakan Plastik güvencesiyle kaliteli ürün ve
            profesyonel çözümler sunuyoruz.
          </p>


        </div>







        <div
          className="
          mt-16
          grid
          gap-10
          lg:grid-cols-2
          "
        >




          <div className="grid gap-4">


            {projects.map((project, index) => (


              <button

                key={project.title}

                onClick={() => setActive(index)}

                className={`
                rounded-2xl
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  active === index
                    ?
                    "border-[#005B9A] bg-[#005B9A] text-white shadow-xl"
                    :
                    "border-gray-200 bg-white text-neutral-900 hover:border-[#005B9A] hover:shadow-lg"
                }
                `}

              >


                <h3
                  className="
                  text-xl
                  font-black
                  "
                >

                  {project.title}

                </h3>



                {
                  active === index && (

                    <p
                      className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/90
                      "
                    >

                      {project.text}

                    </p>

                  )
                }


              </button>


            ))}


          </div>









          <div
            className="
            relative
            min-h-[550px]
            overflow-hidden
            rounded-[35px]
            shadow-2xl
            "
          >



            <Image

              src="/images/hakan-plastik.jpg"

              alt="GF Hakan Plastik Proje Çözümleri"

              fill

              sizes="(max-width: 1024px) 100vw, 50vw"

              className="
              object-cover
              transition
              duration-700
              hover:scale-105
              "

            />





            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#003B5C]/80
              via-transparent
              to-transparent
              "
            />






            <div
              className="
              absolute
              bottom-8
              left-8
              right-8
              text-white
              "
            >


              <h3
                className="
                text-3xl
                font-black
                "
              >

                GF Hakan Plastik

              </h3>



              <p
                className="
                mt-3
                text-white/90
                "
              >

                Yapı ve altyapı projelerinde güvenilir çözüm ortağınız.

              </p>


            </div>



          </div>




        </div>





      </Container>


    </section>

  );

}