import React from "react";
import Link from "next/link";
import { PublicDashboardButton } from "@src/components/PublicDashboardButton";
import { useAuth } from "@src/contexts/Auth";

export const PublicPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, logout } = useAuth();

  return (
    <main className="pb-24">
      <header className="flex flex-row justify-between pr-4 bg-primary mb-8">
        <div className="flex flex-row items-center">
          <Link href="/">
            <a className="relative inline-block w-24 h-16">
              <img src="/ip-chain-logo.jpg" alt="logo image" />
            </a>
          </Link>

          <Link href="/lendables">
            <a className="ml-4 btn btn-ghost">Lendables</a>
          </Link>

          <Link href="/">
            <a className="ml-4 btn btn-ghost">IP Chains</a>
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <PublicDashboardButton />
          {user ? (
            <>
              <Link href="/account/profile">
                <a className="ml-4 btn btn-ghost">Profile</a>
              </Link>

              <button className="ml-4 btn btn-ghost" onClick={logout}>
                Signout
              </button>
            </>
          ) : null}
        </div>
      </header>

      {children}
    </main>
  );
};

export function applyPublicPageLayout(page: React.ReactNode) {
  return <PublicPageLayout>{page}</PublicPageLayout>;
}
