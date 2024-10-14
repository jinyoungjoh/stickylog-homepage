import styled from "@emotion/styled";
import { AnchorButton } from "../common/AnchorButton";
import { APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from "../../utils/constants";

const Title = styled.p({
  textAlign: "center",
  background: "linear-gradient(90deg, #D3FFDB, #EE6DFF)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "48px",
  fontWeight: "600",
});

const Container = styled.section({
  backgroundImage: "url('/images/footer_bg.png')", // 이미지 배경 경로
  rowGap: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FooterSection = () => {
  return (
    <Container className="section-container">
      <Title>
        건강한 습관을 만들고 싶으신가요? <br /> 목표의 시작부터 달성까지,
        <br /> 이제 Sticky Log와 함께해요.
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <AnchorButton title={"App Store"} linkHref={APP_STORE_URL} />
        <AnchorButton title={"Google Play"} linkHref={GOOGLE_PLAYSTORE_URL} />
      </div>
    </Container>
  );
};
