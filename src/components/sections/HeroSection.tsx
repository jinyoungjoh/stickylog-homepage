import styled from "@emotion/styled";
import { AnchorButton } from "../common/AnchorButton";
import { APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from "../../utils/constants";
import FadeInUp from "../common/FadeInUp";

const Title = styled.h1({
  textAlign: "center",
});

const Container = styled.section({
  background: "linear-gradient(180deg, #F7EAFB, #ffffff)",
  rowGap: "20px",
});

const Image = styled.img({
  maxWidth: "400px",
  minWidth: "300px",

  "&:nth-of-type(2)": {
    marginLeft: "-200px",
  },
});

const HeroSection = () => {
  return (
    <Container className="section-container">
<FadeInUp duration={0.7}>
      <Title>
        SET, TRACK, AND ACHIEVE
        <br />
        YOUR GOALS WITH STICKY LOG
      </Title>
      </FadeInUp>
      <FadeInUp
        delay={0.5}
        styles={{ display: "flex", justifyContent: "center", gap: 4 }}
      >
        <AnchorButton title={"App Store"} linkHref={APP_STORE_URL} />
        <AnchorButton title={"Google Play"} linkHref={GOOGLE_PLAYSTORE_URL} />
      </FadeInUp>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Image src="/images/hero-phone-left.png" alt="Phone ScreenShot Home" />
        <Image
          src="/images/hero-phone-right.png"
          alt="Phone ScreenShot GoalTemplate"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
