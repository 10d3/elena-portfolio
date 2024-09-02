"use client"
import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Callout } from "./callout";
import { Badge } from "./ui/badge";
// import { useTranslations } from "next-intl";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const components = {
    Image,
    Callout,
    Badge
  };
  const Component = useMDXComponent(code);
  return (
    <div className="mdx-content w-full">
        <Component components={components} />
    </div>
  );
}
