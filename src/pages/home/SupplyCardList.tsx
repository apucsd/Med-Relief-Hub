import SupplyCard from "@/components/ui/SupplyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupplyCardList = () => {
  const supplyPosts = [
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "First Aid Kit",
      description:
        "A comprehensive first aid kit containing bandages, antiseptics, scissors, and other essential medical supplies.",
      category: "First Aid Kits",
      amount: 10,
    },
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "N95 Respirator Masks",
      description:
        "High-quality N95 respirator masks designed to filter out airborne particles and protect against respiratory hazards.",
      category: "Personal Protective Equipment",
      amount: 130,
    },
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Blood Pressure Monitor",
      description:
        "A digital blood pressure monitor for accurately measuring blood pressure levels at home or in medical facilities.",
      category: "Medical Equipment",
      amount: 140,
    },
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Antibiotics",
      description:
        "A course of broad-spectrum antibiotics effective against bacterial infections, including amoxicillin and ciprofloxacin.",
      category: "Medications",
      amount: 210,
    },
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Emergency Food Rations",
      description:
        "Nutritious food rations with a long shelf life, suitable for emergency situations and disaster relief efforts.",
      category: "Food Supplies",
      amount: 102,
    },
    {
      image:
        "https://images-cdn.ubuy.com.sa/634f53e72533222659096ca6-first-aid-kit-hse-50-person-in-essential.jpg",
      title: "Sterile Gauze Pads",
      description:
        "Sterile gauze pads for wound dressing and first aid applications, individually packaged for hygiene.",
      category: "Medical Supplies",
      amount: 102,
    },
  ];

  return (
    <div className="container my-20">
      <div className="max-w-2xl mx-auto text-center my-10">
        <h2 className="text-3xl font-extrabold">Featured Supplies</h2>
        <p className="text-sm mt-4 leading-relaxed text-gray-500">
          Explore essential health and medical resources for post-disaster
          relief efforts
        </p>
      </div>
      <div className="flex items-end justify-end">
        <div>
          <Link to="/supplies">
            <Button variant="link" className="gap-2 text-xl mr-4">
              See All{" "}
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
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {supplyPosts.map((supplyPost, i) => (
          <SupplyCard {...supplyPost} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SupplyCardList;
