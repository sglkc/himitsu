interface Post {
  _id: string | undefined;
  text: string;
  timestamp: string;
  replies: Reply[];
};
