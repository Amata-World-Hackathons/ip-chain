import { useAuth } from "@src/contexts/Auth";
import { useFirestore } from "@src/contexts/Firebase";
import classNames from "classnames";
import { doc, setDoc } from "firebase/firestore";
import { useCallback } from "react";

export interface AddPropertyToListButtonProps {
  propertyId: string;
}

export const AddPropertyToListButton: React.FC<
  AddPropertyToListButtonProps
> = ({ propertyId }) => {
  const db = useFirestore();
  const { user, profile, showAuthModal, refetchProfile } = useAuth();

  const onClick = useCallback(() => {
    if (!user) {
      showAuthModal!();
    } else if (profile) {
      const saved = (profile.saved || []).includes(propertyId)
        ? profile.saved.filter((a) => a !== propertyId)
        : (profile.saved || []).concat(propertyId);

      setDoc(doc(db, "profiles", user!.uid), {
        ...profile,
        saved,
      }).then(refetchProfile);
    }
  }, [showAuthModal, user, propertyId, db, profile, refetchProfile]);

  const isSaved = profile?.saved?.includes(propertyId);

  return (
    <button
      className={classNames("btn", {
        "btn-primary": !isSaved,
        "btn-secondary": isSaved,
      })}
      onClick={onClick}
    >
      {isSaved ? "Added" : "Save to list"}
    </button>
  );
};
