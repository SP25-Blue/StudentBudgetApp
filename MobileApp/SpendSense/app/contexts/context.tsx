import { ReactNode, createContext, useContext, useState } from "react"
import { User } from "../../core/user/User"
import { Advertising } from "../../core/ads/advertising";

interface UserContextType {
    user: User | undefined;
    login: (userData: User) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const login = (userData: User | undefined) => {
        if (userData === undefined) {
            logout();
            return;
        }
        setUser(userData);
    };

    const logout = () => {
        setUser(undefined);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};


interface AdsContextType {
    ads: Advertising[];
    uploadAd: (ad: Advertising) => void;
    removeAd: (ad: Advertising) => void;
}

export const AdsContext = createContext<AdsContextType | null>(null);

export const AdsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ads, setAds] = useState<Advertising[]>(new Array<Advertising>());

    const uploadAd = (adData: Advertising | undefined) => {
        if (adData === undefined) {
            return;
        }
        ads?.push(adData);
    };

    const removeAd = (adData: Advertising | undefined) => {
        if (adData === undefined) {
            return;
        }
        let index = ads?.findIndex((ad) => ad !== adData);

        if (index !== undefined && index > 0)
            ads?.at(index);
    };

    return (
        <AdsContext.Provider value={{ ads, uploadAd, removeAd }}>
            {children}
        </AdsContext.Provider>
    );
};

export const useAds = (): AdsContextType => {
    const context = useContext(AdsContext);
    if (!context) {
        throw new Error('useAds must be used within a AdsProvider');
    }

    return context;
};