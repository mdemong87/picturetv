import Container from "@/app/componnent/clientcomponnent/Container";
import PortfolioCardWrper from "@/app/componnent/clientcomponnent/portfolio/PortfolioCardWrper";
import Image from "next/image";
import Link from "next/link";
import portfolioBanner from "../../../public/assets/portfolio.jpg";


const Portfolio = () => {
    return (
        <main className="h-fit w-screen pt-20 pb-14">

            <div className="w-screen">
                <Image className="w-screen object-cover h-[400px]" src={portfolioBanner} width={1000} height={1000} alt="portfolio-Banner" />
            </div>
            <Container>
                <Container>
                    <h3 className="text-gray-600 text-semibold text-xl text-center mt-9">
                        Celebrities, Fashion, Beauty, Commercial photographer & Films Director Mala Seza was born in Port-au-Prince, Haiti and relocated to New York City in 1998. He started photography 12 years ago. His unique style represents different ways he sees life, showing the composition and use of colors which reflects liveliness. He uses a wide range of lighting techniques depending on the project and a variety of different camera formats and photographic methods. He always brings a combination of professionalism, creative problem solving skills and a great attitude to the shoot. Mala has the ability to create large scale productions with modest budgets. He works promptly without complication and takes a great deal of satisfaction in his work. Please feel free to contact Picture TV Media Productions about any upcoming projects you may have. He is always ready for his next challenge
                    </h3>

                    <div className="flex justify-center items-center mt-6">
                        <Link className='pbg2 rounded-md text-base shadow-xl font-medium p-3 text-white' href={"/watch"}>Watch</Link>
                    </div>
                </Container>

                <PortfolioCardWrper />

            </Container>
        </main>
    )
}

export default Portfolio;