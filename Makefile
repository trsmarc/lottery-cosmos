.PHONY: clean
clean:
	\rm -rf build/*

build: clean
	go build -o ./build/lotteryd ./cmd/lotteryd/main.go

build-all: clean
	GOOS=linux GOARCH=amd64 go build -o ./build/lotteryd-linux-amd64 ./cmd/lotteryd/main.go
	GOOS=linux GOARCH=arm64 go build -o ./build/lotteryd-linux-arm64 ./cmd/lotteryd/main.go
	GOOS=darwin GOARCH=amd64 go build -o ./build/lotteryd-darwin-amd64 ./cmd/lotteryd/main.go
	GOOS=darwin GOARCH=arm64 go build -o ./build/lotteryd-darwin-arm64 ./cmd/lotteryd/main.go

do-checksum:
	cd build && sha256sum \
		lotteryd-linux-amd64 lotteryd-linux-arm64 \
		lotteryd-darwin-amd64 lotteryd-darwin-arm64 \
		> lottery_checksum

build-with-checksum: build-all do-checksum

mocks:
	mockgen -source=x/lottery/types/expected_keepers.go \
		-package testutil \
		-destination=testutil/mocks/expected_keepers_mock.go