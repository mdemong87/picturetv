'use client'

import { useStore } from "@/lib/store";
import { useEffect } from "react";


function AuthUserUpdater({ session }) {
    const authUser = useStore((state) => state.authUser);
    const setauthUser = useStore((state) => state.setauthUser);



    useEffect(() => {
        setauthUser(session);

    }, [session]);


    return;

}

export default AuthUserUpdater;