import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div id="about" className="container relative overflow-hidden py-10 my-10">
      <img
        className="w-[1200px] h-[700px] -z-30 absolute -top-1/2 -right-[50%] "
        src="Oval.svg"
        alt=""
      />
      <section className="flex items-center  lg:h-screen ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <SectionTitle name="About Us" title=" What we do" />

          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                At MedReliefHub.com, we are dedicated to providing a better
                facility for managing health and medical supplies, especially in
                post-disaster scenarios.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-primary dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Swift and effective disaster relief.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-primary dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Our journey in humanitarian aid.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-primary dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Meet the passionate individuals.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-primary dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Collaborations worldwide.
                </li>
              </ul>
              <Button>See More</Button>
            </div>

            <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
              <img
                src="https://apadm.org/cms/wp-content/uploads/2023/12/bang202111_3.jpeg"
                alt=""
                className="relative z-40 object-cover w-full md:rounded-tl-[108px] md:h-96 h-44"
              />
              <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                <svg
                  width={290}
                  height={166}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="a"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={290}
                    height={166}
                  >
                    <path
                      fill="url(#paint0_linear_228_431)"
                      d="M0 0H290V165.838H0z"
                    />
                  </mask>
                  <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
                    <path
                      d="M-.146 77.865c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm16.185 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm72.314 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469zm-18.709 0c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm58.655-16.824c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 61.041c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 63.509c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM133.35 46.684c-1.395 0-2.525 1.106-2.525 2.469 0 1.363 1.13 2.469 2.525 2.469 1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.469c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468s-1.13 2.469-2.525 2.469c-1.394 0-2.524-1.106-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.525-1.106-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.524-1.106-2.524-2.469zM21.09 46.685c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 49.153c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.394 0-2.524-1.106-2.524-2.469zM133.35 32.328c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.363 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468s-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.363 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.363 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM21.09 32.328c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468s-1.13-2.469-2.524-2.469zM-.146 34.797c0-1.363 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 17.972c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM21.09 17.972c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zM-.146 20.441c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 3.619c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zM95.929 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469 0-1.363-1.13-2.468-2.525-2.468zM74.695 6.087c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zM58.511 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM37.275 6.087c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 3.62c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 6.087c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469z"
                      fill="url(#paint1_linear_228_431)"
                    />
                    <path
                      d="M-.146 163.37c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm16.185 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm21.236-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm72.314 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469zm-18.709 0c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm58.655-16.824c-1.395 0-2.525 1.105-2.525 2.468s1.13 2.469 2.525 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468s-1.13 2.469-2.525 2.469c-1.394 0-2.524-1.106-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468s1.13 2.469 2.524 2.469c1.394 0 2.524-1.106 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.185-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm133.496-16.825c-1.395 0-2.525 1.105-2.525 2.469 0 1.363 1.13 2.468 2.525 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.524-2.469 1.395 0 2.525 1.105 2.525 2.469 0 1.363-1.13 2.468-2.525 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.187-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468 0-1.364-1.13-2.469-2.525-2.469zm-21.234 2.469c0-1.364 1.13-2.469 2.525-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.525-1.105-2.525-2.468zm-16.184-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zm-16.185-2.469c-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.524-1.105 2.524-2.468 0-1.364-1.13-2.469-2.524-2.469zm-21.236 2.469c0-1.364 1.13-2.469 2.524-2.469 1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468zM133.35 89.124c-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.524-2.468 1.395 0 2.525 1.105 2.525 2.468 0 1.364-1.13 2.469-2.525 2.469-1.394 0-2.524-1.105-2.524-2.469zm-16.187-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469 0-1.363-1.13-2.468-2.525-2.468zm-21.234 2.468c0-1.363 1.13-2.468 2.525-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.525-1.105-2.525-2.469zm-16.184-2.468c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zm-21.236 2.468c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469zM21.09 89.124c-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.524-1.105 2.524-2.469 0-1.363-1.13-2.468-2.524-2.468zM-.146 91.592c0-1.363 1.13-2.468 2.524-2.468 1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469z"
                      fill="url(#paint2_linear_228_431)"
                    />
                    <path
                      d="M284.472 77.866c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.469 2.524 2.469 1.394 0 2.525-1.106 2.525-2.47zm-21.237-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.469-2.524 2.469-1.394 0-2.524-1.106-2.524-2.47 0-1.362 1.13-2.468 2.524-2.468zm-16.184 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.469 2.524 2.469 1.394 0 2.525-1.106 2.525-2.47zm-21.237-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.469-2.525 2.469s-2.524-1.106-2.524-2.47c0-1.362 1.13-2.468 2.524-2.468zM153.5 77.866c0-1.363-1.13-2.469-2.524-2.469-1.395 0-2.525 1.106-2.525 2.469 0 1.363 1.13 2.469 2.525 2.469 1.394 0 2.524-1.106 2.524-2.47zm18.709 0c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.469 2.525 2.469s2.524-1.106 2.524-2.47zm16.187-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.469-2.525 2.469s-2.524-1.106-2.524-2.47c0-1.362 1.13-2.468 2.524-2.468zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.469 2.524 2.469 1.395 0 2.525-1.106 2.525-2.47zM150.976 61.04c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468s1.13-2.469 2.525-2.469zm21.233 2.469c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zM150.976 46.685c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.47-2.524 2.47-1.395 0-2.525-1.106-2.525-2.47 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.47 2.525 2.47s2.524-1.106 2.524-2.47zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.47-2.525 2.47s-2.524-1.106-2.524-2.47c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.47 2.524 2.47 1.395 0 2.525-1.106 2.525-2.47zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.47-2.525 2.47s-2.524-1.106-2.524-2.47c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.47 2.524 2.47 1.394 0 2.525-1.106 2.525-2.47zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.47-2.524 2.47-1.394 0-2.524-1.106-2.524-2.47 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.47 2.524 2.47 1.394 0 2.525-1.106 2.525-2.47zM150.976 32.33c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zM150.976 17.973c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zM150.976 3.62c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468s1.13-2.469 2.525-2.469zm21.233 2.469c0-1.363-1.13-2.469-2.524-2.469-1.394 0-2.525 1.106-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.234 2.469c0-1.363-1.13-2.469-2.525-2.469-1.394 0-2.524 1.106-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.106 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.106 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468s1.13-2.469 2.524-2.469zm21.237 2.469c0-1.363-1.131-2.469-2.525-2.469s-2.524 1.106-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468z"
                      fill="url(#paint3_linear_228_431)"
                    />
                    <path
                      d="M284.472 163.37c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-21.237-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm-16.184 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-21.237-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zM153.5 163.37c0-1.363-1.13-2.468-2.524-2.468-1.395 0-2.525 1.105-2.525 2.468 0 1.364 1.13 2.469 2.525 2.469 1.394 0 2.524-1.105 2.524-2.469zm18.709 0c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm-58.654-16.824c1.394 0 2.524 1.105 2.524 2.468s-1.13 2.469-2.524 2.469c-1.395 0-2.525-1.106-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468s1.131 2.469 2.525 2.469 2.524-1.106 2.524-2.469zm16.187-2.468c1.394 0 2.525 1.105 2.525 2.468s-1.131 2.469-2.525 2.469-2.524-1.106-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm-133.496-16.825c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.395 0-2.525-1.105-2.525-2.468 0-1.364 1.13-2.469 2.525-2.469zm21.233 2.469c0-1.364-1.13-2.469-2.524-2.469-1.394 0-2.525 1.105-2.525 2.469 0 1.363 1.131 2.468 2.525 2.468s2.524-1.105 2.524-2.468zm16.187-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.234 2.469c0-1.364-1.13-2.469-2.525-2.469-1.394 0-2.524 1.105-2.524 2.469 0 1.363 1.13 2.468 2.524 2.468 1.395 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.525 1.105 2.525 2.469 0 1.363-1.131 2.468-2.525 2.468s-2.524-1.105-2.524-2.468c0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zm16.184-2.469c1.394 0 2.524 1.105 2.524 2.469 0 1.363-1.13 2.468-2.524 2.468-1.394 0-2.524-1.105-2.524-2.468 0-1.364 1.13-2.469 2.524-2.469zm21.237 2.469c0-1.364-1.131-2.469-2.525-2.469s-2.524 1.105-2.524 2.469c0 1.363 1.13 2.468 2.524 2.468 1.394 0 2.525-1.105 2.525-2.468zM150.976 89.124c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.395 0-2.525-1.105-2.525-2.469 0-1.363 1.13-2.468 2.525-2.468zm21.233 2.468c0-1.363-1.13-2.468-2.524-2.468-1.394 0-2.525 1.105-2.525 2.468 0 1.364 1.131 2.469 2.525 2.469s2.524-1.105 2.524-2.469zm16.187-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.234 2.468c0-1.363-1.13-2.468-2.525-2.468-1.394 0-2.524 1.105-2.524 2.468 0 1.364 1.13 2.469 2.524 2.469 1.395 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.525 1.105 2.525 2.468 0 1.364-1.131 2.469-2.525 2.469s-2.524-1.105-2.524-2.469c0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469zm16.184-2.468c1.394 0 2.524 1.105 2.524 2.468 0 1.364-1.13 2.469-2.524 2.469-1.394 0-2.524-1.105-2.524-2.469 0-1.363 1.13-2.468 2.524-2.468zm21.237 2.468c0-1.363-1.131-2.468-2.525-2.468s-2.524 1.105-2.524 2.468c0 1.364 1.13 2.469 2.524 2.469 1.394 0 2.525-1.105 2.525-2.469z"
                      fill="url(#paint4_linear_228_431)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_228_431"
                      x1="152.25"
                      y1="161.063"
                      x2="154.33"
                      y2="4.773"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_228_431"
                      x1="133.019"
                      y1="80.334"
                      x2="3.944"
                      y2="3.188"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#246151" />
                      <stop offset=".422" stopColor="#A7C6BC" />
                      <stop offset=".865" stopColor="#73CADC" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_228_431"
                      x1="133.019"
                      y1="165.839"
                      x2="3.944"
                      y2="88.693"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#246151" />
                      <stop offset=".422" stopColor="#A7C6BC" />
                      <stop offset=".865" stopColor="#73CADC" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_228_431"
                      x1="151.307"
                      y1="80.335"
                      x2="280.382"
                      y2="3.188"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#246151" />
                      <stop offset=".422" stopColor="#A7C6BC" />
                      <stop offset=".865" stopColor="#73CADC" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_228_431"
                      x1="151.307"
                      y1="165.839"
                      x2="280.382"
                      y2="88.693"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#246151" />
                      <stop offset=".422" stopColor="#A7C6BC" />
                      <stop offset=".865" stopColor="#73CADC" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
