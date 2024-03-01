/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "@/redux/hook";

import UpdateProfileModal from "@/components/ui/UpdateProfileModal";
import { Button } from "@/components/ui/button";
import getImageURL from "@/lib/getImageURL";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import { Camera } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const [updateUser] = useUpdateUserMutation();
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetUserQuery(user?.email);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const userData = data?.data;

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageURL = await getImageURL(file as File);
    // console.log(imageURL);
    // console.log(user);
    const updatedUser = {
      email: user?.email,
      data: {
        image: imageURL,
      },
    };

    const res: any = await updateUser(updatedUser);
    if (res?.data?.success) {
      toast.success("Profile updated successfully");
    }
  };
  return (
    <main className="container  my-20">
      <div>
        <div className="md:grid hidden b w-full  h-60 bg-[#5E9BE5] md:grid-cols-5 mt-20 gap-5 justify-center overflow-hidden place-items-center"></div>
        <section className="relative py-16">
          <div className=" mx-auto ">
            <div className="relative  flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg md:-mt-20 ">
              <div className="md:px-6 ">
                <div className="flex  flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <a
                        target="_blank"
                        href={
                          userData?.image
                            ? userData?.image
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                      >
                        <img
                          alt="..."
                          src={
                            userData?.image
                              ? userData?.image
                              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }
                          className="shadow-xl md:size-52 border-2 size-32 rounded-full  -mt-20 z-[999]"
                        />
                      </a>
                      <div
                        title="Update your profile image"
                        className="absolute bottom-0 right-4"
                      >
                        <label htmlFor="fileInput" className="file-input-label">
                          <Camera className="text-secondary size-5 hover:cursor-pointer" />
                        </label>

                        <input
                          onChange={handleImage}
                          type="file"
                          id="fileInput"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full order-1 lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button
                        onClick={showModal}
                        variant={"secondary"}
                        className="h-8"
                      >
                        Update
                      </Button>
                      <UpdateProfileModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1 order-2">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          22
                        </span>
                        <span className="text-sm ">Post</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          10
                        </span>
                        <span className="text-sm ">Donates</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          89
                        </span>
                        <span className="text-sm ">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal  mb-2">
                    {userData?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2  font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg " />
                    {userData?.address
                      ? userData?.address
                      : "Please Update address"}
                  </div>
                  <div className="mb-2  mt-10">
                    Occupation :{" "}
                    {userData?.occupation
                      ? userData?.occupation
                      : "Please Update occupation"}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed ">
                        {userData?.biography
                          ? userData?.biography
                          : "Please Update biography"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
