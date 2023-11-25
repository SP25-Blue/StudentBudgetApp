import { User } from "../user/User";
import 'react-native-get-random-values';

const { v4: uuidv4 } = require('uuid');

export class UsersDatabase {

    private static _usersDict = new Map<string, User>();
    // Users Dictionary: id -> user

    public static getUser_Id(id: string): User | undefined {
        let user = this._usersDict.get(id);
        return user;
    }


    public static getUser_UsernamePassword(username: string, password: string): User | undefined {
        for (let [id, user] of this._usersDict.entries())
            if (username === username &&
                password === password)
                return user;
        return undefined;
    }


    public static addUser(newUser: User): boolean {
        let isNewUserAdded = false

        for (let [id, user] of this._usersDict.entries())
            if (newUser.username === user.username) {
                isNewUserAdded = true;
                break;
            }

        if (isNewUserAdded === true)
            return false;
        else {
            let newId = uuidv4();   //TODO: Make sure is not repeated
            this._usersDict.set(newId, newUser)
            return true;
        }
    }   //TODO: Report errors

    public static toString(): string {
        let str = "";
        str += "User Database:\n";
        str += "\t[id]\t[user.username]\n";
        for (let [id, user] of this._usersDict.entries())
            str += ("\t" + id + "\t" + user.username + "\n");

        return str;
    }

}