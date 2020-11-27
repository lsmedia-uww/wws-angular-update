# Setup
## Windows
### NodeJS
Navigate to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and select the Windows Installer (.msi) 64-bit version of Node JS and install the program onto your computer.

Make sure that you select any options that ask if you want to "add it to your PATH". This will allow you to use the `node` command globally on your Windows machine.

If you have [chocolatey](https://chocolatey.org/install) on your machine, enter this command as an Administrator in CMD or PowerShell:
> choco install nodejs

### Yarn Package Manager
Open a CMD window or PowerShell window and install Yarn.
> npm install -g yarn

To make sure it installed correctly, type `yarn version` to check and make sure that you have the most recent version installed.

### Angular CLI
Open a new CMD or PowerShell window and use the following command to install the angular command-line interface
> yarn global add @angular/cli

### Wrangler CLI
Open a new, or use the same window to install the CLI for publishing changes to the backend that accesses the WeatherLink API
> yarn global add @cloudflare/wrangler

### Git
You can use Chocolatey or download Git from their [website](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.2/Git-2.29.2.2-64-bit.exe)
> choco install git

## macOS
### Homebrew
If you are using macOS, it is highly recommended to use a Package Manager to install some of these programs, as keeping them updated and managing versions can be tricky. Using a package manager can reduce some of these headaches.

One of the most popular package managers for macOS is called [Homebrew](https://brew.sh/).

### NodeJS
Navigate to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and select the macOS Installer and install the program onto your computer.

For Homebrew, install NodeJS by running this command in your terminal.
>brew install node

### Yarn Package Manager
Type the following command into your terminal and install Yarn.
> npm install -g yarn

To make sure it installed correctly, type `yarn version` to check and make sure that you have the most recent version installed.

### Angular CLI
In terminal, use the following command to install the angular command-line interface
> yarn global add @angular/cli

### Wrangler CLI
Open a new, or use the same window to install the CLI for publishing changes to the backend that accesses the WeatherLink API
> yarn global add @cloudflare/wrangler

### Git
Download git from their [website](https://git-scm.com/download/mac) or use brew to install Git from the command-line.
> brew install git


Congrats! you're done! now navigate back to the [README]() file to understand what to do next for running the project and understanding Angular and each peice to this project.
