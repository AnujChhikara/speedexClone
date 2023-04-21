function PageNotFound() {
  return (
    <div>
      {" "}
      <div class=" flex items-center justify-center">
        <div class="container flex flex-col md:flex-row items-center justify-center text-gray-700">
          <div class="">
            <div class="text-5xl font-dark font-bold">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p class="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a href="/">
              <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-red-500 hover:bg-red-400">
                back to homepage
              </button>
            </a>
          </div>
          <div class="max-w-lg">
            <img
              src="https://github.com/AnujChhikara/reactRouter/blob/main/public/Images/cat.png?raw=true"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageNotFound;
