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
                if (!credential) return null;


                try {

                    const user = await getUserByEmail(credential?.email);


                    if (user) {
                        const isMatch = user?.password === credential?.password;

                        if (isMatch) {
                            if (user?.isvarified) {
                                return user;
                            } else {
                                throw new Error("You Should Verify your Account Fast");
                            }
                        } else {
                            throw new Error("There was a problem in your Password or Role");
                        }

                    } else {
                        throw new Error("User Not Found");
                    }

                } catch (err) {
                    throw new Error(err);

                }

            }
        })

    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRECT,


    // callbacks: {


    //     async jwt({ token, user }) {


    //         // Save user details to the token
    //         if (user) {
    //             token.id = user.uid;
    //             token.email = user.email;
    //             token.role = user.role;
    //             token.name = user.fullname;
    //         }

    //         return token;
    //     },

    //     async session({ session, token }) {
    //         // Attach additional user details to the session object
    //         if (token) {
    //             session.user = {
    //                 id: token.uid,
    //                 email: token.email,
    //                 role: token.role,
    //                 name: token.fullname
    //             };
    //         }

    //         return session;
    //     }


    // }



})
