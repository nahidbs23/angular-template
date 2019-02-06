import * as uuid from 'uuid';
import * as sha1 from 'sha1';

const Empty_Guid = '00000000-0000-0000-0000-000000000000';
const Guid_regex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/;

export class Guid {
    public static NewGuid(): string {
        return uuid.v4();
    }

    public static EmptyGuid(): string {
        return Empty_Guid;
    }

    public static IsGuid(guid: string): boolean {
        if (!guid) {
            return false;
        } else {
            return Guid_regex.test(guid);
        }
    }

    public static FromString(text: string): string {
        if (!text) {
            throw new Error('Text is missing');
        }

        const hash = sha1(text);
        // tslint:disable-next-line:max-line-length
        return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-4${hash.substring(13, 16)}-8${hash.substring(17, 20)}-${hash.substring(20, 32)}`;
    }
}
