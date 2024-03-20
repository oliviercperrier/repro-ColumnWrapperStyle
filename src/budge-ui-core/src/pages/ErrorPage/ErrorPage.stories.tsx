
import React from "react";
import { View } from "react-native";
import ErrorPage, { TErrorPageProps } from "./ErrorPage";

type TErrorPagePropsKeys = (keyof TErrorPageProps)[];

const DefaultFields: TErrorPagePropsKeys = ["showBigCode", "showButton", "buttonText"];

const ErrorPageMeta: ComponentMeta<typeof ErrorPage> = {
  title: "Misc/Pages/Error Page",
  component: ErrorPage,
  args: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => <View style={{ margin: 0, height: 800 }}>{Story()}</View>],
};

export default ErrorPageMeta;

type ErrorPageStory = ComponentStory<typeof ErrorPage>;

export const NotFound: ErrorPageStory = args => <ErrorPage {...args} onDismiss={() => {}} />;
NotFound.args = { errorCode: 404 };

export const GenericError: ErrorPageStory = args => <ErrorPage {...args} onDismiss={() => {}} />;
GenericError.args = { errorCode: 500, showBigCode: false };
