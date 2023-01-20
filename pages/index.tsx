import BaseLayout from "@components/commons/BaseLayout";
import Content from "@components/Landing/content";
import UpperPart from "@components/Landing/upperPart";

const Home = () => {
  return (
    <BaseLayout>
      <UpperPart />
      <Content />
    </BaseLayout>
  );
};

export default Home;
