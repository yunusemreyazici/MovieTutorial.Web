﻿using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

[ConnectionKey("Default"), Module("MovieDB"), TableName("MovieCast")]
[DisplayName("Movie Cast"), InstanceName("Movie Cast")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class MovieCastRow : Row<MovieCastRow.RowFields>, IIdRow, INameRow
{
    const string jMovie = nameof(jMovie);
    const string jPerson = nameof(jPerson);



    [DisplayName("Movie Cast Id"), Identity, IdProperty]
    public int? MovieCastId { get => fields.MovieCastId[this]; set => fields.MovieCastId[this] = value; }

    [DisplayName("Movie"), Column("MovieID"), NotNull, ForeignKey(typeof(MovieRow)), LeftJoin(jMovie), TextualField(nameof(MovieTitle))]
    [ServiceLookupEditor(typeof(MovieRow), Service = "MovieDB/Movie/List")]
    public int? MovieId { get => fields.MovieId[this]; set => fields.MovieId[this] = value; }

    //[DisplayName("Person"), NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), TextualField(nameof(PersonFirstName))]
    //[ServiceLookupEditor(typeof(PersonRow), Service = "MovieDB/Person/List")]
    //public int? PersonId { get => fields.PersonId[this]; set => fields.PersonId[this] = value; }

    [DisplayName("Character"), Size(50), QuickSearch, NameProperty]
    public string Character { get => fields.Character[this]; set => fields.Character[this] = value; }

    [DisplayName("Movie Title"), Origin(jMovie, nameof(MovieRow.Title))]
    public string MovieTitle { get => fields.MovieTitle[this]; set => fields.MovieTitle[this] = value; }

    [DisplayName("Person First Name"), Origin(jPerson, nameof(PersonRow.FirstName))]
    public string PersonFirstName { get => fields.PersonFirstName[this]; set => fields.PersonFirstName[this] = value; }

    [DisplayName("Actor/Actress"), NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), TextualField(nameof(PersonFullName))]
    [LookupEditor(typeof(PersonRow), Async = true)]
    public int? PersonId { get => fields.PersonId[this]; set => fields.PersonId[this] = value; }

    [DisplayName("Actor/Actress"), Origin(jPerson, nameof(PersonRow.FullName))]
    public string PersonFullName { get => fields.PersonFullName[this]; set => fields.PersonFullName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MovieCastId;
        public Int32Field MovieId;
        public Int32Field PersonId;
        public StringField Character;

        public StringField MovieTitle;
        public StringField PersonFirstName;
        public StringField PersonFullName;
    }
}