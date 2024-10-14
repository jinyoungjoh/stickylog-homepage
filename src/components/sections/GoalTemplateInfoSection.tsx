import styled from "@emotion/styled";
import { SectionTitle } from "../common/SectionTitle";
import FadeInUp from "../common/FadeInUp";

const Container = styled.section({
  width: "100%",
  margin: "auto",
  maxWidth: "1140px",
});

const GoalTemplateItem = ({ index }: { index: number }) => {
  return (
    <FadeInUp delay={0.4}>
      <img
        src={`/images/goal_template_${index}.png`}
        style={{
          marginTop: index % 2 === 0 ? "150px" : "300px",
          maxWidth: "300px",
        }}
      />
    </FadeInUp>
  );
};

export const GoalTemplateInfoSection = () => {
  return (
    <Container className="section-container">
      <SectionTitle
        label={"목표 템플릿"}
        title={[
          "나만의 목표를 찾아볼까요?",
          "다양한 예시를 참고해",
          "나에게 딱 맞는 목표를 설정해봐요.",
        ]}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <GoalTemplateItem key={index} index={index} />
          ))}
      </div>
    </Container>
  );
};
