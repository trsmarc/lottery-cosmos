build-all:
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
