import { DateTime } from "luxon";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ProfileProps } from "../components/Profile/types";

type AppContextType = {
  profile: ProfileProps | undefined;
  getProfile: () => void;
};

const AppContext = React.createContext<AppContextType>({
  profile: undefined,
  getProfile: () => {
    // initially empty
  },
});

export const AppProvider: React.FunctionComponent = ({ children }) => {
  const [profile, setProfile] = useState<ProfileProps | undefined>();
  const getProfile = useCallback(() => {
    const data = {
      firstname: "Jean",
      lastname: "Neige",
      birthdate: DateTime.local(1986, 12, 26),
      address: "7 rue du Mur",
      city: "Nantes",
      country: "",
      contact_mail: "jean.neige@mail.com",
      login_mail: "jean.neige@mail.com",
      phone: "+33456789100",
    };
    setProfile(data);
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const MemoValue = useMemo(
    () => ({
      profile,
      getProfile,
    }),
    [profile, getProfile]
  );

  return (
    <AppContext.Provider value={MemoValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
