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
      <header className="flex flex-row justify-between py-2 px-4">
        <div>
          <Link href="/">
            <a className="btn btn-ghost">Home</a>
          </Link>
          <div className="dropdown ml-4">
            <label tabIndex={0} htmlFor="" className="btn">
              Explore
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-stone-800 rounded-box w-52"
            >
              <li>
                <Link href="/tags">
                  <a>Tags</a>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <a>Properties</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <PublicDashboardButton />
          {user ? (
            <button className="ml-4 btn btn-ghost" onClick={logout}>
              Signout
            </button>
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
