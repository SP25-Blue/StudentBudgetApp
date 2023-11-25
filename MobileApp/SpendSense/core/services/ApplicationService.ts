import { User } from "../user/User";
import { UserInfo } from "../user/UserInfo";

export class ApplicationService {
    static activeUser: User

    static printUser(): void {
        console.log(this.activeUser)
    }

    static changeUser(username: string, password: string): void {
        const userInfo = new UserInfo("John Smith", password, 'abc@gmail.com', username);
        this.activeUser = new User(userInfo)
    }
}