import styled from "@emotion/styled";
import FadeInUp from "./FadeInUp";

type SectionTitleProps = {
  label: string;
  title: string[];
};

const StyledParagraph = styled.p({
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: 1.3,
  color: "#3182f6",
  marginBottom: "30px",
});

const StyledHeading = styled.h2({
  fontSize: "50px",
  fontWeight: 700,
  lineHeight: 1.4,
  color: "#191f28",
});

export const SectionTitle = ({ label, title }: SectionTitleProps) => {
  return (
    <FadeInUp duration={0.7} delay={0.2}>
      <StyledParagraph>{label}</StyledParagraph>
      <StyledHeading>
        {title.map((line, index) => (
          <span key={index}>
            {line}
            {index !== title.length - 1 && <br />}
          </span>
        ))}
      </StyledHeading>
    </FadeInUp>
  );
};
