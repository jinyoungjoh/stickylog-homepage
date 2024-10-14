import { css } from "@emotion/react";
import HeroSection from "../components/sections/HeroSection";
import { HomeInfoSection } from "../components/sections/HomeInfoSection";
import { WidgetInfoSection } from "../components/sections/WidgetInfoSection";
import { GoalTemplateInfoSection } from "../components/sections/GoalTemplateInfoSection";
import { FooterSection } from "../components/sections/FooterSection";

const textStyle = css`
  font-family: PretendardVariable, sans-serif;
  font-size: 66px;
  color: #fff;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 48px;
    font-variation-settings: "wght" 600, "wdth" 90;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    font-variation-settings: "wght" 500, "wdth" 80;
  }
`;

const HomePage = () => {
  return (
    <div css={textStyle}>
      <HeroSection />
      <HomeInfoSection />
      <WidgetInfoSection />
      <GoalTemplateInfoSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
