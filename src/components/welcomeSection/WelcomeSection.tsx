const WelcomeSection = () => {
  return (
    <div>
      <section className="mx-auto py-16">
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
          <div className="text-center">
            <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
              Welcome to SwiftSky – Where Forecasting Meets
              Finesse!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
