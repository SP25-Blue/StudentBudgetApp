export class Advertising {

    //#region Attributes

    public name: string;

    public description: string;

    public image_path: string;

    public url_path: string;

    //#endregion

    public constructor(name: string, description: string, image_path: string, url_path: string) {
        this.name = name;
        this.description = description;
        this.image_path = image_path;
        this.url_path = url_path;
    }

    //#region Methods

    //#endregion
}