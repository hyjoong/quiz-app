import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BaseLayout from "@components/commons/BaseLayout";
import UpperPart from "@components/Landing/upperPart";
import dynamic from "next/dynamic";

const Home = () => {
  const Content = dynamic(() => import("@components/Landing/content"), {
    ssr: false,
  });
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
