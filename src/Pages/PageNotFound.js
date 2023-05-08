function PageNotFound() {
  return (
    <div>
      {" "}
      <div className=" flex   items-center sm:pt-28  justify-center">
        <div className="container flex sm:flex-col-reverse md:flex-row items-center justify-center text-gray-700">
          <div className="">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a href="/">
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-red-500 hover:bg-red-400">
                back to homepage
              </button>
            </a>
          </div>
          <div className="md:w-[500px]">
            <img
              src="https://res.cloudinary.com/dmurcewte/image/upload/v1683557732/cat_q3gldc.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageNotFound;
