import data from "../../data/EventData";
import AuthUserUpdater from "../componnent/AuthUserUpdater";
import HomePageCardWrper from "../componnent/clientcomponnent/HomepageCardWrper";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Search from "../componnent/clientcomponnent/Search/Search";




const Home = async () => {


  return (
    <main className="h-fit">
      <AuthUserUpdater />
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