using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardCollector.Business.Commands
{
    public class SaveCardSetCommand : IRequest<ApiResponseBase<SetDto>>
    {
        public SetDto Set { get; set; }

        public SaveCardSetCommand(SetDto set)
        {
            Set = set;
        }
    }

    public class SaveCardSetCommandHandler : IRequestHandler<SaveCardSetCommand, ApiResponseBase<SetDto>>
    {
        private readonly ApplicationDbContext _dbContext;

        public SaveCardSetCommandHandler(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponseBase<SetDto>> Handle(SaveCardSetCommand request, CancellationToken cancellationToken)
        {
            var result = new ApiResponseBase<SetDto>();
            try
            {
                var dbSet = await CreateOrUpdateSet(request.Set, cancellationToken);

                await CreateOrUpdateSetCards(dbSet, request.Set.Cards, cancellationToken);

                var updatedSetDto = dbSet.ConvertBaseToDto();
                updatedSetDto.Cards = request.Set.Cards;

                result.Result = updatedSetDto;

                return result;
            }
            catch (Exception ex)
            {
                result.Errors.Add(ex.Message);
                return result;
            }
        }

        private async Task<Set> CreateOrUpdateSet(SetDto set, CancellationToken cancellationToken)
        {
            var dbSet = _dbContext.Sets.FirstOrDefault(x => x.Id == set.Id);

            if (dbSet == null)
            {
                dbSet = new Set();
                dbSet.DateCreated = DateTime.Now;
                dbSet.IsActive = true;
                dbSet.SetCreatedByUserId = 1;

                _dbContext.Sets.Add(dbSet);
            }

            dbSet.SetDescription = set.SetDescription;
            dbSet.DateModified = DateTime.Now;

            await _dbContext.SaveChangesAsync(cancellationToken);

            return dbSet;
        }

        private async Task CreateOrUpdateSetCards(Set dbSet, List<CardDto> setCards, CancellationToken cancellationToken)
        {
            var dbSetCards = _dbContext.SetCards.Where(x => x.SetId == dbSet.Id);

            var currentDateModified = DateTime.Now;

            //update order of exisitng cards
            foreach (var updatedCard in setCards)
            {
                var dbSetCard = dbSetCards.FirstOrDefault(x => x.CardId == updatedCard.Id);

                var setIndex = setCards.FindIndex(x => x.Id == updatedCard.Id);

                if (dbSetCard == null)
                {
                    // create record
                    var setCard = new SetCard();

                    setCard.SetId = dbSet.Id;
                    setCard.CardId = updatedCard.Id;
                    setCard.IsActive = true;
                    setCard.DateCreated = currentDateModified;
                    setCard.DateModified = currentDateModified;
                    setCard.Order = setIndex;

                    _dbContext.SetCards.Add(setCard);

                    continue;
                }

                // update record to correct index value.
                dbSetCard.DateModified = currentDateModified;
                dbSetCard.Order = setIndex;
            }

            await _dbContext.SaveChangesAsync(cancellationToken);

            var newSetCardIds = setCards.Select(x => x.Id);
            var originalDbSetCardIds = dbSetCards.Select(x => x.CardId);

            var removedCardIds = originalDbSetCardIds.Where(x => !newSetCardIds.Contains(x)).ToList();

            foreach (var removedCardId in removedCardIds)
            {
                var dbSetCard = dbSetCards.FirstOrDefault(x => x.CardId == removedCardId);

                if (dbSetCard != null)
                {
                    dbSetCard.IsActive = false;
                    dbSetCard.DateModified = currentDateModified;
                }
            }

            await _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}