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
                        Patrick McMullan Company photographers ensure your event captivates long after the final hour.
                        With a powerful media distribution list, stylistic photographs, and social media offerings—your event lives on.
                    </h3>

                    <div className="flex justify-center items-center mt-6">
                        <Link className='pbg2 rounded-md text-base shadow-xl font-medium p-3 text-white' href={"/ptv"}>Watch</Link>
                    </div>
                </Container>

                <PortfolioCardWrper />

            </Container>
        </main>
    )
}

export default Portfolio;