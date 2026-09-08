#
## SQL Index શું છે?

SQL Index એ ડેટાબેઝ ટેબલમાં રહેલા ડેટાને ઝડપથી શોધવા અને મેળવવા માટે ઉપયોગમાં લેવાતી એક ખાસ ડેટા સ્ટ્રક્ચર છે. Index પુસ્તકના Index જેવું કામ કરે છે. પુસ્તકમાં કોઈ વિષય શોધવા માટે આખું પુસ્તક વાંચવાની જરૂર પડતી નથી, તેવી જ રીતે Database Index નો ઉપયોગ કરીને જરૂરી રેકોર્ડ ઝડપથી શોધી શકાય છે.

Index સામાન્ય રીતે ટેબલના એક અથવા વધુ કૉલમ પર બનાવવામાં આવે છે. તેનો મુખ્ય હેતુ ડેટા શોધવાની પ્રક્રિયાને ઝડપી બનાવવાનો છે.

ઉદાહરણ તરીકે, જો Student નામની ટેબલમાં હજારો વિદ્યાર્થીઓના રેકોર્ડ હોય અને આપણે કોઈ ચોક્કસ વિદ્યાર્થીનું નામ શોધવું હોય, તો Name કૉલમ પર Index બનાવવાથી શોધની કામગીરી ઝડપી થઈ શકે છે.

## CREATE INDEX Statement

ટેબલમાં નવો Index બનાવવા માટે CREATE INDEX સ્ટેટમેન્ટનો ઉપયોગ થાય છે.

Syntax:

CREATE INDEX index_name
ON table_name (column_name);

અહીં:

index_name: Index નું નામ.

table_name: જે ટેબલ પર Index બનાવવાનો છે તેનું નામ.

column_name: જે કૉલમ પર Index બનાવવાનો છે તેનું નામ.

## DROP INDEX Statement

જ્યારે કોઈ Index ની જરૂર ન રહે અથવા તેને દૂર કરવો હોય ત્યારે DROP INDEX સ્ટેટમેન્ટનો ઉપયોગ થાય છે.

Syntax:

DROP INDEX index_name;

અહીં index_name એ દૂર કરવાનો Index છે.
 
## Types Of Indexes 
| Index નો પ્રકાર | માહિતી |
|---|---|
| **Single-Column Index** | માત્ર એક કૉલમ પર બનાવવામાં આવતો Index. ઉદાહરણ: `CREATE INDEX idx_name ON Student (Name);` |
| **Unique Index** | કૉલમમાં ડુપ્લિકેટ મૂલ્યો ન આવે તે માટે ઉપયોગમાં લેવાય છે. ઉદાહરણ: `CREATE UNIQUE INDEX idx_email ON Student (Email);` |
| **Composite Index** | બે અથવા વધુ કૉલમને સાથે લઈને બનાવવામાં આવતો Index. ઉદાહરણ: `CREATE INDEX idx_name_city ON Student (Name, City);` |
| **Implicit Index** | ડેટાબેઝ દ્વારા આપમેળે બનાવવામાં આવતો Index. સામાન્ય રીતે PRIMARY KEY અથવા UNIQUE constraint માટે આવા Index બની શકે છે. |
