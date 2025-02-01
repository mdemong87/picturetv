import { auth } from '@/lib/auth';
import getUserByEmail from '@/lib/helper/getUserByEmail';
import data from "../../data/EventData";
import ConnectDB from "../../lib/connectionDB";
import AuthUserUpdater from '../componnent/AuthUserUpdater';
import HomePageCardWrper from "../componnent/clientcomponnent/HomepageCardWrper";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Search from "../componnent/clientcomponnent/Search/Search";



// Server - side function to fetch user data
async function getUserData() {
  let passUserData = null;

  try {
    // Initialize DB connection
    ConnectDB();

    const session = await auth();

    const sessionEmail = session?.user?.email;

    // Find the user by email
    const user = await getUserByEmail(sessionEmail);

    passUserData = {
      uid: user?.uid,
      email: user?.email,
      fullname: user?.fullname,
      role: user?.role,
      isvarified: user?.isvarified,
      createdAt: user?.createdAt,
    };
  } catch (error) {
    console.error("Error from layout page:", error);
  }


  return passUserData;
}



const Home = async () => {


  // Fetch user data server-side
  const passUserData = await getUserData();


  return (
    <main className="h-fit">
      {/* Pass session data to the component */}
      <AuthUserUpdater session={passUserData} />
      <div className="relative">
        <HomeSlider />
        <Search />
      </div>
      <div className="py-[60px]">
        <HomePageCardWrper data={data} fromPage="home" />
      </div>
    </main>
  )
}
export default Home;