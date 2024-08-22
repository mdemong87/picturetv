import Link from "next/link";
import styles from "../../../../styles/clientconponnent/Header/Header.module.css";
import Container from "../Container";
import NavberWrper from "./NavberWrper";


const Header = () => {
    return (
        <header className="w-screen bg-[#000] text-white fixed z-50">
            <Container>
                <div className={styles.headerWrper}>
                    <div className={styles.left}>
                        <Link href={'/'} className="">
                            <img className='w-[200px]' width={1000} height={1000} src="https://picture-tv.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture-logo.b3007a72.png&w=256&q=75" alt="Logo" />
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

export default Header