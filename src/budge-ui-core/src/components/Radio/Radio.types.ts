import { TFormItemValueTypes } from "../Form";

export type TRadioStatus = "checked" | "unchecked";
export type TOnValueChange = (value: TFormItemValueTypes) => void;
