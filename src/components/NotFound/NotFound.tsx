const NotFound = () => {
  return (
    <div>
      <div>
        <div>
          <section className="mx-auto mt-32">
            <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
              <div className="text-center">
                <p className=" text-4xl font-bold s sm:text-6xl">
                  City not found
                </p>

                <p className="my-5 text-2xl text-gray-500">
                  {" "}
                  Please enter a valid city name
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
