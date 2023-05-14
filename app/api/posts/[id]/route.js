import { connectToDB } from "@utils/database";
import Post from "@models/post";

// GET - read
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");
    if (!post)
      return new Response("Post not found", {
        status: 404,
      });

    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to fetch all posts", {
      status: 500,
    });
  }
};

//PATCH
export const PATCH = async (req, { params }) => {
  const { post, tag } = await req.json();
  try {
    await connectToDB();
    const existingPost = await Post.findById(params.id);
    if (!existingPost) return new Response("Post not found", { status: 404 });
    existingPost.post = post;
    existingPost.tag = tag;
    await existingPost.save();
    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (error) {
    return new Response("Faild to update post", {
      status: 500,
    });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);
    return new Response("Post deleted successfully", {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to delete post", {
      status: 500,
    });
  }
};
