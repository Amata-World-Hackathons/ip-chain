import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

import { AppPage } from "@src/types";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import { useFirestore } from "@src/contexts/Firebase";
import { addDoc, collection } from "firebase/firestore";
import classNames from "classnames";
import FormField from "@src/components/forms/FormField";
import { useRouter } from "next/router";

export const NewPropertyPage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const methods = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      contentUrl: "",
      oneTimeFee: "",
      description: "",
      legalTemplate: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <div className="w-full max-w-3xl m-auto">
      <div className="prose dark:prose-invert">
        <h1>New property</h1>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log("DATA SUBMITTED", data);

            const doc = await addDoc(collection(db, "properties"), data);

            router.push(`/properties/${doc.id}`);
          })}
        >
          <section className="mt-8 p-8 border border-primary rounded-lg">
            <h3 className="text-lg">Content</h3>

            <FormField
              className="max-w-sm"
              name="name"
              label="Name"
              registerOptions={{
                required: {
                  value: true,
                  message: "A name must be provided",
                },
              }}
            />

            <FormField
              className="mt-4 max-w-sm"
              name="contentUrl"
              label="Link to content"
              registerOptions={{
                required: {
                  value: true,
                  message: "A link to the original content is required",
                },
              }}
            />

            <FormField
              name="storefrontImageUrl"
              label="Storefront image URL"
              className="mt-4 max-w-sm"
              showOptionalLabel
            />

            <FormField
              name="description"
              type="textarea"
              label="Description"
              className="mt-4"
              showOptionalLabel
            />

            <div className="divider"></div>

            <h3 className="text-lg mb-4">Monetization</h3>

            <FormField
              name="oneTimeFee"
              label="One-time fee"
              type="number"
              min={0}
              step="1"
              placeholder="e.g. 100"
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
