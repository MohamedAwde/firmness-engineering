import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  children,
  activeClassName = "active",
  ...props
}) => {
  const { asPath } = useRouter();

  const currPath = asPath.split("/");
  const disPath = props.href.toString().split("/");

  let isActive = disPath[1] === currPath[1];

  const className = isActive
    ? `${props.className} ${activeClassName}`.trim()
    : props.className;

  return (
    <Link href={props.href} className={className} onClick={props.onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
