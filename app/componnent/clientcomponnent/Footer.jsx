import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaPatreon, FaSquareXTwitter } from "react-icons/fa6";
import logo from '../../../public/assets/logo.png';
import styles from "../../../styles/clientconponnent/Footer/Footer.module.css";
import Container from "../../componnent/clientcomponnent/Container";

export default function Footer() {
    return (
        <footer className={`pbg ${styles.footer}`}>
            <Container>
                <div className={styles.footerWrp}>
                    <div className={styles.singleWrp}>
                        <Image className={`w-full h-full ${styles.foooterLogo}`} src={logo} width={1000} height={1000} alt="footer-logo" />
                        <p className="text-lg text-gray-300 text-center md:text-left translate-y-4 md:-translate-y-4 pl-2">
                            Your Entertainment  & Educational Network
                        </p>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>General Contact</h4>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="tel:929.888.3820" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons}`} />
                                    <span>
                                        929.888.3820
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:picturetimetv@gmail.com" target="blank">
                                    <BsArrowRight className={styles.rightArrowIcons} />
                                    <span>
                                        picturetimetv@gmail.com
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://maps.app.goo.gl/x5vwU51htrRVnf1z7" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons} text-2xl`} />
                                    <span>
                                        228 Park Ave South Suite 949383 New York, NY 10003
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    {/* <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Join Now</h4>
                        <ul className={styles.ul}>
                            <li><a href="/auth/ragester"><BsArrowRight className={styles.rightArrowIcons} /><span>Sign Up</span></a></li>
                            <li><a href="/auth/login"><BsArrowRight className={styles.rightArrowIcons} /><span>Sign In</span></a></li>
                        </ul>
                    </div> */}
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Information</h4>
                        <ul className={styles.ul}>
                            <li><a href="/aboutus"><BsArrowRight className={styles.rightArrowIcons} /><span>About Us</span></a></li>
                            <li><a href="/contactus"><BsArrowRight className={styles.rightArrowIcons} /><span>Contact Us</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Terms and Conditions</span></a></li>

                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Follow Us</h4>
                        <div className={styles.Connect}>

                            <Link href={'https://web.facebook.com/malaspeaksunday/?_rdc=1&_rdr'} target="blank" className={styles.IWrp}>
                                <FaFacebook className={`${styles.contaceIcons} text-[#4267B2]`} />
                            </Link>
                            <Link href={'https://www.instagram.com/malaspeaksunday/'} target="blank" className={styles.IWrp}>
                                <AiFillInstagram className={`${styles.contaceIcons} text-[#c1558b]`} />
                            </Link>
                            <Link href={'https://www.youtube.com/@malaspeaksunday'} target="blank" className={styles.IWrp}>
                                <FaYoutube className={`${styles.contaceIcons} text-[#C4302B]`} />
                            </Link>
                            <Link href={'https://www.pinterest.com/malaspeaksunday/'} target="blank" className={styles.IWrp}>
                                <FaPinterest className={`${styles.contaceIcons} text-[#E60023]`} />
                            </Link>

                            <Link href={'https://x.com/malaspeaksunday'} target="blank" className={styles.IWrp}>
                                <FaSquareXTwitter className={`${styles.contaceIcons} text-[#00ACEE]`} />
                            </Link>
                            <Link href={'https://pin.it/56Ht7FrEW'} target="blank" className={styles.IWrp}>
                                <FaPatreon className={`${styles.contaceIcons} text-[#f96854]`} />
                            </Link>

                        </div>
                    </div>





                    <div className={styles.copyRight}>Powered by Picture Time - Picture TV Copy Right at 2015 Picture TV all rights reserved
                        {/* || <Link style={{ color: "#77a041" }} href="https://emonhossen.xyz">Developed By Md Emon Hossen</Link> */}
                    </div>
                </div>
            </Container>
        </footer>
    )
}