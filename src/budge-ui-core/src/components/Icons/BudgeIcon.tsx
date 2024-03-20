import React, { forwardRef, memo, useId } from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import IconSvg, { TIconSvgProps } from "./IconSvg/IconSvg";

interface OwnProps extends TIconSvgProps {
  useBudgeColorGradient?: boolean;
}

const BudgeIcon = forwardRef<Svg, OwnProps>(({ useBudgeColorGradient = false, ...props }, ref) => {
  const id = useId();

  return (
    <IconSvg ref={ref} {...props} viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8389 4.95618V6.94457H3.08572C3.18864 6.64885 3.35792 6.38455 3.57874 6.17477C3.79957 5.965 4.06522 5.81615 4.35246 5.74124L14.607 3.05144C14.8713 2.985 15.1463 2.98289 15.4116 3.04527C15.6768 3.10766 15.9255 3.23293 16.1391 3.4118C16.3594 3.59428 16.5372 3.82863 16.6586 4.09653C16.78 4.36443 16.8417 4.65864 16.8389 4.95618ZM3 8.21426H18.8824C20.0519 8.21426 21 9.16044 21 10.3276V18.8867C21 20.0538 20.0519 21 18.8824 21H5.11765C3.9481 21 3 20.0538 3 18.8867V8.21426ZM8.34706 12.1944C8.34706 14.2113 9.97813 15.8399 11.9824 15.8399C13.9866 15.8399 15.6176 14.2113 15.6176 12.1944H17.5588C17.5588 15.2742 15.0656 17.7771 11.9824 17.7771C8.89906 17.7771 6.40588 15.2742 6.40588 12.1944H8.34706Z"
        fill={useBudgeColorGradient ? `url(#budgeIcon0${id})` : undefined}
      />
      {useBudgeColorGradient && (
        <Defs>
          <LinearGradient
            id={`budgeIcon0${id}`}
            x1="9.97028"
            y1="2.96478"
            x2="9.88983"
            y2="21.0145"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF7D5C" />
            <Stop offset="1" stopColor="#FF004D" />
          </LinearGradient>
        </Defs>
      )}
    </IconSvg>
  );
});

export default memo(BudgeIcon);
