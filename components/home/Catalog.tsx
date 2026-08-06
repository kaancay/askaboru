import Container from "../layout/Container";
import { FileText, Download } from "lucide-react";


export default function Catalog() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">

      <Container>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">


          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-14">


            {/* SOL ALAN */}

            <div>


              <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-700">
                DOKÜMANLAR
              </span>



              <h2 className="mt-6 text-4xl font-black leading-tight text-neutral-900">
                GF Hakan Plastik
                <br />
                Ürün Kataloğu
              </h2>




              <p className="mt-6 text-lg leading-8 text-neutral-600">

                Güncel GF Hakan Plastik ürün kataloğunu inceleyebilir,
                ürün grupları hakkında detaylı bilgi alabilirsiniz.

              </p>




              <a
                href="/pdf/gf-katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-700 px-8 py-4 font-extrabold !text-white shadow-lg transition duration-300 hover:bg-red-800"
              >

                <Download size={20} />

                PDF Kataloğunu Aç

              </a>



            </div>







            {/* SAĞ ALAN */}


            <div className="flex justify-center">


              <div className="relative flex h-80 w-60 flex-col items-center justify-center rounded-[35px] bg-gradient-to-b from-red-700 to-red-800 text-center text-white shadow-2xl">


                <div className="absolute inset-3 rounded-[28px] border border-white/20"></div>



                <FileText 
                  size={70}
                  strokeWidth={1.5}
                />



                <h3 className="mt-6 text-3xl font-black">
                  GF
                </h3>



                <p className="mt-2 text-red-100">
                  Hakan Plastik
                </p>


                <p className="text-sm text-red-100">
                  Ürün Kataloğu
                </p>



              </div>



            </div>



          </div>


        </div>


      </Container>

    </section>
  );
}