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
  margin: "50px auto",
});

const SubText = styled.p<{ isFirst?: boolean }>(({ isFirst }) => ({
  fontSize: 23,
  fontWeight: 600,
  lineHeight: 1.5,
  color: "#333d4b",
  width: "280px",
  marginTop: isFirst ? "-200px" : "0",
}));

export const HomeInfoSection = () => {
  return (
    <Container className="section-container">
      <SectionTitle
        label={"홈화면"}
        title={["목표 관리,", "기록부터 달성까지", "쉽고 간편하게"]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FadeInUp duration={0.6} delay={0.7}>
          <SubText isFirst>
            홈화면에서 바로 목표를
            <br /> 등록하고, 수정할 수 있어요.
          </SubText>
        </FadeInUp>
        <FadeInUp duration={0.7} delay={0.4}>
          <PhoneScreenShot src="/images/home-screenshot.png" />
        </FadeInUp>
        <FadeInUp duration={0.6} delay={1.2}>
          <SubText>
            스티커를 붙이는 듯한 재밌는 애니매이션으로 목표 기록 경험을 더욱
            생동감 있게 만들어줘요.
          </SubText>
        </FadeInUp>
      </div>
    </Container>
  );
};
