'use client'

import { useStore } from '@/lib/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../../../styles/clientconponnent/booking/NextAndPrev.module.css";


export default function NextAndPrev() {


    const rander = useStore((state) => state.rander);
    const setrander = useStore((state) => state.setrander);






    function handliIClick(e) {
        e.preventDefault()


        setrander(rander + 1);

    }


    function handliDClick(e) {
        e.preventDefault()
        setrander(rander - 1);
    }

    async function handleSubmit(e) {
        e.preventDefault();


        console.log(e);

    }

    return (
        <div>
            <div className={styles.nextandPrevWrp}>
                <button className={styles.button} disabled={rander === 1} onClick={(e) => handliDClick(e)}>Prev</button>
                {rander !== 5 ? <button className={styles.button} disabled={rander === 5} onClick={(e) => handliIClick(e)}>Next</button> : <button className={styles.button} type="submit" disabled={true} onClick={(e) => handleSubmit(e)}>Submit</button>}
            </div>
            <ToastContainer position="top-center" />
        </div>
    )

}