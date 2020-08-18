# Diakritika (SK) - Visual studio code extension

Visual studio code extension able to add/remove diacritics to selected text 

Forked from https://github.com/zemacik/vscode-diakritika-sk-extension

### How to get dictionaries

1. Download `*_cs.msgpack.gz` from [wordfreq repo](https://github.com/LuminosoInsight/wordfreq/tree/master/wordfreq/data)
2. Unpack `.msgpack` files
3. Install `msgpack2json` from [msgpack-tools](https://github.com/ludocode/msgpack-tools): `brew install https://ludocode.github.io/msgpack-tools.rb`
4. `msgpack2json -p -i small_cs.msgpack > dict_CS.json` && `msgpack2json -p -i large_cs.msgpack > dict_CS_long.json`


### Installation

1. Install Visual Studio Code
2. Launch Code
3. Ppen the command palette (press `F1`)
4. Select `Install Extension`
5. Choose the `Diakritika (SK)`
6. Reload Visual Studio Code


### How to use:

1. Select text on your editor window
2. Press F1
3. Call `Add Diacritics` command to add diacritics

or

1. Select text on your editor window
2. Press F1
3. Call `Remove Diacritics` command to remove diacritics

### Keyboard shortcuts

- `Alt+U` to Add Diacritics
- `Alt+Shift+U` to Remove Diacritics

### Change dictionary:

1. Select text on your editor window
2. Press F1
3. Call `Change Dictionary` command
4. Select from two types of dictionaries
    - Small one with about top 50 000 most used words.
    - Large one with about top 1 800 000 most used words.

Large dictionary takes about 15 seconds to load (just before the first use ). Please be patient. 

