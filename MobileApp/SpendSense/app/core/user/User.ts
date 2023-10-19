import { UserInfo } from "./UserInfo";

export class User {

    private information: UserInfo;

    constructor(information: UserInfo) {
        this.information = information;
    }

    public updateInfo(new_information: UserInfo): void {
        this.information = new_information
    }
}