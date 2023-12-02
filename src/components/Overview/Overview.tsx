/* eslint-disable @typescript-eslint/no-explicit-any */

// import { welcomeMessage } from "@/constant";
import { useAppSelector } from "@/redux/hooks/hook";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader from "../ui/Loader";
import WelcomeSection from "../welcomeSection/WelcomeSection";
import NotFound from "../NotFound/NotFound";

const Overview = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  if (!isDataLoading && isCityNotFound) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          {data === null ? (
            <>
              <WelcomeSection />
            </>
          ) : (
            <div className="w-[90%] mx-auto">
              <Table>
                <TableCaption>
                  Weather Of {data?.name}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      feels Like
                    </TableHead>
                    <TableHead>Humidity</TableHead>
                    <TableHead>Pressure</TableHead>
                    <TableHead>Temp</TableHead>
                    <TableHead>Temp Max</TableHead>
                    <TableHead className="text-right">
                      Temp Min
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      {data?.main?.feels_like}
                    </TableCell>
                    <TableCell>
                      {data?.main?.humidity}
                    </TableCell>
                    <TableCell>
                      {" "}
                      {data?.main?.pressure}
                    </TableCell>
                    <TableCell className="text-right">
                      {data?.main?.temp}
                    </TableCell>
                    <TableCell className="text-right">
                      {data?.main?.temp_max}
                    </TableCell>
                    <TableCell className="text-right">
                      {data?.main?.temp_min}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Overview;
