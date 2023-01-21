import Image from "next/image";
import React from "react";
import { ContentStyled } from "./style";

interface Props {
  imgSrc: string;
  detail: string;
  isRevert?: boolean;
}

const Contents = ({ imgSrc, detail, isRevert = false }: Props) => {
  return (
    <ContentStyled isRevert={isRevert}>
      <Image
        src={`/images/${imgSrc}.png`}
        width={400}
        height={500}
        alt="problem"
      />
      <div className="info">
        <h1>{detail}</h1>
      </div>
    </ContentStyled>
  );
};

export default Contents;
