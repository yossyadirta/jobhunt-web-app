export default function SkeletonJobList() {
  return (
    <div className="p-4 border rounded-sm bg-white animate-pulse">
      <div className="flex flex-row items-center">
        <div className="pr-4">
          <div className="flex items-center justify-center w-[160px] h-[90px] bg-gray-300 rounded">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full w-64 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div className="flex flex-wrap items-center mb-4 ">
            <div className="flex items-center mb-2 mr-4 text-sm text-gray-600 md:mb-0 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 mr-1 bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
            </div>
            <div className="flex items-center mb-2 mr-4 text-sm text-gray-600 md:mb-0 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 mr-1 bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full w-full mt-3"></div>
      <div className="h-2.5 bg-gray-200 rounded-full w-[560px] mt-2"></div>
      {/* <p className="py-1 text-sm text-gray-500 line-clamp-2">
        {job.description}
      </p> */}
    </div>
  );
}
