import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
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
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Get in Touch</h4>
                        <ul className={styles.ul}>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Campus Contact</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Meet With Us</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Report Copyright</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Report on Security Issues</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Privacy Statement</span></a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Useful Links</h4>
                        <ul className={styles.ul}>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Campus Contact</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Meet With Us</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Report Copyright</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Report on Security Issues</span></a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} /><span>Privacy Statement</span></a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Connect With Us</h4>
                        <div className={styles.addressphoneminaWrp}>
                            <Link href={"tel:+880 1713 738679"}>
                                <AiOutlinePhone className={styles.addressOcons} />
                                <span>+880 1713 738679</span>
                            </Link>
                            <Link href={"mailto:chandashmshighschool@gmail.com"}>
                                <AiOutlineMail className={styles.addressOcons} />
                                <span>chandashmshighschool@gmail.com</span>
                            </Link>
                            <Link href={"https://maps.app.goo.gl/2aeDenkhraQnqois6"}>
                                <CiLocationOn className={styles.addressOcons} />
                                <span>Chandash, Mohadevpur, Naogoan</span>
                            </Link>
                        </div>
                        <div className={styles.Connect}>
                            <Link href="https://web.facebook.com/groups/1606975172665084/?_rdc=1&_rdr" className={styles.IWrp}>
                                <FaFacebookF className={styles.contaceIcons} />
                            </Link>
                            <div className={styles.IWrp}>
                                <AiOutlineTwitter className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <AiFillInstagram className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <AiFillLinkedin className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <IoLogoWhatsapp className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <GrMail className={styles.contaceIcons} />
                            </div>
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