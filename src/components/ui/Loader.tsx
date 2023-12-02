import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[40vh]">
      <Rings
        height="200"
        width="200"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
