import { AppPage } from "@src/types";
import { useFirestoreCollection } from "@src/contexts/Firebase";
import { Preloader } from "@src/components/progress/Preloader";
import Link from "next/link";
import Head from "next/head";

export const PropertiesIndexPage: AppPage = () => {
  const result = useFirestoreCollection("tags");

  if (result.loading) return <Preloader />;

  const tags = result.data!;

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>All tags</title>
      </Head>

      <div className="prose dark:prose-invert">
        <h1>All tags</h1>
      </div>

      <div className="mt-16 flex flex-row">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="card w-96 bg-stone-800 shadow-md shadow-secondary mx-4"
          >
            <figure>
              <img
                src={
                  tag.storefrontImageUrl ||
                  "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
                }
                alt={`Storefront image for ${tag.name}`}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                <Link href={`/tags/${tag.id}`}>
                  <a className="hover:underline">{tag.name}</a>
                </Link>
              </h2>
              <p>{tag.description || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesIndexPage;
