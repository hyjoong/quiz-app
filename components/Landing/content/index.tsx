import React, { useRef } from "react";
import Image from "next/image";
import useIntersectionObsever from "@hooks/useIntersectionObserver";
import { ContentStyled, ImageBox } from "./style";
import { Props } from "./type";
import { useTranslation } from "next-i18next";

const Contents = ({ imgSrc, detail, isRevert = false }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isViewport = useIntersectionObsever(contentRef);

  const { t } = useTranslation("common");
  return (
    <ContentStyled isRevert={isRevert} ref={contentRef}>
      <ImageBox
        isViewDirection={
          isViewport ? (isRevert ? "left" : "right") : "none"
        }
      >
        <Image
          src={`/images/${imgSrc}.png`}
          width={400}
          height={500}
          alt="problem"
        />
      </ImageBox>
      <div className="info">
        <h1>{t(`${detail}`)}</h1>
      </div>
    </ContentStyled>
  );
};

export default Contents;
