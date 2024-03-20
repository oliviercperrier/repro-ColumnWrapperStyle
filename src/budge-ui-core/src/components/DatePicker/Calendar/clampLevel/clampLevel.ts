import { clamp } from "@budgeinc/budge-ui-hooks";
import type { CalendarLevel } from "../../General.types";

// 0 – month, 1 – year, 2 – decade;
type LevelNumber = 0 | 1 | 2;

const levelToNumber = (level: CalendarLevel | undefined, fallback: LevelNumber): LevelNumber =>
  !level ? fallback : level === "month" ? 0 : level === "year" ? 1 : 2;

const levelNumberToLevel = (levelNumber: LevelNumber): CalendarLevel =>
  levelNumber === 0 ? "month" : levelNumber === 1 ? "year" : "decade";

export const clampLevel = (
  level: CalendarLevel | undefined,
  minLevel: CalendarLevel | undefined,
  maxLevel: CalendarLevel | undefined
): CalendarLevel =>
  levelNumberToLevel(
    clamp(levelToNumber(level, 0), levelToNumber(minLevel, 0), levelToNumber(maxLevel, 2)) as LevelNumber
  );
