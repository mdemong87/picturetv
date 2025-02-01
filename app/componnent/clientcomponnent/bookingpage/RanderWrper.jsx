'use client'

import { useStore } from "@/lib/store";
import Five from "./Five";
import Four from "./Four";
import One from "./One";
import Three from "./Three";
import Two from "./Two";


const RanderWrper = () => {


    const rander = useStore((state) => state.rander);

    return (
        <div>
            {rander === 1 && <One />}
            {rander === 2 && <Two />}
            {rander === 3 && <Four />}
            {rander === 4 && <Three />}
            {rander === 5 && <Five />}
        </div>
    )
}

export default RanderWrper;