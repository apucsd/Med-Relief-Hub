import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// type DonationType = "Monetary" | "In-kind" | "Volunteer Hours";

// interface Donor {
//   donor: string;
//   amount: number;
//   donationType: DonationType;
//   organization: string;
//   contact: string;
//   location: string;
//   date: string;
//   message: string;
// }

const LeaderBoard = () => {
  const leaderboardData = [
    {
      donor: "Ali Rahman",
      amount: 2000,
      donationType: "Monetary",
      organization: "Rahman Foundation",
      contact: "ali.rahman@example.com",
      location: "Dhaka",
      date: "2024-02-27",
      message: "Supporting the relief efforts!",
    },
    {
      donor: "Fatima Khan",
      amount: 1500,
      donationType: "In-kind",
      organization: "Khan Charitable Trust",
      contact: "fatima.khan@example.com",
      location: "Chittagong",
      date: "2024-02-26",
      message: "Wishing strength to those affected.",
    },
    {
      donor: "Mohammad Ahmed",
      amount: 1200,
      donationType: "Monetary",
      organization: "Ahmed Welfare Society",
      contact: "mohammad.ahmed@example.com",
      location: "Sylhet",
      date: "2024-02-25",
      message: "Praying for everyone's well-being.",
    },
    {
      donor: "Aisha Chowdhury",
      amount: 1000,
      donationType: "Volunteer Hours",
      organization: "Chowdhury Foundation",
      contact: "aisha.chowdhury@example.com",
      location: "Rajshahi",
      date: "2024-02-24",
      message: "Happy to lend a helping hand.",
    },
    {
      donor: "Mustafa Islam",
      amount: 800,
      donationType: "Monetary",
      organization: "Islam Relief Organization",
      contact: "mustafa.islam@example.com",
      location: "Khulna",
      date: "2024-02-23",
      message: "Let's stand together during tough times.",
    },
    // Add more entries as needed
  ];
  const rankedData = leaderboardData.sort((a, b) => b.amount - a.amount);
  return (
    <div className="container my-10">
      <h2 className="text-4xl mb-5 font-semibold uppercase text-center">
        🏆Top Donor Leaderboard🏆
      </h2>
      <br />

      <div>
        <Table className=" text-black">
          <TableCaption>Top donor list here.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Ranking</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Donation Type</TableHead>
              <TableHead>Organization</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankedData?.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{item.donor}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.donationType}</TableCell>
                <TableCell>{item.organization}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="text-red-500">
                Total Donar Numbers
              </TableCell>
              <TableCell className="text-right">
                {leaderboardData?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default LeaderBoard;
