import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaPinterest, FaYoutube } from "react-icons/fa";
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
                        <p className="text-md text-gray-300 text-center md:text-left -translate-y-4 pl-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore!
                        </p>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Join Now</h4>
                        <ul className={styles.ul}>
                            <li><a href="/auth/ragester"><BsArrowRight className={styles.rightArrowIcons} /><span>Sign Up</span></a></li>
                            <li><a href="/auth/login"><BsArrowRight className={styles.rightArrowIcons} /><span>Sign In</span></a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Information</h4>
                        <ul className={styles.ul}>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>About Us</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Terms and Conditions</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Cookies Policy</span></a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Follow Us</h4>
                        <div className={styles.Connect}>
                            <Link href={'https://web.facebook.com/malaspeaksunday/?_rdc=1&_rdr'} className={styles.IWrp}>
                                <FaFacebookF className={styles.contaceIcons} />
                            </Link>
                            <Link href={'https://www.instagram.com/malaspeaksunday/'} className={styles.IWrp}>
                                <AiFillInstagram className={styles.contaceIcons} />
                            </Link>
                            <Link href={'https://www.youtube.com/@malaspeaksunday'} className={styles.IWrp}>
                                <FaYoutube className={styles.contaceIcons} />
                            </Link>
                            <Link href={'https://www.pinterest.com/malaspeaksunday/'} className={styles.IWrp}>
                                <FaPinterest className={styles.contaceIcons} />
                            </Link>
                        </div>
                    </div>





                    <div className={styles.copyRight}>Copyright © 2024
                        PictureTV. All Rights Reserved
                        {/* || <Link style={{ color: "#77a041" }} href="https://emonhossen.xyz">Developed By Md Emon Hossen</Link> */}
                    </div>
                </div>
            </Container>
        </footer>
    )
}