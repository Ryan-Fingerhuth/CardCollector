using CardCollector.Data;
using CardCollector.Library.Dtos;
using MediatR;
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

                await CreateOrUpdateBinderCards(dbSet, request.Set.CardsInBinder, cancellationToken);

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
                    dbSet = new Set
                    {
                        DateCreated = DateTime.Now,
                        IsActive = true,
                        SetCreatedByUserId = 1,
                    };

                    _dbContext.Sets.Add(dbSet);
                }

            dbSet.SetDescription = set.SetDescription;
            dbSet.BinderCardsPerPage = set.BinderCardsPerPage;
            dbSet.DateModified = DateTime.Now;
                
            await _dbContext.SaveChangesAsync(cancellationToken);

            return dbSet;
        }

        private async Task CreateOrUpdateSetCards(Set dbSet, List<CardDto> setCards, CancellationToken cancellationToken)
        {
            var dbSetCards = _dbContext.SetCards.Where(x => x.SetId == dbSet.Id);

            var currentDateModified = DateTime.Now;

            // update order of existing cards
            foreach (var updatedCard in setCards)
            {
                var dbSetCard = dbSetCards.FirstOrDefault(x => x.CardId == updatedCard.Id);

                var setIndex = setCards.FindIndex(x => x.Id == updatedCard.Id);

                if (dbSetCard == null)
                {
                    // create record
                    var setCard = new SetCard
                    {
                        SetId = dbSet.Id,
                        CardId = updatedCard.Id,
                        IsActive = true,
                        DateCreated = currentDateModified,
                        DateModified = currentDateModified,
                        Order = setIndex,
                        Obtained = updatedCard.CardObtained
                    };

                    _dbContext.SetCards.Add(setCard);

                    continue;
                }

                // update record to correct index value.
                dbSetCard.DateModified = currentDateModified;
                dbSetCard.Order = setIndex;
                dbSetCard.Obtained = updatedCard.CardObtained;
            }

            await _dbContext.SaveChangesAsync(cancellationToken);

            var newSetCardIds = setCards.Select(x => x.Id);
            var originalDbSetCardIds = dbSetCards.Select(x => x.CardId);

            var removedCardIds = originalDbSetCardIds.Where(x => !newSetCardIds.Contains(x)).ToList();

            foreach (var removedCardId in removedCardIds)
            {
                var dbSetCard = dbSetCards.FirstOrDefault(x => x.CardId == removedCardId);

                if (dbSetCard == null)
                {
                    continue;
                }

                dbSetCard.IsActive = false;
                dbSetCard.DateModified = currentDateModified;
            }

            await _dbContext.SaveChangesAsync(cancellationToken);
        }

        private async Task CreateOrUpdateBinderCards(Set dbSet, List<CardDto> binderCards, CancellationToken cancellationToken)
        {
            var dbBinderCards = _dbContext.BinderCards.Where(x => x.SetId == dbSet.Id);

            var currentDateModified = DateTime.Now;

            // update order of existing cards
            for (var i = 0; i < binderCards.Count; i++)
            {
                var updatedCard = binderCards[i];

                if (!updatedCard.BinderCardId.HasValue)
                {
                    // create new binder card
                    var binderCard = new BinderCard
                    {
                        SetId = dbSet.Id,
                        CardId = updatedCard.Id,
                        IsActive = true,
                        DateCreated = currentDateModified,
                        DateModified = currentDateModified,
                        Order = i,
                        Obtained = updatedCard.CardObtained
                    };

                    _dbContext.BinderCards.Add(binderCard);
                    await _dbContext.SaveChangesAsync(cancellationToken);
                    
                    updatedCard.BinderCardId = binderCard.BinderCardId;

                    continue;
                }


                var dbBinderCard = dbBinderCards.FirstOrDefault(x => x.BinderCardId == updatedCard.BinderCardId);

                if (dbBinderCard == null)
                {
                    continue;
                }

                // update record to correct index value.
                dbBinderCard.DateModified = currentDateModified;
                dbBinderCard.Order = i;
                dbBinderCard.CardId = updatedCard.Id;
                dbBinderCard.Obtained = updatedCard.CardObtained;
            }

            var newBinderCardIds = binderCards.Select(x => x.BinderCardId);
            var originalDbBinderCardIds = dbBinderCards.Select(x => x.BinderCardId);

            var removedCardIds = originalDbBinderCardIds.Where(x => !newBinderCardIds.Contains(x)).ToList();

            foreach (var removedCardId in removedCardIds)
            {
                var dbBinderCard = dbBinderCards.FirstOrDefault(x => x.BinderCardId == removedCardId);

                if (dbBinderCard == null)
                {
                    continue;
                }

                dbBinderCard.IsActive = false;
                dbBinderCard.DateModified = currentDateModified;
            }

            await _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}