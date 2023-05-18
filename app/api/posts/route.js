import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (req) => {
  try {
    await connectToDB();

    const posts = await Post.find({})
      .populate("creator")
      .sort({ createdAt: -1 })
      .limit(10);
    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to fetch all posts", {
      status: 500,
    });
  }
};
