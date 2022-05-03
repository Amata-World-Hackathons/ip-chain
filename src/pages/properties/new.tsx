import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

import { AppPage } from "@src/types";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import { useFirestore } from "@src/contexts/Firebase";
import { addDoc, collection } from "firebase/firestore";
import classNames from "classnames";
import FormField, { TextareaFormField } from "@src/components/forms/FormField";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@src/contexts/Auth";

export const NewPropertyPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const { user } = useAuth();
  const methods = useForm({
    defaultValues: {
      name: "",
      contentUrl: "",
      contentType: "text",
      textContent: "",
      marketplaceImageUrl: "",
      monetizationOption: "singlePayment",
      oneTimeFee: "",
      description: "",
      legalTemplate: "",
      subscriptionFee: "",
    },
  });
  const {
    watch,
    register,
    clearErrors,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const contentType = watch("contentType");
  const marketplaceImageUrl = watch("marketplaceImageUrl");
  const monetizationOption = watch("monetizationOption");

  useEffect(() => {
    if (contentType === "text") {
      clearErrors("contentUrl");
    } else {
      clearErrors("textContent");
    }
  }, [clearErrors, contentType]);

  useEffect(() => {
    if (monetizationOption === "singlePayment") {
      clearErrors("subscriptionFee");
    } else {
      clearErrors("oneTimeFee");
    }
  }, [clearErrors, monetizationOption]);

  return (
    <div className="w-full max-w-3xl m-auto">
      <div className="prose dark:prose-invert">
        <h1>New property</h1>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log("DATA SUBMITTED", data);
            const doc = await addDoc(collection(db, "properties"), {
              ...data,
              userId: user?.uid,
            });

            router.push(`/properties/${doc.id}`);
          })}
        >
          <section className="mt-8 p-8 border border-primary rounded-lg">
            <h3 className="text-lg">Content</h3>

            <FormField
              className="max-w-sm"
              name="name"
              label="Display name"
              registerOptions={{
                required: {
                  value: true,
                  message: "A name must be provided",
                },
              }}
            />

            <div className="mt-4 form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  value="text"
                  className="radio checked:bg-primary"
                  {...register("contentType")}
                />
                <span className="ml-3 label-text">Text</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  value="external"
                  className="radio checked:bg-primary"
                  {...register("contentType")}
                />
                <span className="ml-3 label-text">External link</span>
              </label>
            </div>

            {contentType === "text" ? (
              <TextareaFormField
                className="mt-4"
                hint="Text to be used as the content for the NFT"
                name="textContent"
                label="Text content"
                placeholder="e.g. Step 1: Add ..., Step 2: ???, Step 3: Profit"
                registerOptions={{
                  required: {
                    value: true,
                    message:
                      "The contents must be provided for embedded content",
                  },
                }}
              />
            ) : null}

            {contentType === "external" ? (
              <FormField
                className="mt-4 max-w-sm"
                hint="Link to the content hosted on an external site"
                name="contentUrl"
                label="Link to external content"
                placeholder="e.g. https://google.com"
                registerOptions={{
                  required: {
                    value: true,
                    message: "A link to the original content is required",
                  },
                }}
              />
            ) : null}

            <div className="divider"></div>

            <h3 className="text-lg mb-4">Marketplace</h3>

            <img
              src={
                marketplaceImageUrl ||
                "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
              }
              alt="Preview image for new property"
              className="m-auto my-8"
            />

            <FormField
              hint="Link to image to be used on the marketplace"
              name="marketplaceImageUrl"
              label="Marketplace image URL"
              className="mt-4 max-w-sm"
              placeholder="e.g. https://placekitten.com/g/200/300"
              showOptionalLabel
            />

            <TextareaFormField
              hint="Text to be displayed on the marketplace, used by the search"
              name="description"
              label="Marketplace description"
              placeholder="e.g. My family's secret recipe handed down for generations..."
              className="mt-4"
              showOptionalLabel
            />

            <div className="divider"></div>

            <h3 className="text-lg mb-4">Monetization</h3>

            <div className="mt-4 form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  value="singlePayment"
                  className="radio checked:bg-primary"
                  {...register("monetizationOption")}
                />
                <span className="ml-3 label-text">Single payment</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  value="recurring"
                  className="radio checked:bg-primary"
                  {...register("monetizationOption")}
                />
                <span className="ml-3 label-text">Monthly subscription</span>
              </label>
            </div>

            {monetizationOption === "singlePayment" ? (
              <FormField
                name="oneTimeFee"
                label="One-time fee"
                type="number"
                min={0}
                step="1"
                placeholder="e.g. 15"
                registerOptions={{
                  required: true,
                }}
                wrapInput={(input) => (
                  <>
                    {input}
                    <span>
                      <span className="kbd kbd-xs">NEO</span>
                    </span>
                  </>
                )}
              />
            ) : null}

            {monetizationOption === "recurring" ? (
              <FormField
                name="subscriptionFee"
                label="Subscription fee"
                type="number"
                min={0}
                step="1"
                placeholder="e.g. 3"
                registerOptions={{
                  required: true,
                }}
                wrapInput={(input) => (
                  <>
                    {input}
                    <span>
                      <span className="kbd kbd-xs">NEO</span> / month
                    </span>
                  </>
                )}
              />
            ) : null}

            <div className="divider"></div>

            <h3 className="text-lg mb-4">Usage</h3>

            <div className="mt-4 form-control">
              <label htmlFor="" className="label">
                <span className="label-text">Pick a template</span>
              </label>

              <select
                className="select w-full max-w-sm"
                {...register("legalTemplate", {
                  required: true,
                })}
              >
                <option value="" disabled>
                  Pick one
                </option>

                <option value="1">Legal template 1</option>
                <option value="2">Legal template 2</option>
              </select>
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
              Create property
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

NewPropertyPage.applyLayout = applyPrivatePageLayout;

export default NewPropertyPage;
