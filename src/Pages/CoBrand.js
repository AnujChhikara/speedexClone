import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
function CoBrand() {
  return (
    <div>
      <Navbar />
      <div className="mt-36 mb-20 px-32 flex flex-col space-y-16">
        <div className="flex flex-col space-y-10">
          <h2 className="text-5xl">Your Brand, Our Steel bottles </h2>
          <p className=" font-semibold">
            Get your logo on Speedex steel water bottles.
          </p>
          <p>
            Whether you're gifting to employees, organizing an event, or
            branding your name with clients, Speedex stainless steel bottles
            make the ultimate gift to reveal your brand.
          </p>
          <p>
            We enjoy collaborating with companies that share our product and
            their brand name, logo, initials, etc. By co-branding with Speedex
            bottles, you can effectively and meaningfully market your brand.
          </p>
          <p>
            Your customers will be reminded of your company each time they see
            your brand name on water bottles, thanks to the co-brand bottle’s
            printed logo and branding. Our portable, steel water bottles are
            made with the highest food-grade of steel and are built to
            last-longer, making them excellent promotional items for your
            company.
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <h2 className="text-5xl">We offer : </h2>
          <p>
            1. Initials & Names Different personalization like initials or name
            engraving is available for an additional charge. The minimum order
            size is 30 pieces.
          </p>
          <p>
            2. Logo engraving - Corporate logos are laser engraved for a
            genuinely quality finish that won't fade or remove over time.
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <h3 className="text-5xl">Review or Testimonials </h3>
          <ul>
            <li>
              In general, Speedex has been a great experience for me. The
              company has been exceedingly helpful and professional throughout
              the entire process. I am extremely happy with how they turned out,
              the bottles quality, and the quick delivery.
            </li>
            <li>
              We were really impressed given how short our timeline was and it’s
              deeply appreciated. The Co-Brand engraving on the new single-wall
              water bottles looks fantastic. I appreciate your support and look
              forward to placing my next order.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CoBrand;
