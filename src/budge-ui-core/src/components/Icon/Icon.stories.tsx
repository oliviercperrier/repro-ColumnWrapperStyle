import React, { ReactNode } from "react";
import {
  AddIcon,
  AddCircledIcon,
  AddUserIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BookmarkIcon,
  CalendarIcon,
  CardIcon,
  ChevronDownIcon,
  ChevronDownFilledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  DeleteIcon,
  HearthIcon,
  HomeIcon,
  InfoIcon,
  ExternalLinkIcon,
  InsightIcon,
  LikeIcon,
  MailIcon,
  MessageIcon,
  MoneyIcon,
  MoreDotsIcon,
  MoreDotsCircledIcon,
  MountainIcon,
  NotebookIcon,
  NotificationIcon,
  PayBonusIcon,
  PayRaiseIcon,
  PtoIcon,
  RemoveIcon,
  SavingsIcon,
  SearchIcon,
  SecurityIcon,
  SettingsIcon,
  AdvancedSettingsIcon,
  ShopIcon,
  SmartphoneIcon,
  SnowballIcon,
  UploadIcon,
  StudentIcon,
  SuccessIcon,
  SunIcon,
  SupportIcon,
  TrashIcon,
  UrgentIcon,
  UserIcon,
  WalletIcon,
  WorldIcon,
  BudgeIcon,
  TransferIcon,
  GraphIcon,
  BurgerIcon,
  LoginIcon,
  GiftIcon,
  EyeIcon,
  EyeCloseIcon,
  LockIcon,
  SmileyIcon,
  DocumentIcon,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  UnLockIcon,
  ReversedIcon,
  BankIcon,
  RadioBoxIcon,
  RadioFilledIcon,
  CoachIcon,
  SyncIcon,
} from ".";
import { Stack } from "../Stack";
import { SvgIcon, TMemoRefIconProps } from "../SvgIcon";
import { Meta, StoryFn } from "@storybook/react";
import { Box } from "../Box";
import { Text } from "../Text";
import { FacebookIcon, TwitterIcon, AppleIcon, GoogleIcon } from "./socials";

const meta = {
  title: "General/Icons",
  component: SvgIcon,
  args: {
    color: "dark"
  },
} satisfies Meta<typeof SvgIcon>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => {
  const chunks = chunkArray(iconList, 5);

  return (
    <Stack spacing="xl">
      {chunks.map(chunk => (
        <Stack.Horizontal>{chunk}</Stack.Horizontal>
      ))}
    </Stack>
  );
};

const IconDisplay = ({ title, icon: Icon }: { title: string; icon: TMemoRefIconProps }) => (
  <Stack alignItems="center" miw={150} spacing="xs">
    <Icon />
    <Text size="sm" color="secondary">
      {title}
    </Text>
  </Stack>
);

const iconList: ReactNode[] = [
  <IconDisplay title="Chevron Down" icon={ChevronDownIcon} />,
  <IconDisplay title="Chevron Down Filled" icon={ChevronDownFilledIcon} />,
  <IconDisplay title="Chevron Up" icon={ChevronUpIcon} />,
  <IconDisplay title="Chevron Right" icon={ChevronRightIcon} />,
  <IconDisplay title="Chevron Left" icon={ChevronLeftIcon} />,
  <IconDisplay title="Close" icon={CloseIcon} />,
  <IconDisplay title="Arrow Left" icon={ArrowLeftIcon} />,
  <IconDisplay title="Arrow Right" icon={ArrowRightIcon} />,
  <IconDisplay title="Arrow Up" icon={ArrowUpIcon} />,
  <IconDisplay title="Arrow Down" icon={ArrowDownIcon} />,
  <IconDisplay title="Transfer" icon={TransferIcon} />,
  <IconDisplay title="Reversed" icon={ReversedIcon} />,
  <IconDisplay title="Sync" icon={SyncIcon} />,
  <IconDisplay title="Sun" icon={SunIcon} />,
  <IconDisplay title="Hearth" icon={HearthIcon} />,
  <IconDisplay title="Home" icon={HomeIcon} />,
  <IconDisplay title="Bookmark" icon={BookmarkIcon} />,
  <IconDisplay title="Insight" icon={InsightIcon} />,
  <IconDisplay title="Notebook" icon={NotebookIcon} />,
  <IconDisplay title="Notification" icon={NotificationIcon} />,
  <IconDisplay title="Search" icon={SearchIcon} />,
  <IconDisplay title="Settings" icon={SettingsIcon} />,
  <IconDisplay title="Advanced Settings" icon={AdvancedSettingsIcon} />,
  <IconDisplay title="Shop" icon={ShopIcon} />,
  <IconDisplay title="Mail" icon={MailIcon} />,
  <IconDisplay title="Message" icon={MessageIcon} />,
  <IconDisplay title="Smartphone" icon={SmartphoneIcon} />,
  <IconDisplay title="Add" icon={AddIcon} />,
  <IconDisplay title="MoreDots" icon={MoreDotsIcon} />,
  <IconDisplay title="MoreDots Circled" icon={MoreDotsCircledIcon} />,
  <IconDisplay title="Radio Box" icon={RadioBoxIcon} />,
  <IconDisplay title="Radio Filled" icon={RadioFilledIcon} />,
  <IconDisplay title="Success" icon={SuccessIcon} />,
  <IconDisplay title="Delete" icon={DeleteIcon} />,
  <IconDisplay title="Add Circled" icon={AddCircledIcon} />,
  <IconDisplay title="Remove" icon={RemoveIcon} />,
  <IconDisplay title="Urgent" icon={UrgentIcon} />,
  <IconDisplay title="Info" icon={InfoIcon} />,
  <IconDisplay title="Support" icon={SupportIcon} />,
  <IconDisplay title="Security" icon={SecurityIcon} />,
  <IconDisplay title="Trash" icon={TrashIcon} />,
  <IconDisplay title="World" icon={WorldIcon} />,
  <IconDisplay title="Calendar" icon={CalendarIcon} />,
  <IconDisplay title="Pto" icon={PtoIcon} />,
  <IconDisplay title="Money" icon={MoneyIcon} />,
  <IconDisplay title="Pay Bonus" icon={PayBonusIcon} />,
  <IconDisplay title="Pay Raise" icon={PayRaiseIcon} />,
  <IconDisplay title="Credit Card" icon={CardIcon} />,
  <IconDisplay title="Wallet" icon={WalletIcon} />,
  <IconDisplay title="Savings" icon={SavingsIcon} />,
  <IconDisplay title="Snowball" icon={SnowballIcon} />,
  <IconDisplay title="Mountain" icon={MountainIcon} />,
  <IconDisplay title="Student" icon={StudentIcon} />,
  <IconDisplay title="Add User" icon={AddUserIcon} />,
  <IconDisplay title="User" icon={UserIcon} />,
  <IconDisplay title="Coach" icon={CoachIcon} />,
  <IconDisplay title="Like" icon={LikeIcon} />,
  <IconDisplay title="Upload" icon={UploadIcon} />,
  <IconDisplay title="External" icon={ExternalLinkIcon} />,
  <IconDisplay title="Budge" icon={BudgeIcon} />,
  <IconDisplay title="Graph" icon={GraphIcon} />,
  <IconDisplay title="Burger" icon={BurgerIcon} />,
  <IconDisplay title="Login" icon={LoginIcon} />,
  <IconDisplay title="Gift" icon={GiftIcon} />,
  <IconDisplay title="Eye" icon={EyeIcon} />,
  <IconDisplay title="Eye Close" icon={EyeCloseIcon} />,
  <IconDisplay title="Lock" icon={LockIcon} />,
  <IconDisplay title="Unlock" icon={UnLockIcon} />,
  <IconDisplay title="Facebook" icon={FacebookIcon} />,
  <IconDisplay title="Google" icon={GoogleIcon} />,
  <IconDisplay title="Apple" icon={AppleIcon} />,
  <IconDisplay title="Twitter" icon={TwitterIcon} />,
  <IconDisplay title="Smiley" icon={SmileyIcon} />,
  <IconDisplay title="Document" icon={DocumentIcon} />,
  <IconDisplay title="Checkbox Checked" icon={CheckboxCheckedIcon} />,
  <IconDisplay title="Checkbox Unchecked" icon={CheckboxUncheckedIcon} />,
  <IconDisplay title="Bank" icon={BankIcon} />,
];

function chunkArray(array: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
