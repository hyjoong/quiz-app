import Image from "next/image";
import React from "react";
import { ContentStyled } from "./style";

const Contents = () => {
  return (
    <ContentStyled>
      <Image src="/images/problem.png" width={400} height={500} alt="problem" />
      <h1>문제를 풀고 정답 여부를 확인할 수 있습니다</h1>
    </ContentStyled>
  );
};

export default Contents;
