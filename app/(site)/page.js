import HomePageCardWrper from "../componnent/clientcomponnent/HomepageCardWrper";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Search from "../componnent/clientcomponnent/Search/Search";


const getEvent = async (session) => {
  //fetch data event data from the api/dashboard
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin`);
  const data = await res.json();
  return data;
}


const Home = async () => {


  const data = await getEvent();


  return (
    <main className="h-fit">
      <div className="relative">
        <HomeSlider />
        <Search />
      </div>


      <div className="py-[60px]">
        <h1 className="text-center text-4xl text-red-500">This website is Under Developing. We Will Fixed All Issues Very soon.</h1>
        <HomePageCardWrper data={data} />
      </div>
    </main>
  )
}
export default Home;