# WebAssembly is Cool! (finally!)

These are the supplemental files used in the QCon SF 24 talk on WebAssembly.

# What's in here?

* `example` This is where the examples are built from. There's a remix server (web) and a node pathway. They can both be ran using `pnpm install` and then `pnpm browser` or `pnpm node` respectively.
* `go-lua` This lua interpreter is written in go and compiled to wasm. It uses [shopify-go]() under the hood
* `js-lua` This lua interpreter is written in javascript and compiled to wasm. It uses [fengari]() under the hood
* `rust-lua` This lua interpreter is written in rust and compiled to wasm. It uses [picolo]() a stackless lua implementation

PRs are welcome, as the Go and Rust implementations can always be improved. `<3`

# About

Jakob Heuser's a builder. He's currently a co-founder at Taskless (taskless.io) where he is using wasm to improve telemetry for third party services.