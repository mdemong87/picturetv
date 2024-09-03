'use server'

import { signIn, signOut } from "@/auth";


//sign in action here
export async function doSignIn(formData) {

    try {

        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        return response;

    } catch (err) {
        throw new Error(err);
    }

}


//sign out action here
export async function doSingnOut() {

    await signOut({
        redirectTo: "/auth/login"
    });

}