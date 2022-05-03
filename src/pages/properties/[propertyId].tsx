import { AddPropertyToListButton } from "@src/components/AddPropertyToListButton";
import { Preloader } from "@src/components/progress/Preloader";
import { useFirestoreDocument } from "@src/contexts/Firebase";
import { AppPage } from "@src/types";
import Head from "next/head";
import { useRouter } from "next/router";

export const PropertyDetailPage: AppPage = () => {
  const router = useRouter();
  const { propertyId } = router.query as { propertyId: string };

  const result = useFirestoreDocument("properties", propertyId);

  if (result.loading) return <Preloader />;

  const property = result.data!;

  return (
    <div className="w-full max-w-3xl m-auto">
      <Head>
        <title>{property.name} | Property</title>
      </Head>

      <section className="prose dark:prose-invert">
        <h1>{property.name}</h1>

        {property.marketplaceImageUrl ? (
          <img
            src={property.marketplaceImageUrl}
            alt={`Image of ${property.name}`}
            className="m-auto my-8"
          />
        ) : null}

        <a href={property.contentUrl} target="_blank" rel="noreferrer nofollow">
          {property.contentUrl}
        </a>

        {property.description ? <p>{property.description}</p> : null}
      </section>

      <section className="mt-8 w-full max-w-3xl prose dark:prose-invert p-8 border border-primary rounded-lg">
        <h3>Monetization</h3>

        {property.monetizationOption === "singlePayment" ? (
          <p>
            One time payment of <code>{property.oneTimeFee}</code>
            <span className="kbd kbd-xs">NEO</span>
          </p>
        ) : (
          <p>
            Monthly fee of <code>{property.subscriptionFee}</code>
            <span className="kbd kbd-xs">NEO</span>
          </p>
        )}
      </section>

      <section className="mt-8 w-full max-w-3xl prose dark:prose-invert p-8 border border-secondary rounded-lg">
        <h3>Usage</h3>

        <p>Terms according to {property.legalTemplate}</p>
      </section>

      <div className="mt-16 flex flex-row justify-end">
        <AddPropertyToListButton propertyId={property.id} />
      </div>
    </div>
  );
};

export default PropertyDetailPage;
