"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { format } from "date-fns";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copied) {
      setCopied(true);
      navigator.clipboard.writeText(post.post);
      toast("Copied to clipboard", {
        type: "success",
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between itmes-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-sathoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="text-gray-500 text-sm font-inter">{post.createdAt}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt="copy"
            width={15}
            height={15}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.post}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      <span>
        {/*  <time>{format(new Date(createdAt), "d. MMM. yyyy  HH:mm")}</time> */}
      </span>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
