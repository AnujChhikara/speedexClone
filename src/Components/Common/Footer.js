function Footer() {
  return (
    <div className="flex flex-col  mt-28  bottom-0">
      <div className="lg:flex lg:flex-row lg:space-y-0 sm:space-y-8 sm:flex sm:flex-col lg:px-0 sm:px-4 md:items-center lg:space-x-16 bg-[#DBDFEA] lg:justify-around  py-6">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src="https://speedexind.com/wp-content/uploads/2022/11/Speedex-150x103.png"
            alt=""
            className="md:block sm:hidden"
          />
          <div className="flex space-x-1.5">
            <a href="https://www.instagram.com/speedex_bottles/">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/speedexbottles">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png"
                alt=""
              />
            </a>
            <a href="https://in.pinterest.com/speedexindia/">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/4494/4494494.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/company/speedex-bottles/?originalSubdomain=in">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt=""
              />
            </a>
            <a href="https://www.youtube.com/channel/UC0szp-yMuvsh_UftSdCVXyw">
              <img
                className="h-12 shadow-md  shadow-white  bg-white p-2 rounded-full hover:-translate-y-0.5 hover:scale-105 hover:opacity-80 duration-1000"
                src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="md:flex md:flex-row sm:flex sm:flex-col sm:space-y-3 md:space-y-0 sm:justify-start ml-6 md:space-x-6">
          <div className="flex flex-col space-y-3 ">
            <a className="hover:underline" href="/career">
              Career
            </a>
            <a className="hover:underline" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="hover:underline" href="/refund-cancellation-policy">
              Refund & Cancellation Policy
            </a>
          </div>
          <div className="flex flex-col space-y-3 ">
            <a className="hover:underline" href="/">
              Bulk Order
            </a>
            <a className="hover:underline" href="/">
              Contact us
            </a>
            <a className="hover:underline" href="/about">
              Company Profile
            </a>
          </div>
        </div>

        <img
          className="h-10"
          src="https://speedexind.com/wp-content/uploads/2022/11/razorpay-payment.png"
          alt=""
        />
      </div>
      <div className="bg-black text-white flex justify-center items-center text-lg py-5">
        <h4>&#169;2023. Speedex. All Rights Reserved.</h4>
      </div>
      <div className="h-5 "></div>
    </div>
  );
}
export default Footer;
