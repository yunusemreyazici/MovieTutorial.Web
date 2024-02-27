﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";
import { Gender } from "./Gender";

export interface PersonRow {
    PersonId?: number;
    FirstName?: string;
    LastName?: string;
    BirthDate?: string;
    BirthPlace?: string;
    Height?: number;
    FullName?: string;
    Gender?: Gender;
    PrimaryImage?: string;
    GalleryImages?: string;
}

export abstract class PersonRow {
    static readonly idProperty = 'PersonId';
    static readonly nameProperty = 'FullName';
    static readonly localTextPrefix = 'MovieDB.Person';
    static readonly lookupKey = 'MovieDB.Person';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PersonRow>('MovieDB.Person') }
    static async getLookupAsync() { return getLookupAsync<PersonRow>('MovieDB.Person') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonRow>();
}