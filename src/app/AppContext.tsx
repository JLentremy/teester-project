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
      firstname: "Maxime",
      lastname: "Baconnais",
      birthdate: DateTime.local(1996, 7, 23),
      address: "7 ruelle Lilly Reich",
      city: "Nantes",
      country: "",
      contact_mail: "maxime.baconnais@teester.com",
      login_mail: "maxime.baconnais@teester.com",
      phone: "+33658729674",
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
