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
import { headers } from "next/headers";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import LangToggle from "../shared/LangToggle";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const test = header_url.endsWith("/");
  // const isActive = test === href;
  const links = [
    t("Home"),
    t("AboutMe"),
    t("Método"),
    t("Services"),
    t("Testimonials"),
    t("Contact"),
  ];
  return (
    <nav className="relative md:absolute top-0 flex h-auto md:h-20 w-full shrink-0 items-center p-0 md:px-24 justify-between">
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
              <Link
                // aria-current={isActive ? "page" : undefined}
                key={i}
                href="#"
                className="flex w-full items-center py-2 text-xl font-semibold"
                prefetch={false}
              >
                {lien}
              </Link>
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
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  {lien}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center flex-row gap-2">
        <div className="hidden md:flex">
          <LangToggle />
        </div>
        <LangToggle />
      </div>
    </nav>
  );
}
