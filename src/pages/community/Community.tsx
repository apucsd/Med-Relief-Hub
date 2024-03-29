import Editor from "@/components/ui/Editor";
import { useAppSelector } from "@/redux/hook";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EventInfo } from "@ckeditor/ckeditor5-utils";
import { useState } from "react";
import {
  useCreateCommentsMutation,
  useGetCommentsQuery,
} from "../../redux/features/community/communityApi";
import { toast } from "sonner";
import Loading from "@/components/ui/Loading";
import { TComment } from "@/types/type";
import CommentCard from "@/components/ui/CommentCard";
import { useNavigate } from "react-router-dom";
const Community = () => {
  const navigate = useNavigate();
  const { data: commentsFromDB, isFetching } = useGetCommentsQuery(undefined);
  console.log(commentsFromDB);
  const [createComments] = useCreateCommentsMutation();
  const [comments, setComments] = useState("");
  const { user } = useAppSelector((state) => state.auth);

  if (isFetching) {
    return <Loading />;
  }
  const handleEditorChange = (
    _event: EventInfo<string, unknown>,
    editor: ClassicEditor
  ) => {
    const data = editor.getData();
    setComments(data);
  };
  console.log(commentsFromDB);
  const handlePostComments = () => {
    if (!user) {
      toast.error("Please login before posting comments", { duration: 1000 });
      return navigate("/login");
    }
    if (!comments) {
      return toast.error("Please write some comments first", {
        duration: 1000,
      });
    }

    const commentsData = {
      email: user?.email,
      comments,
    };

    createComments(commentsData);
  };
  return (
    <div className="container my-10">
      <div className=" h-60 bg-secondary dark:bg-black flex justify-center items-center">
        <div className="text-center space-y-2 text-white ">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Community Gratitude Wall
          </h1>
          <p>Have a look to the volunteer of our organization</p>
        </div>
      </div>
      <div>
        <div className="my-10 ">
          {commentsFromDB?.result?.map((item: TComment) => (
            <CommentCard key={item._id} {...item} />
          ))}
        </div>

        <div className="text-black">
          <Editor handleEditorChange={handleEditorChange} />
        </div>
        <button
          onClick={handlePostComments}
          type="submit"
          className="bg-blue-500 my-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Post comments
        </button>
      </div>
    </div>
  );
};

export default Community;
