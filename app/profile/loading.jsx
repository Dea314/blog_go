import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="assets/icons/loader.svg"
        alt="Loading"
        height={70}
        width={70}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
