import { Field } from "../../types";
import { ReactNode, memo } from "react";
import classNames from "classnames";

const IndexFieldWrapper = ({
  children,
  flush = false,
}: {
  field: Field;
  children: ReactNode;
  flush?: boolean;
}) => (
  <div
    className={classNames(
      "leading-tight whitespace-no-wrap overflow-hidden overflow-ellipsis px-6 whitespace-nowrap text-sm text-gray-500 truncate h-full",
      {
        "py-0": flush,
        "py-4": !flush,
      }
    )}
  >
    {children}
  </div>
);

export default memo(IndexFieldWrapper);
