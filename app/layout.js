// app/layout.tsx (or app/layout.js)

// import getUserByEmail from '@/lib/helper/getUserByEmail';
import { Inter } from 'next/font/google';
// import AuthUserUpdater from './componnent/AuthUserUpdater';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Picture TV',
  description: 'Generated by create next app',
};

// Server-side function to fetch user data
// async function getUserData() {
//   let passUserData = null;

//   try {
//     // Initialize DB connection
//     ConnectDB();

//     const session = await auth();
//     const sessionEmail = session?.user?.email;

//     // Find the user by email
//     const user = await getUserByEmail(sessionEmail);

//     passUserData = {
//       uid: user?.uid,
//       email: user?.email,
//       fullname: user?.fullname,
//       role: user?.role,
//       isvarified: user?.isvarified,
//       createdAt: user?.createdAt,
//     };
//   } catch (error) {
//     console.error("Error from layout page:", error);
//   }

//   return passUserData;
// }

export default async function RootLayout({ children }) {
  // Fetch user data server-side
  // const passUserData = await getUserData();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Pass session data to the component */}
        {/* <AuthUserUpdater session={""} /> */}
        {children}
      </body>
    </html>
  );
}