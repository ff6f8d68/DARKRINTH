export declare namespace ISO3166 {
    interface Country {
        alpha2: string;
        alpha3: string;
        numeric: string;
        nameShort: string;
        nameLong: string;
    }
    interface Subdivision {
        code: string;
        name: string;
        localVariant: string | null;
        category: string;
        parent: string | null;
        language: string;
    }
    interface State {
        countries: Country[];
        subdivisions: Record<string, Subdivision[]>;
    }
}
