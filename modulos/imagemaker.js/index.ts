import { TextPro } from "./src/textprome";
import { Ephoto360 } from "./src/ephoto360";
import { PhotoOxy } from "./src/photooxy";

export interface IMaker {
    success: boolean;
    imageUrl: string;
    session_id: string;
}
export interface IGenerateNewCookies {
    textpro: {
        'user-agent': string;
        'cookie': string
    },
    ephoto: {
        'user-agent': string;
        'cookie': string;
    }
}
export class Maker {
    private generateNewCookies(): IGenerateNewCookies {
        return {
            textpro: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
                'cookie': `_ga=GA1.2.1174806771.${String(Date.now()).slice(0, 10)}; _gid=GA1.2.1118436800.${String(Date.now()).slice(0, 10)}; PHPSESSID=b55cbog2pn77j0cbguaqq33ou2`
            },
            ephoto: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
                'cookie': `_gid=GA1.2.694836508.${String(Date.now()).slice(0, 10)}; __gads=ID=e77077076c5a18dc-223769e4b3cf00de:T=${String(Date.now()).slice(0, 10)}:RT=${String(Date.now()).slice(0, 10)}:S=ALNI_MZ54A8a-CdUL0GH7R1OPfiwplOIyQ; PHPSESSID=1b2hk17njmimvuim3celdji3q3; _ga=GA1.1.170505887.${String(Date.now()).slice(0, 10)}; _ga_SK0KDDQM5P=GS1.1.${String(Date.now()).slice(0, 10)}.2.1.${String(Date.now()).slice(0, 10)}.0`,
            }
        }
    }
    public async TextPro(url: string, text: string[]): Promise<IMaker> {
        return await TextPro(url, text, this.generateNewCookies())
    }
    public async Ephoto360(url: string, text: string[]): Promise<IMaker> {
        return await Ephoto360(url, text, this.generateNewCookies())
    }
    public async PhotoOxy(url: string, text: string[]): Promise<IMaker> {
        return await PhotoOxy(url, text, this.generateNewCookies())
    }
};