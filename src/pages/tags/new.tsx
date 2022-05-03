import FormField, { TextareaFormField } from "@src/components/forms/FormField";
import { useMustAuth } from "@src/contexts/Auth";
import { useFirestore, useFirestoreCollection } from "@src/contexts/Firebase";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import { AppPage } from "@src/types";
import classNames from "classnames";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

export const NewTagPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const methods = useForm({ mode: "all" });
  const { user, profile } = useMustAuth();
  const result = useFirestoreCollection("properties");
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "properties",
  });

  const properties = result.data || [];

  return (
    <div className="w-full max-w-3xl m-auto">
      <div className="prose dark:prose-invert">
        <h1>New tag</h1>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log("DATA SUBMITTED", data);

            const { properties, ...submittedAsIs } = data;

            const doc = await addDoc(collection(db, "tags"), {
              ...submittedAsIs,
              userId: user.uid,
              properties: properties.map(({ property }: any) => ({
                ipChainId: property.id,
                blockchainAddress: property.id,
              })),
            });

            router.push(`/tags/${doc.id}`);
          })}
        >
          <section className="mt-8 p-8 border border-primary rounded-lg">
            <FormField
              name="name"
              label="Name"
              className="max-w-sm"
              registerOptions={{
                required: { value: true, message: "A name must be provided" },
              }}
            />

            <FormField
              className="mt-4 max-w-sm"
              name="contentUrl"
              label="Link to content"
              placeholder="e.g. https://yahoo.com"
              registerOptions={{
                required: {
                  value: true,
                  message: "A link to the content must be provided",
                },
              }}
            />

            <TextareaFormField
              name="description"
              label="Description"
              className="mt-4"
              showOptionalLabel
            />

            <div className="divider"></div>

            <div className="flex flex-col">
              <h3 className="text-lg mb-4">Properties used</h3>
              <p className="text-sm text-slate-300">
                Give back to the creators that made this work possible
              </p>

              {fields.map((field: any, index) => (
                <div key={field.id} className="mt-4 form-control">
                  <a
                    href={`/properties/${field.property.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {field.property.name}
                  </a>
                  {/* {field.property.monetization.map((m: any, idx: number) => (
                    <label
                      key={m.option}
                      className="label cursor-pointer justify-start"
                    >
                      <input
                        type="radio"
                        className="radio mr-4"
                        defaultChecked={idx === 0}
                        {...register(
                          `properties.${index}.monetization.${m.option}`
                        )}
                      />
                    </label>
                  ))} */}
                </div>
              ))}

              <div className="flex flex-row justify-end">
                <label
                  htmlFor="new-derivation-modal"
                  className="mt-4 btn btn-ghost modal-button"
                >
                  <span className="material-icons">add_circle_outline</span>
                  &nbsp; Add property
                </label>

                <input
                  type="checkbox"
                  id="new-derivation-modal"
                  className="modal-toggle"
                />
                <label
                  htmlFor="new-derivation-modal"
                  className="modal cursor-pointer"
                >
                  <label htmlFor="" className="modal-box relative">
                    <label
                      htmlFor="new-derivation-modal"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>

                    <h3 className="font-bold text-lg">Choose from options</h3>

                    <ul className="flex-1 overflow-y-auto">
                      {properties.map((property) => (
                        <li
                          key={property.id}
                          className="mt-4 card card-side bg-stone-800"
                        >
                          <figure className="w-32 bg-stone-700 overflow-hidden">
                            <img
                              src={
                                property.marketplaceImageUrl ||
                                "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
                              }
                              alt={`Preview of ${property.name}`}
                            />
                          </figure>

                          <div className="card-body">
                            <h4 className="card-title">
                              {property.name}
                              {/* {prefResult.data?.list.includes(lendable.id) ? (
                                <div className="badge badge-secondary">
                                  In list
                                </div>
                              ) : null} */}
                            </h4>

                            {property.description ? (
                              <p>{property.description}</p>
                            ) : null}

                            <div className="card-actions justify-end">
                              <label
                                htmlFor="new-derivation-modal"
                                className="btn btn-primary btn-sm"
                                onClick={() => append({ property })}
                              >
                                Use
                              </label>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </label>
                </label>
              </div>
            </div>

            <div className="divider"></div>

            <h3 className="font-bold text-lg">Total cost</h3>

            <div className="flex flex-row justify-end">
              <span>
                1000 <span className="kbd kbd-xs">NEO</span>
              </span>
            </div>
          </section>

          <div className="mt-8 flex flex-row justify-end">
            <Link href="/dashboard">
              <a className="btn btn-ghost">Back to dashboard</a>
            </Link>

            <button
              className={classNames("ml-4 btn btn-primary", {
                loading: isSubmitting,
              })}
            >
              Create tag
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

NewTagPage.applyLayout = applyPrivatePageLayout;

export default NewTagPage;
