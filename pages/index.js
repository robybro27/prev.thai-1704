
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const sections = [
    {
      title: "Piano Voli",
      description: "Consulta gli orari e i dettagli dei voli inclusi nel pacchetto.",
      href: "/piano-voli",
      image: "/images/piano-voli.jpg"
    },
    {
      title: "Itinerario in pillole",
      description: "Panoramica sintetica del tour Voyager Siam & Koh Samui.",
      href: "/itinerario-pillole",
      image: "/images/itinerario-pillole.jpg"
    },
    {
      title: "Itinerario dettagliato",
      description: "Scopri giorno per giorno il viaggio attraverso la Thailandia.",
      href: "/itinerario-dettagliato",
      image: "/images/itinerario-dettagliato.jpg"
    },
    {
      title: "Quote e Assicurazioni",
      description: "Scopri costi, promozioni e assicurazioni incluse e facoltative.",
      href: "/quote-assicurazioni",
      image: "/images/quote.jpg"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Thailandia & Koh Samui - Agosto 2025</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Thailandia & Koh Samui - Agosto 2025
        </h1>

        <p className={styles.description}>
          Scopri l’emozione di un viaggio su misura tra cultura, natura e relax.
        </p>

        <div className={styles.grid}>
          {sections.map((section, index) => (
            <a key={index} href={section.href} className={styles.card}>
              <img src={section.image} alt={section.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
