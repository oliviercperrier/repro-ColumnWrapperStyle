import Card from "./Card";
import { TCardComponent } from "./Card.types";
import CardHeader from "./CardHeader";

const CardTemp: any = Card;

CardTemp.Header = CardHeader;

if (process.env.NODE_ENV !== "production") {
  CardTemp.Header.displayName = "Card.Header";
  CardTemp.displayName = "Card";
}

const CardMain = CardTemp as TCardComponent;

export * from "./Card.types";
export { CardMain as Card };
