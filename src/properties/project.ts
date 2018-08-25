import {Language} from './language';

export class Project {
    image: string;
    alt: string;
    title: string;
    created: Date;
    createdAt: string;
    updated: Date;
    updatedAt: string;
    description: string;
    link: string;
    languages: Language[];
    visible: boolean;
    isScrollable?: boolean;
}
