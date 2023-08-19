// modules
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <div className="h-8 w-8 max-md:hidden">
          <Image src="/assets/logo.svg" alt="logo" fill />
        </div>
        <span className="max-[240px]:hidden md:hidden ">
          <Image src="/assets/logo.svg" alt="logo" width={55} height={55} />
        </span>
        <p className="flex items-center text-heading3-bold text-light-1 max-xs:hidden">
          Thread
          <span className="text-purple-700">ling</span>
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src="/assets/logout.svg" alt="logout" width={28} height={28} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
