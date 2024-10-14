import styled from "@emotion/styled";
import { SectionTitle } from "../common/SectionTitle";
import FadeInUp from "../common/FadeInUp";

const Container = styled.section({
  width: "100%",
  margin: "auto",
  maxWidth: "1140px",
});

const PhoneScreenShot = styled.img({
  width: "400px",
  display: "block",
  margin: "80px auto",
});

const WidgetItem = ({ index }: { index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <FadeInUp duration={0.3} delay={(index + 1.8) * 0.3}>
      <img
        src={`/images/widget_items_${index}.png`}
        style={{
          position: "absolute",
          left:
            index === 0
              ? "150px"
              : index === 1
              ? "auto"
              : index === 2
              ? "-50px"
              : "auto",
          right: isEven ? "auto" : "0",
          top:
            index === 0
              ? "150px"
              : index === 1
              ? "200px"
              : index === 2
              ? "400px"
              : "300px",
          transform: "scale(0.5)",
        }}
      />
    </FadeInUp>
  );
};

export const WidgetInfoSection = () => {
  return (
    <Container className="section-container">
      <SectionTitle
        label={"위젯"}
        title={["홈화면 위젯으로", "이번 달 목표를 바로 확인할 수 있어요."]}
      />
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <WidgetItem key={index} index={index} />
        ))}
      <FadeInUp duration={0.7} delay={0.3}>
        <PhoneScreenShot src="/images/widget-screenshot.png" />
      </FadeInUp>
    </Container>
  );
};
