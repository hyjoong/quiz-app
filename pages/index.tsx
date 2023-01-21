import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BaseLayout from "@components/commons/BaseLayout";
import Content from "@components/Landing/content";
import UpperPart from "@components/Landing/upperPart";

const Home = () => {
  return (
    <BaseLayout>
      <UpperPart />
      <Content imgSrc="problem" detail="introduce" />
      <Content imgSrc="answer" detail="check" isRevert={true} />
      <Content imgSrc="chart" detail="result" />
    </BaseLayout>
  );
};

export default Home;
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
