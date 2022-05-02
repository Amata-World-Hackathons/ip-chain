import { Preloader } from "@src/components/progress/Preloader";
import { useFirestoreDocument } from "@src/contexts/Firebase";
import { AppPage } from "@src/types";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const TagDetailPage: AppPage = () => {
  const router = useRouter();
  const { tagId } = router.query as { tagId: string };

  const result = useFirestoreDocument("tags", tagId);

  if (result.loading) return <Preloader />;

  const tag = result.data!;

  return (
    <div className="w-full max-w-3xl m-auto">
      <Head>
        <title>{tag.name} | Tag</title>
      </Head>

      <section className="prose dark:prose-invert">
        <h1>{tag.name}</h1>

        {tag.storefrontImageUrl ? (
          <img
            src={
              tag.storefrontImageUrl ||
              "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
            }
            alt={`Image of ${tag.name}`}
            className="m-auto my-8"
          />
        ) : null}

        <a href={tag.contentUrl} target="_blank" rel="noreferrer nofollow">
          {tag.contentUrl}
        </a>

        {tag.description ? <p>{tag.description}</p> : null}
      </section>

      <section className="mt-8 w-full max-w-3xl p-4 border border-primary rounded-lg">
        <div className="prose dark:prose-invert">
          <h3>Properties used</h3>
        </div>

        {tag.properties.length === 0 ? (
          <p>No properties were used</p>
        ) : (
          <ul>
            {tag.properties.map((property: any) => (
              <li key={property.ipChainId}>{property.blockchainAddress}</li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-16 flex flex-row justify-end">
        <Link href={`/tags/${tagId}/export`}>
          <a className="btn btn-primary">Get QR code</a>
        </Link>
      </div>
    </div>
  );
};

export default TagDetailPage;
