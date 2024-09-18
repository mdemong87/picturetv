import HomePageCardWrper from "../componnent/clientcomponnent/HomepageCardWrper";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Search from "../componnent/clientcomponnent/Search/Search";


// const getEvent = async () => {
//   //fetch data event data from the api/dashboard
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin`);
//   const response = await res.json();
//   return response;
// }


import data from "../../data/EventData";

const Home = async () => {


  // const data = await getEvent();



  return (
    <main className="h-fit">
      <div className="relative">
        <HomeSlider />
        <Search />
      </div>
      <div className="py-[60px]">
        <HomePageCardWrper data={data} />
      </div>
    </main>
  )
}
export default Home;