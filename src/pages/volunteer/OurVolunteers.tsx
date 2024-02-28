import Loading from "@/components/ui/Loading";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import { TVolunteer } from "@/types/type";

const OurVolunteers = () => {
  const { data, isFetching } = useGetVolunteerQuery(undefined);
  if (isFetching) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div>
      <section className="">
        <div className="mx-auto">
          <div className=" h-60 bg-[#5E9BE5] dark:bg-black flex justify-center items-center">
            <div className="text-center space-y-2 text-white ">
              <h1 className="text-5xl font-semibold">Our Volunteers</h1>
              <p className="  text-gray-200">
                Have a look to the volunteer of our organization
              </p>
            </div>
          </div>
          <div className="grid my-10 grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {data?.result?.map((item: TVolunteer) => (
              <div
                key={item._id}
                className="block group md:col-span-2 lg:col-span-1 "
              >
                <div className="relative mb-6">
                  <img
                    src={item.image}
                    alt="Antonio image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  {item.firstName} {item.lastName}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  {item.city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVolunteers;
