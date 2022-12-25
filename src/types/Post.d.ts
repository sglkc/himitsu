interface Post {
  _id: string;
  text: string;
  timestamp: string;
  private: boolean;
  replies: Reply[];
};
