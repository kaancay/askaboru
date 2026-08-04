import Container from "../layout/Container";

const stats = [
  {
    number: "2016",
    title: "Kuruluş Yılı",
  },
  {
    number: "81",
    title: "İle Sevkiyat",
  },
  {
    number: "1000+",
    title: "Ürün Çeşidi",
  },
  {
    number: "%100",
    title: "Müşteri Memnuniyeti",
  },
];

export default function Stats() {
  return (
    <section className="bg-red-700 py-20 text-white">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title}>
              <h2 className="text-5xl font-black">{item.number}</h2>

              <p className="mt-3 text-lg text-red-100">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}