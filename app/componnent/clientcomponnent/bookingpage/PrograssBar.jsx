'use client'

import { TiTick } from "react-icons/ti";
import styles from "../../../../styles/clientconponnent/booking/Prograssber.module.css";


export default function Prograssber({ rander, setrander }) {

    function handleClik(stage) {
        setrander(stage);
    }

    return (

        <div className={styles.prograssberWrp}>
            <div onClick={() => handleClik(1)} className={rander > 1 || rander === 1 ? styles.active : styles.alldiv}>
                {rander > 1 ? <TiTick className={styles.icons} /> : 1}
            </div>
            <div onClick={() => handleClik(2)} className={rander > 2 || rander === 2 ? styles.active : styles.alldiv}>
                {rander > 2 ? <TiTick className={styles.icons} /> : 2}
            </div>
            <div onClick={() => handleClik(3)} className={rander > 3 || rander === 3 ? styles.active : styles.alldiv}>
                {rander > 3 ? <TiTick className={styles.icons} /> : 3}
            </div>
            <div onClick={() => handleClik(4)} className={rander > 4 || rander === 4 ? styles.active : styles.alldiv}>
                {rander > 4 ? <TiTick className={styles.icons} /> : 4}
            </div>
        </div>

    )
}