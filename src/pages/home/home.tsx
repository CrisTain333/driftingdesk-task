import Navbar from "@/components/Navbar/Navbar";
import NotFound from "@/components/NotFound/NotFound";
import Overview from "@/components/Overview/Overview";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";
import { useAppSelector } from "@/redux/hooks/hook";

const Home = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  return (
    <div>
      <Navbar />
      {data === null &&
      !isCityNotFound &&
      !isDataLoading ? (
        <>
          <WelcomeSection />
        </>
      ) : !isDataLoading && isCityNotFound ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          <main className="w-[90%] mx-auto">
            <h1 className="text-3xl font-medium my-8 text-center">
              Today Overview
            </h1>
            <Overview
              data={data}
              isDataLoading={isDataLoading}
            />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
