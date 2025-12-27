import { Footer } from './components/Footer'
import { Gallery, type GalleryItem } from './components/Gallery'
import { Hero } from './components/Hero'
import { Letter } from './components/Letter'
import { Memories, type Memory } from './components/Memories'
import { Navbar } from './components/Navbar'

const memories: Memory[] = [
  {
    tag: 'Nossa Filha',
    title: 'A Alegria do Natal',
    description: 'O sorriso dela abrindo os presentes é o meu melhor presente.',
    image: '/family.jpeg',
  },
  {
    tag: 'Nós Dois',
    title: 'Nosso Amor',
    description: 'Cada momento ao seu lado é uma celebração.',
    image: '/nosso-amor.jpeg',
  },
]

const gallery: GalleryItem[] = [
  {
    image: '/foto1.jpeg',
    span: 'col-span-2 row-span-2',
  },
  {
    image: '/foto2.jpeg',
  },
  {
    image: '/foto3.jpeg',
  },
  {
    image: '/foto4.jpeg',
  },
  {
    image: '/foto5.jpeg',
  },
  {
    image: '/family.jpeg',
    span: 'col-span-2',
  },
  {
    image: '/foto6.jpeg',
  },
  {
    image: '/foto7.jpeg',
  },
  {
    image: '/foto8.jpeg',
    span: 'col-span-2 row-span-2',
  },
  {
    image: '/foto9.jpeg',
  },
  {
    image: '/foto10.jpeg',
  },
  {
    image: '/foto11.jpeg',
  },
]

const heroImage =
  '/family.jpeg'

function App() {
  return (
    <div className="bg-background-dark min-h-screen text-white">
      <Navbar title="Natal 2025" />

      <main className="flex-grow pt-20">
        <div className="max-w-[960px] mx-auto px-4 sm:px-10 flex flex-col gap-12 pb-20">
          <Hero
            image={heroImage}
            badgeLabel="Especial de Natal"
            title="Feliz Natal"
            highlight="Meu Amor"
            description="Para a mulher da minha vida e nossa linda família. Que este Natal seja tão brilhante quanto o seu sorriso."
            ctaLabel="Ver Galeria"
          />

          <Memories items={memories} />
          <Gallery items={gallery} />
          <Letter
            title="Uma Carta Para Você"
            paragraphs={[
              '"Meu amor, neste Natal, eu só quero agradecer por você ser a luz dos meus dias. Ver você com nossa filha me faz o homem mais feliz do mundo."',
              '"Que possamos construir memórias ainda mais lindas juntos nos próximos anos. Você é o meu melhor presente, hoje e sempre."',
              '"Obrigado por cada sorriso, cada abraço e cada momento compartilhado. Você é a razão do meu Natal ser tão especial."',
            ]}
            closingLabel="Com todo amor,"
            signature="Renan Cruz"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
