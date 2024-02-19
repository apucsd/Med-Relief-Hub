import { useAppSelector } from "@/redux/hook";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400  shadow-lg rounded-lg">
      <div className="w-full flex justify-center  sm:w-auto">
        <img
          className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
          src="https://randomuser.me/api/portraits/women/50.jpg"
        />
      </div>
      <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
        <p
          className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
          itemProp="author"
        >
          {user?.email}
        </p>
        <div className="mb-4 md:text-lg text-gray-400">
          <p>
            Together, we make a difference in times of crisis. Explore, donate,
            and support our mission to provide critical healthcare supplies
            where they're needed most.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#">Get my email here</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
