import {Language} from './language';

export class Project {
    image: string;
    alt: string;
    title: string;
    created: string;
    createdAt: string;
    updated: string;
    updatedAt: string;
    description: string;
    link: string;
    languages: Language[];
    visible: boolean;
    isScrollable?: boolean;
}
