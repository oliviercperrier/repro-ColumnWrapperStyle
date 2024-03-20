import React, { useEffect, useId, useRef, useState } from "react";
import { Defs, LinearGradient, Path, PathProps, Stop, Svg } from "react-native-svg";
import { useTheme } from "@budgeinc/budge-ui-styling";
import Animated, { useAnimatedProps, useSharedValue, withDelay, withSpring } from "react-native-reanimated";
import { Box } from "../Box";
import { TTextProps, Text } from "../Text";
import { Stack } from "../Stack";
import { TTextColor } from "../Text/Text.styles";

export type TCreditScoreProps = {
  width: number;
  score: number;
  scoreGrade: string;
  variation?: number;
  variationUnit?: string;
  animationDelay?: number;
};

const ActiveStrokeWidth = 25;
const baseWidth = 250;
const baseHeight = 138;
const maxScore = 850;
const startAngle = 180;

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const CreditScore = ({
  width,
  score,
  scoreGrade,
  variation = 0,
  variationUnit = "pt",
  animationDelay = 0,
}: TCreditScoreProps) => {
  const theme = useTheme();
  const strokeRatio = ActiveStrokeWidth / baseWidth;
  const legendFz = width / 16;
  const heightRatio = baseHeight / baseWidth;
  const ajustedScore = Math.min(maxScore, Math.max(0, score));

  return (
    <Box w={width}>
      <Svg height={width * heightRatio} width={width} viewBox={`0 0 ${baseWidth} ${baseHeight}`}>
        <SvgArc
          startDeg={startAngle}
          endDeg={0}
          animated={false}
          strokeWidth={15}
          stroke={theme.palette.colors.gray[1]}
        />
        <SvgArc
          startDeg={startAngle}
          endDeg={interpolateScore(ajustedScore)}
          strokeWidth={ActiveStrokeWidth}
          gradientColors={["#F59EFF", "#730CB6"]}
          animationDelay={animationDelay}
        />
      </Svg>
      <CounterAnimation
        value={ajustedScore}
        animationDelay={animationDelay}
        fw="600"
        mt={-width / 4}
        fz={width / 6}
        variant="titleH2"
        ta="center"
      />
      <Stack.Horizontal mt={width / 12} justifyContent="space-between">
        <Box alignItems="center" w={strokeRatio * width}>
          <Text fw="600" color="textSecondary" fz={legendFz}>
            0
          </Text>
        </Box>
        <Box alignItems="center">
          <Text fw="600" fz={legendFz}>
            <Text fw="600" fz={legendFz} color={getVariantColor(variation)}>
              {variation > 0 ? "+" : ""}
              {variation} {variationUnit}
            </Text>{" "}
            • {scoreGrade}
          </Text>
        </Box>
        <Box alignItems="center" w={strokeRatio * width}>
          <Text ta="center" w={strokeRatio * width * 2} color="textSecondary" fw="600" fz={legendFz}>
            {maxScore}
          </Text>
        </Box>
      </Stack.Horizontal>
    </Box>
  );
};

const getVariantColor = (variation: number): TTextColor => {
  if (variation > 0) return "green";
  if (variation === 0) return "textSecondary";
  return "red";
};

const interpolateScore = (x: number) => x * (startAngle / maxScore) - startAngle;

const SvgArc = ({
  startDeg,
  endDeg,
  gradientColors,
  animated = true,
  animationDelay,
  ...rest
}: {
  startDeg: number;
  endDeg: number;
  animationDelay?: number;
  animated?: boolean;
  gradientColors?: string[];
} & PathProps) => {
  const gradientId = useId();
  const center = baseWidth / 2;
  const r = (baseWidth - ActiveStrokeWidth) / 2;
  const largeArcFlag = endDeg - startDeg <= startDeg ? "0" : "1";
  const showGradientForAngle = endDeg > -90 && gradientColors && gradientColors.length > 0;

  const animatedEndAngle = useSharedValue(animated ? -startDeg : 0);
  const animatedProps = useAnimatedProps(() => {
    const start = polarToCartesian(center, center, r, animatedEndAngle.value);
    const end = polarToCartesian(center, center, r, startDeg);

    return {
      d: `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    };
  }, []);

  useEffect(() => {
    if (animated) {
      animatedEndAngle.value = withDelay(
        animationDelay || 0,
        withSpring(endDeg, {
          damping: 100,
          stiffness: 20,
        })
      );
    }
  }, [endDeg, animated]);

  // error ref: https://github.com/software-mansion/react-native-svg/issues/2054

  return (
    <>
      {showGradientForAngle && (
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <Stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
      )}
      <AnimatedPath
        fill="none"
        strokeLinecap="round"
        stroke={showGradientForAngle ? `url(#${gradientId})` : gradientColors?.length ? gradientColors[0] : rest.stroke}
        animatedProps={animatedProps}
        {...rest}
      />
    </>
  );
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const CounterAnimation = ({
  value,
  animationDelay = 0,
  ...textProps
}: { value: number; animationDelay?: number } & TTextProps) => {
  const [counter, setCounter] = useState(0);
  const valueRef = useRef<number>();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    if (valueRef.current && valueRef.current > 0 && valueRef.current !== value) {
      setCounter(0);
    }

    if (counter < value) {
      valueRef.current = value;
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          setCounter(prev => Math.round(Math.min(prev + value / 20, value)));
        }, 45);
      }, animationDelay);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <AnimatedText {...textProps}>{counter}</AnimatedText>;
};

export default CreditScore;
