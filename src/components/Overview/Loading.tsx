import { Skeleton } from "../ui/skeleton";

const DataLoading = () => {
  return (
    <div>
      <div className="grid grid-cols-12 w-full  gap-5 ">
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="border-2 bg-gray-200 rounded-md p-7 h-full">
            <Skeleton className="h-28 w-28 -mt-2 bg-gray-300" />

            <Skeleton className="text-3xl font-semibold bg-gray-300 h-5 w-16  mt-3 mb-1" />

            <Skeleton className="text-3xl font-semibold bg-gray-300 h-3 w-20  mt-3 mb-1" />

            <Skeleton className="text-3xl font-semibold bg-gray-300 h-1 w-full  mt-3 mb-1" />

            <div className="mt-2 space-y-3">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-6 w-full  mt-3 mb-1" />
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-6 w-full  mt-3 mb-1" />
            </div>
          </Skeleton>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 gap-8">
            <Skeleton className="col-span-12 md:col-span-4   p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
            <Skeleton className="col-span-12 md:col-span-4 p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
            <Skeleton className="col-span-12 md:col-span-4 p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
            <Skeleton className="col-span-12 md:col-span-4 p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
            <Skeleton className="col-span-12 md:col-span-4 p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
            <Skeleton className="col-span-12 md:col-span-4 p-10 bg-gray-200 rounded-md">
              <Skeleton className="text-3xl font-semibold bg-gray-300 h-20 w-40 " />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLoading;
