import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Supplies = () => {
  const supplyPosts = [
    {
      id: 1,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "First Aid Kit",
      description:
        "A comprehensive first aid kit containing bandages, antiseptics, scissors, and other essential medical supplies.",
      category: "First Aid Kits",
      amount: 10,
      supplier: "ABC Medical Supplies",
      location: "Dhaka, Bangladesh",
      dateAdded: "2024-02-15",
    },
    {
      id: 2,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "N95 Respirator Masks",
      description:
        "High-quality N95 respirator masks designed to filter out airborne particles and protect against respiratory hazards.",
      category: "Personal Protective Equipment",
      amount: 130,
      supplier: "XYZ Safety Gear",
      location: "Chittagong, Bangladesh",
      dateAdded: "2024-02-16",
    },
    {
      id: 3,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Blood Pressure Monitor",
      description:
        "A digital blood pressure monitor for accurately measuring blood pressure levels at home or in medical facilities.",
      category: "Medical Equipment",
      amount: 140,
      supplier: "MedTech Solutions",
      location: "Sylhet, Bangladesh",
      dateAdded: "2024-02-17",
    },
    {
      id: 4,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Antibiotics",
      description:
        "A course of broad-spectrum antibiotics effective against bacterial infections, including amoxicillin and ciprofloxacin.",
      category: "Medications",
      amount: 210,
      supplier: "Global Pharmaceuticals",
      location: "Rajshahi, Bangladesh",
      dateAdded: "2024-02-18",
    },
    {
      id: 5,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Emergency Food Rations",
      description:
        "Nutritious food rations with a long shelf life, suitable for emergency situations and disaster relief efforts.",
      category: "Food Supplies",
      amount: 102,
      supplier: "Relief Food Co.",
      location: "Barisal, Bangladesh",
      dateAdded: "2024-02-19",
    },
    {
      id: 6,
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Sterile Gauze Pads",
      description:
        "Sterile gauze pads for wound dressing and first aid applications, individually packaged for hygiene.",
      category: "Medical Supplies",
      amount: 102,
      supplier: "MediWipe Ltd.",
      location: "Khulna, Bangladesh",
      dateAdded: "2024-02-20",
    },
  ];

  return (
    <div className="container my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {supplyPosts.map((item, index) => (
          <div
            key={index}
            className="bg-white grid grid-cols-3 items-center w-full rounded-xl  mx-auto p-2 shadow-2xl"
          >
            <div className="col-span-1">
              <img src={item.image} className="w-full h-40 rounded-md" />
            </div>
            <div className="col-span-2 px-4 py-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.description}</p>

              <div className="mt-2.5 mb-5 flex justify-between items-center">
                <div className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  {item.category}
                </div>
                <div className="mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold">
                  <p>
                    <span className="text-2xl font-bold text-slate-900">
                      ${item.amount}
                    </span>
                    <span className="text-sm text-slate-900">per pack</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <Link to={`/supplies/:${item.id}`}>
                  <Button
                    variant={"outline"}
                    className="flex group items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                  >
                    More Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 group-hover:-me-2 transition-all"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplies;
