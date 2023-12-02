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

const Overview = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  if (!isDataLoading && isCityNotFound) {
    return (
      <>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl text-red-500 font-bold">
            City Not Found
          </h1>
        </div>
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
