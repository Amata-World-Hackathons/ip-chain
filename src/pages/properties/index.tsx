import { AppPage } from "@src/types";
import { useFirestoreCollection } from "@src/contexts/Firebase";
import { Preloader } from "@src/components/progress/Preloader";
import Link from "next/link";
import Head from "next/head";

export const PropertiesIndexPage: AppPage = () => {
  const result = useFirestoreCollection("properties");

  if (result.loading) return <Preloader />;

  const properties = result.data!;

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>All tags</title>
      </Head>

      <div className="prose dark:prose-invert">
        <h1>All properties</h1>
      </div>

      <div className="mt-16 flex flex-row">
        {properties.map((property) => (
          <div
            key={property.id}
            className="card w-96 bg-stone-800 shadow-md shadow-secondary mx-4"
          >
            <figure>
              <img
                src={
                  property.storefrontImageUrl ||
                  "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
                }
                alt={`Storefront image for ${property.name}`}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                <Link href={`/properties/${property.id}`}>
                  <a className="hover:underline">{property.name}</a>
                </Link>
              </h2>
              <p>{property.description || "N/A"}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to list</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesIndexPage;
