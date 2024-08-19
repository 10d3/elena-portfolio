import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon, MountainIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import LangToggle from "../shared/LangToggle";
import { useLocale, useTranslations } from "next-intl";
import NavigationLink from "../shared/NavigationLink";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const links = [
    { nav: t("Home"), href: `/${locale}` },
    { nav: t("AboutMe"), href: `/${locale}/aboutme` },
    { nav: t("Método"), href: `/${locale}/metodo` },
    { nav: t("Services"), href: `/${locale}/service` },
    { nav: t("Testimonials"), href: `/${locale}/testimonials` },
    { nav: t("Contact"), href: `/${locale}/contact` },
  ];
  return (
    <nav className="relative md:fixed top-0 flex h-auto md:h-20 w-full shrink-0 items-center p-0 md:px-24 justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-none hover:bg-white hover:dark:bg-black hover:-white text-black dark:text-white"
          >
            <MenuIcon size={28} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col" side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-2 py-6">
            {links.map((lien, i) => (
              <NavigationLink className="text-xl" key={i} href={lien.href}>
                {lien.nav}
              </NavigationLink>
            ))}
          </div>
          <div></div>
          <SheetFooter>
            <SheetClose asChild>
              <LangToggle />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="w-auto">
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map((lien, i) => (
              <NavigationMenuLink key={i} asChild>
                <NavigationLink className="text-xl" href={lien.href}>{lien.nav}</NavigationLink>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center flex-row gap-2">
        <div className="hidden md:flex">{/* <LangToggle /> */}</div>
        <LangToggle />
      </div>
    </nav>
  );
}
