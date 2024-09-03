import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import getUserByEmail from "./helper/getUserByEmail";

export const {
    auth,
    signIn,
    signOut

} = NextAuth({

    //auth-js session for credential provider
    session: {
        strategy: 'jwt',
    },
    //credential providers here
    providers: [
        Credentials({
            async authorize(credential) {
                if (credential === null) return null;

                try {

                    const user = await getUserByEmail(credential?.email);

                    if (user) {
                        const isMatch = user?.password === credential?.password && user?.role === credential?.role;

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("There was a problem in your Password or Role");
                        }

                    } else {
                        throw new Error("User Not Found");
                    }

                } catch (err) {
                    throw new Error("There is a server side Error");

                }

            }
        })

    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRECT

})
