import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useAnimateComponent from "@/hooks/useAnimateComponent";
const Testimonial = () => {
  const { ref, variants, control } = useAnimateComponent();
  const testimonials = [
    {
      id: 1,
      name: "Mohammad Ali",
      designation: "Medical Supply Coordinator",
      testimonial:
        "MedReliefHub.com has revolutionized how we coordinate medical supplies in disaster-stricken areas. It's an invaluable resource for our team.",
      image:
        "https://old.bidyanondo.org/uploads/projects/24/Bidyanondo-Mother-and-Child-Care-Hospital-small-1695711233.jpg",
    },
    {
      id: 2,
      name: "Sabrina Khan",
      designation: "Supply Chain Coordinator",
      testimonial:
        "MedReliefHub.com assists in accessing and administering medical equipment during emergencies. It's an essential tool for our operations.",
      image:
        "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
    },
    {
      id: 3,
      name: "Rahim Ahmed",
      designation: "Medical Equipment Manager",
      testimonial:
        "MedReliefHub.com easily manages the supply delivery in emergency times. Its user-friendly interface and real-time updates are game-changers.",
      image:
        "https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177233.jpg",
    },
    {
      id: 4,
      name: "Mahfuzur Rahman",
      designation: "Disaster Response Member",
      testimonial:
        "MedReliefHub.com is an indispensable resource for its ease in managing our supply delivery process.",
      image:
        "https://image1.masterfile.com/getImage/NjQ5LTA3MjM4ODk3ZW4uMDAwMDAwMDA=AK-o9l/649-07238897en_Masterfile.jpg",
    },
    {
      id: 5,
      name: "Tarikul Islam",
      designation: "Emergency Medical Practitioner",
      testimonial:
        "MedReliefHub.com has improved our readiness and coordination in disaster response. It's an essential tool for managing health supplies in emergencies.",
      image: "https://copyblogger.com/cdn-origin/images/testimonial.jpg",
    },
  ];
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={control}
      initial="hidden"
      className="container"
    >
      <div className="text-center max-w-xl mx-auto mb-12">
        <SectionTitle
          name="Testimonial"
          title="What our happy supplier say"
          subTitle="Discover What Our Community Says About Us."
        />
      </div>
      <Carousel
        opts={{
          loop: true,
          duration: 10,
          inViewThreshold: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="my-10">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 items-center gap-8 max-w-4xl">
                    <div className="mx-auto">
                      <img
                        src={testimonial.image}
                        className="w-[380px] md:h-[300px] h-[200px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]"
                      />
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 fill-blue-200 inline rotate-180"
                        viewBox="0 0 475.082 475.081"
                      >
                        <path
                          d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                          data-original="#000000"
                        />
                      </svg>
                      <p className="text-sm mt-6 leading-relaxed">
                        {testimonial.testimonial}
                      </p>
                      <div className="flex space-x-1 mt-6">
                        <svg
                          className="w-5 fill-[#facc15]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-5 fill-[#facc15]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-5 fill-[#facc15]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-5 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-5 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <p className="text-base font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 space-x-4"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default Testimonial;
