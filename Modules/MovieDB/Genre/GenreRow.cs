﻿using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

[ConnectionKey("Default"), Module("MovieDB"), TableName("Genre")]
[DisplayName("Genre"), InstanceName("Genre")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class GenreRow : Row<GenreRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Genre Id"), Identity, IdProperty]
    [LookupEditor(typeof(GenreRow), InplaceAdd = true, DialogType = "MovieDB.Genre")]
    public int? GenreId { get => fields.GenreId[this]; set => fields.GenreId[this] = value; }

    [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field GenreId;
        public StringField Name;

    }
}