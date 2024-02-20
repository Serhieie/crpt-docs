import { useSelector } from "react-redux";
import { ApiEndpoint } from "operationsArray";
import {
  getIsAuthOpen,
  getIsAssetsOpen,
  getShowCode,
  getOperations,
} from "../redux/appSlice/appSelectors";

export interface useAuthReturn {
  isAssetsOpen: boolean;
  isAuthOpen: boolean;
  showCode: boolean;
  operations: ApiEndpoint[];
}

export const useAppSelectors = (): useAuthReturn => {
  const isAssetsOpen: boolean = useSelector(getIsAssetsOpen);
  const isAuthOpen: boolean = useSelector(getIsAuthOpen);
  const showCode: boolean = useSelector(getShowCode);
  const operations: ApiEndpoint[] = useSelector(getOperations);

  return {
    isAssetsOpen,
    isAuthOpen,
    showCode,
    operations,
  };
};
