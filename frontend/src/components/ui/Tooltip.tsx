import { useState, useEffect, useMemo } from 'react';
// import { HiInformationCircle } from "react-icons/hi";

interface IProps {
  text?: string | JSX.Element;
}

export const Tooltip = ({ text }: IProps) => {
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const tooltipId = useMemo(() => `tooltip-${Math.random().toString(36)}`, []);

  useEffect(() => {
    const checkTooltipDirection = () => {
      const tooltip = document.getElementById(
        tooltipId,
      ) as HTMLDivElement | null;
      if (!tooltip) {
        return 'left';
      }

      const rect = tooltip.getBoundingClientRect();

      const left = rect.left;
      const right = window.innerWidth - rect.right;

      if (right > 200) {
        return 'left';
      }
      if (left > 200) {
        return 'right';
      }

      if (right > left) {
        return 'left';
      }

      return 'right';
    };

    setDirection(checkTooltipDirection);

    window.addEventListener('resize', () => {
      setDirection(checkTooltipDirection);
    });
  }, [tooltipId]);

  return (
    <div tabIndex={0} className="group/tooltip relative h-min w-fit px-2">
      <div id={tooltipId} className="cursor-pointer">
        {/* <HiInformationCircle size={18} className="text-gray-400" /> */}
        <div className="size-[12px] rounded-full bg-gray-400 text-center text-white"></div>
      </div>

      <div
        data-direction={direction}
        className="absolute top-full z-10 hidden max-h-[32rem] justify-center overflow-y-auto p-2 group-hover/tooltip:flex data-[direction=left]:left-0 data-[direction=right]:right-0"
      >
        <div className="w-48 max-w-prose break-keep rounded-lg bg-gray-600 px-2 py-1 text-sm text-white">
          {text}
        </div>
      </div>
    </div>
  );
};
