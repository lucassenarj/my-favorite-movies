import AuthorDetails from "./AuthorDetails";

type Review = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  url: string;
}

export default Review;
