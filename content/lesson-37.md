# લેશન - ૩૭ : લુક અપ ફંક્શનનો પરિચય અને તેના પ્રકારો

 ### Lookup Function શું છે? 
 
 Lookup Function એ Excel નું એવું ફંક્શન છે જે મોટા ડેટામાંથી આપેલ મૂલ્ય શોધીને તેની સાથે સંબંધિત માહિતી મેળવવા માટે ઉપયોગમાં લેવાય છે. મુખ્ય ઉપયોગ | નામ, ID, કોડ, નંબર વગેરે શોધીને તેની સંબંધિત માહિતી મેળવવા માટે તેનો ઉપયોગ થાય છે.  ઉદાહરણ | વિદ્યાર્થીનો Roll No. શોધીને તેનું નામ, ધોરણ અથવા માર્ક્સ મેળવવા. 

| ક્રમ | Lookup Function | માહિતી | Syntax / Formula |
|---|---|---|---|
| 1 | VLOOKUP | VLOOKUP નો ઉપયોગ ટેબલની પ્રથમ કૉલમમાં મૂલ્ય શોધીને તે જ પંક્તિની બીજી કૉલમમાંથી માહિતી મેળવવા માટે થાય છે. | `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` |
| 2 | HLOOKUP | HLOOKUP નો ઉપયોગ ટેબલની પ્રથમ પંક્તિમાં મૂલ્ય શોધીને તે જ કૉલમમાંથી નીચેની પંક્તિની માહિતી મેળવવા માટે થાય છે. | `=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])` |
| 3 | INDEX + MATCH | INDEX અને MATCH ને સાથે ઉપયોગ કરીને ચોક્કસ સ્થાન પરથી માહિતી શોધી શકાય છે. આ પદ્ધતિ VLOOKUP કરતાં વધુ લવચીક છે. | `=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))` |
| 4 | XLOOKUP | XLOOKUP એ આધુનિક Lookup Function છે. તે પંક્તિ અથવા કૉલમમાં મૂલ્ય શોધીને સંબંધિત પરિણામ આપે છે. | `=XLOOKUP(lookup_value, lookup_array, return_array)` |
| 5 | CHOOSE | CHOOSE ફંક્શન આપેલા વિકલ્પોમાંથી ક્રમાંકના આધારે ચોક્કસ મૂલ્ય પસંદ કરીને આપે છે. | `=CHOOSE(index_num, value1, value2, ...)` |
