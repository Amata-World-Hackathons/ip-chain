import { Preloader } from "@src/components/progress/Preloader";
import { useFirestoreDocument } from "@src/contexts/Firebase";
import { AppPage } from "@src/types";
import { useRouter } from "next/router";

export const PropertyDetailPage: AppPage = () => {
  const router = useRouter();
  const { propertyId } = router.query as { propertyId: string };

  const result = useFirestoreDocument("properties", propertyId);

  if (result.loading) return <Preloader />;

  const data = result.data!;

  return (
    <div className="w-full max-w-3xl m-auto">
      <section className="prose dark:prose-invert">
        <h1>{data.name}</h1>

        {data.storefrontImageUrl ? (
          <img
            src={data.storefrontImageUrl}
            alt={`Image of ${data.name}`}
            className="m-auto my-8"
          />
        ) : null}

        <a href={data.contentUrl} target="_blank" rel="noreferrer nofollow">
          {data.contentUrl}
        </a>

        {data.description ? <p>{data.description}</p> : null}
      </section>

      <section className="mt-8 w-full max-w-3xl prose dark:prose-invert p-8 border border-primary rounded-lg">
        <h3>Monetization</h3>

        <p>
          One time payment of {data.oneTimeFee}{" "}
          <span className="kbd kbd-xs">NEO</span>
        </p>
      </section>

      <section className="mt-8 w-full max-w-3xl prose dark:prose-invert p-8 border border-secondary rounded-lg">
        <h3>Usage</h3>

        <p>Terms according to {data.legalTemplate}</p>
      </section>

      <div className="mt-16 flex flex-row justify-end">
        <button className="btn btn-primary">Add to list</button>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
