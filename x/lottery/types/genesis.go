package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BetList:           []Bet{},
		LotteryRecordList: []LotteryRecord{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in bet
	betIndexMap := make(map[string]struct{})

	for _, elem := range gs.BetList {
		index := string(BetKey(elem.Index))
		if _, ok := betIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for bet")
		}
		betIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in lotteryRecord
	lotteryRecordIdMap := make(map[uint64]bool)
	lotteryRecordCount := gs.GetLotteryRecordCount()
	for _, elem := range gs.LotteryRecordList {
		if _, ok := lotteryRecordIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for lotteryRecord")
		}
		if elem.Id >= lotteryRecordCount {
			return fmt.Errorf("lotteryRecord id should be lower or equal than the last id")
		}
		lotteryRecordIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
