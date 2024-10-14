import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type FadeInUpProps = {
  children: React.ReactNode;
  duration?: number; // 애니메이션 지속 시간
  delay?: number; // 애니메이션 시작 전 지연 시간
};

const FadeInUp = ({
  children,
  duration = 0.5,
  delay = 0, // 기본값 0
}: FadeInUpProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 요소가 뷰포트에 들어올 때 애니메이션 시작
          observer.disconnect(); // 애니메이터 후 관찰 중지
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // 컴포넌트 언마운트 시 관찰 해제
      }
    };
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      y: 20, // 아래에서 위로 이동
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isVisible ? "animate" : "initial"} // isVisible에 따라 애니메이션 상태 변경
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
