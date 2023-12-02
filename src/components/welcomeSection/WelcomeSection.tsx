const WelcomeSection = () => {
  return (
    <div>
      <section className="mx-auto mt-32">
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
          <div className="text-center">
            <p className=" text-4xl font-extrabold s sm:text-6xl">
              Welcome to SwiftSky
            </p>

            <p className="my-5 text-2xl">
              {" "}
              – Where Forecasting Meets Finesse! 🌦️ Enter
              your location and embark on a seamless journey
              through the skies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
