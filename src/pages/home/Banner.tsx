import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="container">
      <div>
        <img
          className="w-[1200px] h-[700px] -z-30 absolute -top-1/2 -left-1/2"
          src="Oval.svg"
          alt=""
        />
      </div>
      <section className="my-5">
        <div className="max-w-screen-xl mx-auto  gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-primary font-medium">
              Empowering Communities, Saving Lives:
            </h1>
            <h2 className="text-3xl  font-extrabold md:text-5xl">
              Join Us in Ensuring Vital Health Supplies.
            </h2>
            <p>
              Together, we make a difference in times of crisis. Explore,
              donate, and support our mission to provide critical healthcare
              supplies where they're needed most
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Button>Let's get started</Button>

              <Button
                variant={"outline"}
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Give Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_1200,q_auto/faja_covers/kbfus/dbxcbtnmcsyium9lt6xo"
              className=" md:rounded-tl-[108px] md:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
