import HomePageCardWrper from "../componnent/clientcomponnent/HomepageCardWrper";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Search from "../componnent/clientcomponnent/Search/Search";

export default function Home() {
  return (
    <main className="h-fit">

      <div className="relative">
        <HomeSlider />
        <Search />
      </div>
      <div className="py-[60px]">
        <HomePageCardWrper />
      </div>
    </main>
  )
}
