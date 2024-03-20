import { NotificationOutput } from "@budgeinc/budge-api";

export const parseNewProgramNotifData = (notification: NotificationOutput) =>
  (notification.data || {}) as {
    programId: string;
  };

export const parseCampgainCreationReminderNotifData = (notification: NotificationOutput) =>
  (notification.data || {}) as {};
