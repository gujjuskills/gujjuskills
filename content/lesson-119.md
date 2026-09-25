# લેશન - ૧૧૯ : પાયથોન ડિક્શનરીશ

## What is Dictionary?

Dictionary એ Python માં data ને **key અને value** ના જોડી સ્વરૂપે store કરવા માટેનો data type છે.

Dictionary માં દરેક value ને મેળવવા માટે તેની corresponding key નો ઉપયોગ કરવામાં આવે છે.

Dictionary `{ }` curly brackets નો ઉપયોગ કરીને બનાવવામાં આવે છે.

### Example

```
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
```

## 2. Dictionary Methods


## Dictionary Methods

| Method | Description |
|---|---|
| `dict.keys()` | Dictionary ની બધી keys મેળવવા માટે ઉપયોગ થાય છે. |
| `dict.values()` | Dictionary ની બધી values મેળવવા માટે ઉપયોગ થાય છે. |
| `dict.items()` | Dictionary ના બધા key અને value pairs મેળવવા માટે ઉપયોગ થાય છે. |
| `dict.get(key)` | આપેલી key ની value મેળવવા માટે ઉપયોગ થાય છે. જો key ન મળે તો error આપવાને બદલે `None` આપે છે. |
| `dict.update(dict2)` | એક dictionary માં બીજી dictionary ના elements ઉમેરવા અથવા existing values update કરવા માટે ઉપયોગ થાય છે. |

## Dictionaries : Functions

| Function | Description |
|---|---|
| `cmp(dict1, dict2)` | બે dictionaries ની સરખામણી કરવા માટે ઉપયોગ થતો function છે. નોંધ: Python 3 માં `cmp()` function ઉપલબ્ધ નથી. |
| `len(dict)` | Dictionary માં રહેલા key value pairs ની સંખ્યા આપે છે. |
| `str(dict)` | Dictionary ને string representation માં convert કરે છે. |
| `type(variable)` | આપેલ variable નો data type જણાવે છે. |
