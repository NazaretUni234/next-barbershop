"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ComponentLink({ href, children }: Props) {
  const path = usePathname();
  const stylesActive = useMemo(() => {
    if (href === "/home" && path === "/") {
      return {
        className: "active",
      };
    }
    if (path === href) {
      return {
        className: "active",
      };
    }
  }, [path, href]);
  return (
    <Link href={href} {...stylesActive}>
      {children}
    </Link>
  );
}
