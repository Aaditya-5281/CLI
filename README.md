# string-util

A simple CLI tool for JavaScript string utilities.

## Description

This tool provides basic string manipulation utilities via the command line. Currently, it supports splitting a string into substrings using a specified separator.

## Installation

Clone this repository and install dependencies:

```bash
npm install
```

## Usage

Run the CLI using Node.js:

```bash
node split.js split <string> [options]
```

### Options

- `--first`            Display just the first substring
- `-s, --separator <char>`  Separator character (default: `,`)

### Examples

Split a string by comma (default):

```bash
node split.js split "a,b,c,d"
# Output: [ 'a', 'b', 'c', 'd' ]
```

Split a string by dash:

```bash
node split.js split "a-b-c-d" -s "-"
# Output: [ 'a', 'b', 'c', 'd' ]
```

Display only the first substring:

```bash
node split.js split "a,b,c,d" --first
# Output: [ 'a' ]
``` 