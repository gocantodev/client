[![prettier](https://github.com/gocantodev/app/actions/workflows/prettier.yml/badge.svg?branch=main)](https://github.com/gocantodev/app/actions/workflows/prettier.yml)
[![eslint](https://github.com/gocantodev/app/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/gocantodev/app/actions/workflows/eslint.yml)
[![build vue app](https://github.com/gocantodev/app/actions/workflows/build-vue-app.yml/badge.svg?branch=main)](https://github.com/gocantodev/app/actions/workflows/build-vue-app.yml)

### About

Hi there, I'm Gus! thank you for checking in.

This repository contains the code base that powers my personal website alongside with the one that powers its API (WIP).

### Installation

This project uses [Vitejs](https://vitejs.dev/) to handle its dependencies and compilation. So, please make sure you have
it [installed](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) in your local computer before trying to run/build this app.

### Building the app

There are many ways you can achieve this, but for your convenience, this app is shipped with a [Makefile](https://github.com/gocantodev/app/blob/main/Makefile)
that contains all the necessary commands to get you up and running.

```bash
# within your terminal
git clone git@github.com:gocantodev/app.git
cd app

make serve #local development
make build #production files

# development goodies
make format #runs prettier
make lint #runs eslint
```

> Please read [more](https://makefiletutorial.com) about make files.

## Contributing

Please, feel free to fork this repository to contribute to it by submitting a functionalities/bugs-fixes pull request to
enhance it.

## License

Please see [License File](https://github.com/gocantodev/app/blob/main/LICENSE) for more information.

## How can I thank you?

There are many ways you would be able to support my open source work. There is not a right one to choose, so the choice is yours.

Nevertheless :grinning:, I would propose the following

- :arrow_up: Follow me on [Twitter](https://twitter.com/gocanto).
- :star: Star the repository.
- :handshake: Open a pull request to fix/improve the codebase.
- :writing_hand: Open a pull request to improve the documentation.
- :coffee: Buy me a [coffee](https://github.com/sponsors/gocanto)?

> Thank you for reading this far. :blush:
