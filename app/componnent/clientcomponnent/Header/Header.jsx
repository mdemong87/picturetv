import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/logo.png";
import styles from "../../../../styles/clientconponnent/Header/Header.module.css";
import Container from "../Container";
import NavberWrper from "./NavberWrper";


const Header = async () => {


    return (
        <header className="w-screen bg-[#000] text-white fixed z-50">
            <Container>
                <div className={styles.headerWrper}>
                    <div className={styles.left}>
                        <Link href={'/'} className="">
                            <Image className='w-[200px]' width={1000} height={1000} src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <NavberWrper />
                    </div>
                </div>
            </Container>
        </header>

    )
}

export default Header;