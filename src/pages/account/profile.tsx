import FormField, { TextareaFormField } from "@src/components/forms/FormField";
import { useAuth, useMustAuth } from "@src/contexts/Auth";
import { useFirestore } from "@src/contexts/Firebase";
import { applyPrivatePageLayout } from "@src/layouts/PrivatePageLayout";
import { AppPage } from "@src/types";
import classNames from "classnames";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const AccountProfilePage: AppPage = () => {
  const db = useFirestore();
  const router = useRouter();
  const { user, profile } = useMustAuth();

  const methods = useForm({
    defaultValues: {
      name: profile.name,
      imageUrl: profile.imageUrl,
      bio: profile.bio,
    },
  });
  const {
    watch,
    trigger,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  useEffect(() => {
    trigger("name");
  }, [trigger]);

  const imageUrl = watch("imageUrl");

  return (
    <div className="w-full max-w-3xl m-auto">
      <div className="prose dark:prose-invert">
        <h1>Profile</h1>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log("DATA SUBMITTED", data);
            await setDoc(doc(db, "profiles", user!.uid), {
              ...profile,
              ...data,
              userId: user?.uid,
            });

            router.push("/dashboard");
          })}
        >
          <section className="mt-8 p-8 border border-primary rounded-lg">
            <FormField
              className="max-w-sm"
              hint="Name of the legal entity which will represent the account"
              name="name"
              label="Legal name"
              registerOptions={{
                required: {
                  value: true,
                  message: "A name must be provided",
                },
              }}
            />

            <img
              src={
                imageUrl ||
                "https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available"
              }
              alt="Preview image for new property"
              className="m-auto my-8"
            />

            <FormField
              name="imageUrl"
              label="Profile image URL"
              className="mt-4 max-w-sm"
              placeholder="e.g. https://placekitten.com/g/200/300"
              showOptionalLabel
            />

            <TextareaFormField
              name="bio"
              label="Profile bio"
              placeholder="e.g. Battle-tested veterans of the great NFT battleground..."
              className="mt-4"
              showOptionalLabel
            />
          </section>

          <div className="mt-8 flex flex-row justify-end">
            <Link href="/dashboard">
              <a className="btn btn-ghost">Back to dashboard</a>
            </Link>

            <button
              className={classNames("ml-4 btn btn-primary", {
                "btn-disabled": !isDirty,
                loading: isSubmitting,
              })}
            >
              Update profile
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

AccountProfilePage.applyLayout = applyPrivatePageLayout;

export default AccountProfilePage;
