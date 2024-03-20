
import React from "react";
import { Button } from "../../../components/Button";
import ErrorManager from "./ErrorManager";
import { TErrorManagerProps } from "./ErrorManager.types";
import { errorManager } from "./ErrorManager.state";
import ModalManager from "../../../components/ModalManager/ModalManager";

type TErrorManagerPropsKeys = (keyof TErrorManagerProps)[];

const DefaultFields: TErrorManagerPropsKeys = [];

const ErrorManagerMeta: ComponentMeta<typeof ErrorManager> = {
  title: "Misc/Error Utils/Error Manager",
  component: ErrorManager,
  args: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default ErrorManagerMeta;

type ErrorManagerStory = ComponentStory<typeof ErrorManager>;

export const Default: ErrorManagerStory = () => (
  <>
    <ErrorManager
      messages={{
        msgKey: {
          message: "An error occured! Long Press on the Red Urgent Icon to see more details",
          userFriendly: true,
        },
      }}
    />
    <Button
      title="Show error"
      color="primary"
      onPress={() =>
        errorManager.showError({
          error: {
            timestamp: "123123123",
            reqId: "123123123" as any,
            message: "123123123",
            method: "POST",
            url: "123123",
            status: 400,
            data: {},
          },
        })
      }
      alignSelf="flex-start"
    />
  </>
);
