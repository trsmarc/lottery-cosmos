package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"lottery/x/lottery/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				BetList: []types.Bet{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				LotteryRecordList: []types.LotteryRecord{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				LotteryRecordCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated bet",
			genState: &types.GenesisState{
				BetList: []types.Bet{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated lotteryRecord",
			genState: &types.GenesisState{
				LotteryRecordList: []types.LotteryRecord{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid lotteryRecord count",
			genState: &types.GenesisState{
				LotteryRecordList: []types.LotteryRecord{
					{
						Id: 1,
					},
				},
				LotteryRecordCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
