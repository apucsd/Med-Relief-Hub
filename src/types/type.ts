export type TSupply = {
  _id?: string;
  amount: number;
  category: string;
  description: string;
  image: string;
  title: string;
};
export type TComment = {
  _id: string;
  email: string;
  commenterName: string;
  comments: string;
  timestamp: string;

  commenterImage?: string;
};
