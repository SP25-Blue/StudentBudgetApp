import { ReactNode, createContext, useContext, useState } from "react"
import { User } from "../../core/user/User"

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