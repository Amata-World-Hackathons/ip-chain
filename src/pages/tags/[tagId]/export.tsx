import Link from "next/link";
import { QRCode } from "react-qrcode-logo";
import { useRouter } from "next/router";

import { AppPage } from "@src/types";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";

export const ExportTagPage: AppPage = () => {
  const router = useRouter();
  const { tagId } = router.query as { tagId: string };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-16 prose dark:prose-invert">
        <h1>Export tag</h1>
      </div>

      <QRCode
        id="qr-code-preview"
        value={`${window.location.host}/tags/${tagId}`}
        ecLevel="H"
      />

      <div className="mt-8 flex flex-row justify-end">
        <Link href={`/tags/${tagId}`}>
          <a className="btn btn-ghost">Back to tag</a>
        </Link>

        <button className="ml-4 btn btn-primary">Export</button>
      </div>
    </div>
  );
};

ExportTagPage.applyLayout = applyPrivatePageLayout;

export default ExportTagPage;
