import SingleBlogCard from "@/app/componnent/clientcomponnent/blog/singleBlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Image from "next/image";
import blogImage from "../../../public/assets/bg-3.jpg";
import UnderDevelopment from "@/app/componnent/clientcomponnent/UnderDevelopment";

const Blogs = () => {
    return (
        <main className="h-fit pt-36 pb-14 blogBgbannar">
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-8 w-full h-fit text-white rounded-md flex flex-col gap-5">
                        <SingleBlogCard title={"Kelly Faetanini Spring 2017 Bridal Collection"} dis="Falling in love and getting engaged is a magical journey, but for every bride, finding the perfect wedding dress is the moment she truly feels like a queen on her big day. With endless styles and designers to choose from, the dress must be as special as the love story it celebrates. One designer who continues to enchant the bridal world with her breathtaking creations is Kelly Faetanini. Her latest Spring 2017 collection takes inspiration from the 18th-century Victorian era, blending timeless elegance with a modern twist.Kelly's designs exude regal sophistication with luxurious gold accents symbolizing prestige and intricate lace details capturing the romantic essence of the era. Featuring only the finest fabrics—like silk organza, chantilly lace, silk mikado, and structured tulle—each gown offers a flawless fit. Brides can choose from a variety of silhouettes, including figure-flattering fit-and-flare, classic ball gowns, elegant A-lines, and sleek sheaths, ensuring a perfect match for every style.What sets Kelly apart is her attention to functionality, adding thoughtful touches like removable beaded straps, pockets, and detachable skirts. Standout pieces from her collection include a hand-painted 14K gold goose feather bodice paired with an ostrich feather ball gown skirt, a whimsical ombré ball gown with tulle bodice and pockets, and a showstopping strapless gold-embroidered bodycon dress with an illusion back and detachable skirt. All available in classic ivory as well.Since 2012, Kelly Faetanini has been mesmerizing the bridal industry with her exceptional designs, and her latest collection is no exception—crafted to make every bride feel truly extraordinary" />




                        <SingleBlogCard title={"Kelly Faetanini Featured on The Bachelor at 20: A Celebration of Love"} dis="On Sunday, February 14th, The Bachelor invited the nation to witness one of the most highly anticipated weddings in the shows history. In a special two-hour event, The Bachelor at 20: A Celebration of Love, hosted by Chris Harrison on ABC, recent sweethearts Jade Roper and Tanner Tolbert—who fell in love on Bachelor in Paradise—tied the knot surrounded by the largest gathering of Bachelor alumni ever.In this unforgettable celebration, Jades bridesmaids stunned in gorgeous Kelly Faetanini Bridesmaids dresses, featuring styles EV 127, BS105, and BS109. These elegant designs, part of the exclusive #AltarEgo collection, are available at Brideside and select authorized Kelly Faetanini retailers.Kelly Faetaninis timeless designs once again take center stage, adding a touch of modern sophistication to a day filled with love, joy, and unforgettable moments.About Kelly Faetanini.Born and raised in the charming suburbs of Ohio, Kelly Faetanini discovered her passion for design at a young age, learning the art of tailoring from her grandmother. “I will always be grateful to her for nurturing my creativity and talent,” Kelly shares, reflecting on the foundation that ignited her career. With this inspiration, she pursued her dreams at the International Academy of Design & Technology in Chicago, graduating in 2006 with a BFA in Design.Kelly's talent quickly propelled her to success, as she took on the role of head designer for the prestigious Jewel by Priscilla of Boston Collection. However, in 2012, Kelly set out on her own journey, establishing the Kelly Faetanini Bridal collection, where she brought her vision of 'Modern Designs for the Timeless Bride' to life. Kellys signature promise is simple yet profound: to create stunning gowns that combine impeccable design details with a flawless feminine fit for brides of all shapes and sizes.In Spring 2016, Kelly expanded her offerings with the launch of Kelly Faetanini Bridesmaids, further elevating her commitment to timeless beauty and modern elegance for every bridal party.With a deep respect for craftsmanship and a passion for innovation, Kelly Faetanini continues to redefine the bridal experience, designing unforgettable dresses that make every bride's dream a reality." />






                        <SingleBlogCard title={"Isabelle Armstrong - Spring 2016 Collection"} dis={"As spring approaches, many couples are preparing to say 'I do' in the new year, and for brides-to-be, finding the perfect wedding dress is key to turning that special day into a fairytale. Renowned for luxury and elegance, bridal design house Isabelle Armstrong offers the ultimate blend of beauty and sophistication. With the launch of their Spring 2016 collection, this design powerhouse is a must-visit for any bride searching for her dream gown.The collection dazzles with exquisitely draped silks, delicate laces, and hand-beaded fabrics that bring a true 'wow' factor to each piece. Isabelle Armstrong's bridal gowns, featuring geometric embroidery and soft, romantic fabrics, capture the brilliance of a diamond with their multifaceted designs. Every gown is handcrafted with meticulous attention to detail, combining classic silhouettes with intricate embellishments that make them timeless yet modern.For the bride who seeks both luxury and lasting beauty, Isabelle Armstrong's Spring 2016 collection is the epitome of bridal elegance."} />



                    </div>
                    <aside className="col-span-12 md:col-span-4 w-full bg-[#8888887c] text-white rounded-md h-full p-5">
                        <Image className="col-span-6 lg:col-span-2 w-full rounded-md" src={blogImage} alt="blog-image" width={1000} height={1000} />
                        <div className="col-span-6 lg:col-span-4 w-full mt-5">
                            <h2 className="text-xl">Inbal Dror Fall/Winter Bridal Collection</h2>
                            <p className="text-gray-300 pt-3 text-base">
                                Inbal Dror's Fall/Winter 2016 bridal collection is a seductive blend of elegance and boldness, featuring 32 stunning pieces that range from breathtaking bridal gowns to sultry evening wear. Known for infusing glamour and excitement into each design, Inbal's latest collection is no exception. This season, she incorporates the finest European fabrics and embellishments, from delicate layers of silk tulle to Chantilly lace, matte sequins, laser-cut embroidery, crystal and pearl beading, and even touches of 3D printing.

                                The color palette is a dream of soft ivory, vanilla, champagne, and charcoal blush, providing the perfect backdrop for intricate detailing. Each piece embodies an airy, ethereal quality, with sheer bodices, flowing skirts, plunging necklines, high slits, and lace and beading carefully placed over translucent fabrics.

                                This collection offers a captivating, transpicuous vibe that exudes confidence and allure—making it perfect for the bride ready to make a bold statement. However, this is not a collection for the faint of heart; it's designed for those who dare to embrace their beauty with fearless sophistication.
                            </p>



                        </div>














                        <Image className="col-span-6 lg:col-span-2 w-full rounded-md mt-[40px]" src={blogImage} alt="blog-image" width={1000} height={1000} />
                        <div className="col-span-6 lg:col-span-4 w-full mt-5">
                            <h2 className="text-xl">Dennis Basso's Collection for Kleinfeld: A Tribute to the New York Bride</h2>
                            <p className="text-gray-300 pt-3 text-base">
                                This season, Dennis Basso's collection for Kleinfeld celebrates the essence of the New York bride and her glamorous, jet-setting lifestyle. With a perfect blend of elegance and sophistication, the collection offers a wide array of silhouettes and styles that cater to every woman's unique taste.

                                Standout looks include an ivory strapless tea-length tulle gown, an ivory stretch satin mermaid dress with a chic high collar and bow neckline, and a flirty short ivory silk jacquard cocktail dress—a playful take on the classic short sleeve ball gown, which was the final look to dazzle on the runway.

                                Dennis Basso's collection is timeless yet fresh, offering modern, chic designs that feel as relevant for today's bride as they will for generations to come, making it perfect for women of any age who appreciate classic elegance with a contemporary edge.
                            </p>



                        </div>
                    </aside >
                </div>
            </Container>


            <UnderDevelopment />
        </main>
    )
}

export default Blogs;