import { slideInFromTop } from "@/lib/motion";
import { motion } from "framer-motion";
const WelcomeSection = () => {
  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="mx-auto mt-32"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
          <div className="text-center">
            <p className=" text-4xl font-extrabold s sm:text-6xl">
              Welcome to SwiftSky
            </p>

            <p className="my-5 text-2xl text-gray-500">
              {" "}
              – Where Forecasting Meets Finesse! 🌦️ Enter
              your location and embark on a seamless journey
              through the skies.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default WelcomeSection;
