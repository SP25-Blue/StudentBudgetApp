import { User } from "../user/User";
import { UserInfo } from "../user/UserInfo";

export class ApplicationService {
    static activeUser: User

    static printUser(): void {
        console.log(this.activeUser)
    }

    static changeUser(username: string, password: string): void {

    }
}