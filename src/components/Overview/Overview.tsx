/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks/hook";
import {
  CalendarDays,
  MapPin,
  Wind,
  Droplets,
  Gauge,
  ArrowUpRightFromCircle,
  Sunrise,
  Sunset,
} from "lucide-react";
import DataLoading from "./Loading";
import { TemperatureUnitEnums } from "@/enums/TemperatureUnit";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

const Overview = ({
  data,
  isDataLoading,
}: {
  data: any;
  isDataLoading: boolean;
}) => {
  const { temperatureUnit } = useAppSelector(
    (state) => state.weather
  );

  return (
    <div>
      {isDataLoading ? (
        <>
          <DataLoading />
        </>
      ) : (
        <>
          {" "}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-12 w-full  gap-5 "
          >
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="col-span-12 md:col-span-3"
            >
              <div className="border-2 bg-gray-50 dark:bg-gray-900 rounded-md p-7">
                <motion.img
                  variants={slideInFromTop}
                  src={data?.current?.condition?.icon}
                  alt="condition_IMAGE"
                  className="h-28 w-28 -mt-2"
                />

                <motion.h2
                  variants={slideInFromTop}
                  className="text-3xl font-semibold mt-3 mb-1"
                >
                  {temperatureUnit ===
                  TemperatureUnitEnums.Celsius ? (
                    <>{`${data?.current?.temp_c}° C `}</>
                  ) : (
                    <> {`${data?.current?.temp_f} ° F `} </>
                  )}
                </motion.h2>

                <motion.p
                  variants={slideInFromTop}
                  className="font-medium mb-3"
                >
                  {data?.current?.condition?.text}
                </motion.p>
                <hr className="border border-gray-950" />

                <motion.div
                  variants={slideInFromTop}
                  className="mt-2 space-y-3"
                >
                  <div className="flex items-center font-medium">
                    <MapPin size={20} />
                    <p className="ml-2">
                      {data?.location?.name},{" "}
                      {data?.location?.country}
                    </p>
                  </div>
                  <div className="flex items-center font-medium">
                    <CalendarDays size={20} />

                    <p className="ml-2 text-gray-700 dark:text-gray-400">
                      {data?.location?.localtime}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className=" col-span-12  md:col-span-9 "
            >
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <Wind size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Wind Speed
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {data?.current?.wind_mph}{" "}
                        <span>Km/h</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <Droplets size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Humidity
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {data?.current?.humidity}%
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <Gauge size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Pressure
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {data?.current?.pressure_mb} hPa
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <ArrowUpRightFromCircle size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Direction
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {data?.current?.wind_dir}
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <Sunrise size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Sunrise
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {
                          data?.forecast?.forecastday[0]
                            ?.astro.sunrise
                        }
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-4 p-10 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <motion.div
                    variants={slideInFromTop}
                    className="flex space-x-5 items-center justify-start"
                  >
                    <div>
                      <Sunset size={50} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
                        Sunset
                      </h3>

                      <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        {
                          data?.forecast?.forecastday[0]
                            ?.astro?.sunset
                        }
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Overview;
