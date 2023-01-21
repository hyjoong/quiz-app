import BaseLayout from "@components/commons/BaseLayout";
import Content from "@components/Landing/content";
import UpperPart from "@components/Landing/upperPart";

const Home = () => {
  return (
    <BaseLayout>
      <UpperPart />
      <Content
        imgSrc="problem"
        detail="카테고리와 난이도를 설정하고 퀴즈를 풀어보세요"
      />
      <Content
        imgSrc="answer"
        detail="정답 확인 버튼을 눌러 정답을 확인할 수 있습니다"
        isRevert={true}
      />
      <Content
        imgSrc="chart"
        detail="퀴즈를 다 풀고 정답 수와 오답 수를 확인하세요"
      />
    </BaseLayout>
  );
};

export default Home;
