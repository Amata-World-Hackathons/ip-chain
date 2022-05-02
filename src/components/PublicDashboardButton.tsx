import classNames from "classnames";
import Link from "next/link";

export const PublicDashboardButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, ...rest }) => {
  return (
    <Link href="/dashboard">
      <a {...rest} className={classNames("btn btn-ghost", className)}>
        Dashboard
      </a>
    </Link>
  );
};
