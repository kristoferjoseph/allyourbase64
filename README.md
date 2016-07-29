# ALL YOUR BASE64
tiny command line utility to output a file as a base64 string to stdout

## Install
`npm i allyourbase64 -g`
__recommended as a global util__

## Usage
`allyourbase64 ./path/to/file | command`

### Simplest working example
`allyourbase64 ./path | cat`
Will output the file at that path to the terminal as a base64 encoded string
