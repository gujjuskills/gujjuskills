# લેશન - ૧૨૩ : પાયથોન ફાઇલ સંચાલન

## File Handling in Python

Python માં File Handling નો ઉપયોગ file માં રહેલા data ને વાંચવા, લખવા, ઉમેરવા અને update કરવા માટે થાય છે.

Python માં file સાથે કામ કરવા માટે મુખ્યત્વે `open()` function નો ઉપયોગ થાય છે.

File Handling દ્વારા આપણે નીચેના કામ કરી શકીએ છીએ:

1. File Create કરવી
2. File Open કરવી
3. File માં Data Read કરવો
4. File માં Data Write કરવો
5. File માં Data Append કરવો
6. File Close કરવી

## File Handling : open()

| Mode | Description                       |
| ---- | --------------------------------- |
| `r`  | File ને read કરવા માટે            |
| `w`  | File માં data write કરવા માટે     |
| `a`  | File ના અંતમાં data add કરવા માટે |
| `x`  | નવી file create કરવા માટે         |
| `r+` | Read અને Write બંને માટે          |
| `w+` | Write અને Read બંને માટે          |
| `a+` | Append અને Read બંને માટે         |

## File Handling : With Statement

| Function       | Description                          |
| -------------- | ------------------------------------ |
| `open()`       | File ને open કરવા માટે               |
| `read()`       | File નો સંપૂર્ણ data વાંચવા માટે     |
| `readline()`   | File માંથી એક line વાંચવા માટે       |
| `readlines()`  | File માંથી બધી lines વાંચવા માટે     |
| `write()`      | File માં data લખવા માટે              |
| `writelines()` | એક કરતાં વધારે lines લખવા માટે       |
| `close()`      | File બંધ કરવા માટે                   |
| `seek()`       | File માં ચોક્કસ position પર જવા માટે |
| `tell()`       | File ની current position જાણવા માટે  |

## 4. File Handling Functions

open()
File open કરવા માટે.

read()
File નો સંપૂર્ણ data વાંચવા માટે.

readline()
એક line વાંચવા માટે.

readlines()
File ની બધી lines વાંચવા માટે.

write()
File માં data લખવા માટે.

writelines()
Multiple lines file માં લખવા માટે.

close()
File બંધ કરવા માટે.

seek()
File ની ચોક્કસ position પર જવા માટે.

tell()
File માં current position જાણવા માટે.
