import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCarousel() {
  // Configuração do Autoplay (5 segundos)
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const slides = [
    {
      href: "/blog",
      img: "./public/bannerFotos/banner-sd.webp",
      alt: "Imagem de Saúde Digital",
      title: "Fique por dentro das novidades",
      desc: "Acompanhe as últimas notícias sobre saúde digital no oeste do Pará.",
    },
    {
      href: "/cenarios",
      img: "./public/bannerFotos/banner-padrao.webp",
      alt: "Equipe em campooooooo",
      title: "Venha nos conhecer",
      desc: "Descubra onde atuamos e como impactamos a comunidade.",
    },
  ]

  return (
    <div className="w-full relative group">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <a href={slide.href} className="relative block overflow-hidden rounded-lg">
                {/* Imagem com efeito de Zoom e Brilho */}
                <div className="relative h-[250px] md:h-[480px] w-full overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="h-full w-full object-cover brightness-75 transition-all duration-500 hover:scale-105 hover:brightness-50"
                  />
                </div>

                {/* Conteúdo Centralizado */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-white text-sm md:text-lg drop-shadow-md max-w-[80%]">
                    {slide.desc}
                  </p>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botões de Navegação (aparecem ao passar o mouse ou sempre no mobile) */}
        <CarouselPrevious className="left-4 bg-black/30 text-white border-none hover:bg-black/80 w-12 h-12" />
        <CarouselNext className="right-4 bg-black/30 text-white border-none hover:bg-black/80 w-12 h-12" />
      </Carousel>
    </div>
  )
}