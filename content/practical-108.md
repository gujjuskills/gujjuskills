# પ્રેકટિકલ-૧૦૮ : ડેટ ઇન્ટિગ્રીટીના નિયમ લાગુ કરવા : MY SQL

| Topics | સામાન્ય સમજણ |
|---|---|
| **What is Integrity Constraints?** | ડેટાબેઝમાં સંગ્રહિત ડેટાની ચોકસાઈ, માન્યતા અને સુસંગતતા જાળવવા માટે લાગુ કરવામાં આવતા નિયમોને **Integrity Constraints** કહે છે. તે ખોટો અથવા અમાન્ય ડેટા દાખલ થતો અટકાવે છે. |
| **Types of Integrity Constraints?** | Integrity Constraints ના મુખ્ય પ્રકારો **Domain Constraint, Entity Constraint, Referential Constraint અને User Defined Constraint** છે. |
| **1 – Domain Constraint** | દરેક કૉલમમાં નિર્ધારિત પ્રકારનો અને માન્ય મર્યાદામાં આવેલો ડેટા જ દાખલ થઈ શકે તે સુનિશ્ચિત કરે છે. ઉદાહરણ તરીકે, ઉંમર માટે માત્ર 0 થી 100 વચ્ચેની સંખ્યા સ્વીકારવી. |
| **2 – Entity Constraint** | દરેક રેકોર્ડને અનન્ય રીતે ઓળખવા માટે **Primary Key** નો ઉપયોગ થાય છે. Primary Key ની કિંમત અનન્ય હોવી જોઈએ અને તે **NULL** હોઈ શકતી નથી. |
| **3 – Referential Constraint** | બે ટેબલ વચ્ચેના સંબંધમાં ડેટાની સુસંગતતા જાળવે છે. **Foreign Key** ની કિંમત સંબંધિત ટેબલની Primary Key સાથે મેળ ખાતી હોવી જોઈએ અથવા NULL હોઈ શકે છે. |
| **4 – User Defined Constraint** | વપરાશકર્તાની જરૂરિયાત મુજબ બનાવવામાં આવતા નિયમોને User Defined Constraints કહે છે. ઉદાહરણ તરીકે, કર્મચારીનો પગાર 10,000 કરતાં ઓછો ન હોવો જોઈએ. |
