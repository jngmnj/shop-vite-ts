
const SkeletonProductItem = () => {
  return (
    <li>
      <div className="relative h-full rounded-2xl bg-[#F6F6F6] px-4 py-6 transition hover:bg-[#EDEDED]">
        <div className="mx-auto mb-2 h-26 w-26 animate-pulse overflow-hidden rounded-xl bg-gradient-to-b from-gray-200 to-gray-300 md:h-40 md:w-40 lg:mb-4" />

        <div className="flex flex-col items-center">
          <div className="mb-4 h-4 w-3/4 animate-pulse rounded-sm bg-gradient-to-b from-gray-200 to-gray-300" />
          <div className="mb-4 h-8 w-2/5 animate-pulse rounded-sm bg-gradient-to-b from-gray-200 to-gray-300 text-2xl font-bold lg:mb-6" />
          <div className="block h-12 w-9/10 animate-pulse rounded-lg bg-gradient-to-b from-gray-200 to-gray-300 text-2xl font-bold" />
        </div>
      </div>
    </li>
  );
};

export default SkeletonProductItem;
