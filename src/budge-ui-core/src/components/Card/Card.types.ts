import { TBoxProps } from "../Box";
import { TLoadingOverlayProps } from "../LoadingOverlay";

export type TCardProps = TBoxProps & {
    loading?: boolean;
    loadingOverlayProps?: TLoadingOverlayProps;
}