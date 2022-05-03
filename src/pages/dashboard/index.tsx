import Link from "next/link";

import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import { AppPage } from "@src/types";

export const DashboardPage: AppPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Link href="/account/profile">
          <a className="btn btn-ghost">Go to profile</a>
        </Link>
      </div>

      <section className="mt-8 w-full max-w-3xl p-4 border border-primary rounded-lg">
        <div className="prose dark:prose-invert">
          <h2>Your tags</h2>
        </div>

        <div className="mt-8 flex flex-row justify-end">
          <Link href="/tags/new">
            <a className="btn btn-primary">New tag</a>
          </Link>
        </div>
      </section>

      <section className="mt-16 w-full max-w-3xl p-4 border border-primary rounded-lg">
        <div className="prose dark:prose-invert">
          <h2>Your properties</h2>
        </div>

        <div className="mt-8 flex flex-row justify-end">
          <Link href="/properties/new">
            <a className="btn btn-primary">New property</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

DashboardPage.applyLayout = applyPrivatePageLayout;

export default DashboardPage;
