import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../core/user/User";

export class UserStorage {
    private static async storeUserData(key: string, value: User): Promise<void> {
        try {
            let valueJSON = JSON.stringify(value);
            await AsyncStorage.setItem(key, valueJSON);
            console.log(valueJSON);
            console.log(`[${new Date()}]\tUser data stored successfully`);
        } catch (error) {
            console.error(`[${new Date()}]\tError storing user data: ${error}`);
        }
    };

    private static async getUserData(key: string): Promise<User | undefined> {
        try {
            let valueSTRING = await AsyncStorage.getItem(key);
            if (!valueSTRING) {
                console.log(`[${new Date()}]\tUser data undefined`);
                return undefined;
            }

            let valueUSER: User = JSON.parse(valueSTRING);
            return valueUSER;

        } catch (error) {
            console.error(`[${new Date()}]\tError retriving user data: ${error}`);
        }
    };

    public static async createUser(value: User): Promise<void> {
        let key = value.username;
        if (await this.getUserData(key) === undefined)
            return await UserStorage.storeUserData(key, value);
    }

    public static async updateUser(value: User): Promise<void> {
        let key = value.username;

        if (await this.getUserData(key) !== undefined)
            return await UserStorage.storeUserData(key, value);
    }

    public static async getUser(username: string, password: string): Promise<User | undefined> {
        let key = username;

        let user = await UserStorage.getUserData(key);
        if (user?.password === password) return user;
        else return undefined;
    }
};