﻿using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Queries
{
    public class GetSetQuery : IRequest<ApiResponseBase<SetDto>>
    {
        public int SetId { get; set; }
        public GetSetQuery(int setId)
        {
            SetId = setId;
        }
    }

    public class GetSetQueryHandler : IRequestHandler<GetSetQuery, ApiResponseBase<SetDto>>
    {
        private readonly ApplicationDbContext _dbContext;
        public GetSetQueryHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<SetDto>> Handle(GetSetQuery request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<SetDto>();
            try
            {
                var set = await _dbContext.Sets.FirstOrDefaultAsync(x => x.Id == request.SetId, cancellationToken);

                if (set == null)
                {
                    result.Errors.Add($"Set not found for Id: {request.SetId}");
                }

                var setDto = set.ConvertBaseToDto();

                var setCards = _dbContext.SetCards.Include(x => x.Card).Where(x => x.SetId == request.SetId).ToList();

                var cards = setCards.Select(x => x.Card).ToList();

                var cardDtos = new List<CardDto>();

                foreach(var card in cards)
                {
                    cardDtos.Add(card.ConvertBaseToDto());
                    card.SetCards = new List<SetCard>();
                }

                setDto.Cards = cardDtos;

                result.Result = setDto;

                return result;
            }
            catch (Exception ex)
            {
                result.Errors.Add("Error");
                return result;
            }
        }
    }
}