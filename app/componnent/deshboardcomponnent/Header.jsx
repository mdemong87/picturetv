import gertusersession from "@/lib/helper/getusersesssion";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import styles from "../../../styles/clientconponnent/Header/Header.module.css";
import Container from "../../componnent/clientcomponnent/Container";
import NavberWrper from "./NavberWrper";


const Header = async () => {


    //get sission data
    const session = await gertusersession();


    if (session) {

        if (!session?.role) {
            redirect('/auth/login');
        }
    } else {
        redirect('/auth/login');
    }




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
                        <NavberWrper session={session} />
                    </div>
                </div>
            </Container>
        </header>

    )
}

export default Header