import styled from "@emotion/styled";

type AnchorButtonProps = {
  title: string;
  linkHref: string;
};

const Anchor = styled.a({
  borderRadius: "8px",
  backgroundColor: "black",
  padding: "11px 14px",
  transition: "opacity 0.3s",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.7, // 호버 시 opacity 변경
  },
});

export const AnchorButton = ({ title, linkHref }: AnchorButtonProps) => {
  return (
    <Anchor href={linkHref} target="_blank" rel="noopener noreferrer">
      {title}
    </Anchor>
  );
};

/**
rel="noopener noreferrer":
- noopener: 새 탭에서 열린 페이지가 원래 페이지에 접근할 수 없도록 하여 보안성을 높입니다.
- noreferrer: 원래 페이지의 URL 정보가 새 탭으로 전달되지 않도록 합니다.
*/
