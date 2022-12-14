package types

const (
	LotteryFee          = 5
	MinimumBet          = 1
	MaximumBet          = 100
	LotteryBetThreshold = 10
)

const (
	BuyLotteryEventType     = "buy-lottery"
	BuyLotteryEventBuyer    = "buyer"
	BuyLotteryEventBetSize  = "bet-size"
	BuyLotteryEventBetFee   = "bet-fee"
	BuyLotteryEventBetIndex = "bet-index"
)

const (
	SelectLotteryWinnerEventType            = "select-lottery-winner"
	SelectLotteryWinnerEventProposer        = "proposer"
	SelectLotteryWinnerEventBetCreator      = "bet-creator"
	SelectLotteryWinnerEventBetWinner       = "bet-winner"
	SelectLotteryWinnerEventBetWinnerIndex  = "bet-winner-index"
	SelectLotteryWinnerEventBetWinnerType   = "bet-winner-type"
	SelectLotteryWinnerEventBetWinnerReward = "bet-winner-reward"
)

const (
	HighestBetWin = "highest-bet-win"
	NormalBetWin  = "normal-bet-win"
	LowestBetWin  = "lowest-bet-win"
)
