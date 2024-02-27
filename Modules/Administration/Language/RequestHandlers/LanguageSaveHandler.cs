﻿using MyRow = MovieTutorial.Administration.LanguageRow;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;


namespace MovieTutorial.Administration;

public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}