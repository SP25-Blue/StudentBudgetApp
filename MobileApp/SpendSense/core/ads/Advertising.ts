export class Advertising {

    //#region Attributes

    public name: string;

    public description: string;

    public imagePath: string;

    public url: string;

    //#endregion

    public constructor(name: string, description: string, url: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.imagePath = imagePath;
    }

    //#region Methods

    //#endregion
}