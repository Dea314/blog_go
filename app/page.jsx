import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        GO! & share your ideas!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Let's make it happen!
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptates quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptates
        quas doloribus quidem. lorem Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequatur voluptates quas doloribus quidem.
        Quisquam voluptatibus,
      </p>
      <Feed />
    </section>
  );
};

export default Home;
