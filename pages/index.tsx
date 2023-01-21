import BaseLayout from "@components/commons/BaseLayout";
import Content from "@components/Landing/content";
import UpperPart from "@components/Landing/upperPart";

const Home = () => {
  return (
    <BaseLayout>
      <UpperPart />
      <Content imgSrc="problem" detail="퀴즈 문제를 확인할 수 있습니다" />
      <Content
        imgSrc="answer"
        detail="정답 확인 버튼을 눌러 정답을 확인할 수 있습니다"
        isRevert={true}
      />
      <Content
        imgSrc="chart"
        detail="퀴즈를 다 풀고 정답 수와 오답 수를 확인할 수 있습니다"
      />
    </BaseLayout>
  );
};

export default Home;
