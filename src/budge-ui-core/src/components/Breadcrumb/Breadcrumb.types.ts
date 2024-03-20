import { TBoxProps } from "../Box";

export interface BreadcrumbRouteMeta {
  title: string;
}

export interface BreadcrumbRoute {
  pathname: string;
  search?: string;
  hash?: string;
  meta?: BreadcrumbRouteMeta;
}

export type TBreadcrumbProps = TBoxProps & {
  stack: BreadcrumbRoute[];
  onLinkClick: (path: string) => void;
};
