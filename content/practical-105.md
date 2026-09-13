# પ્રેકટિકલ-૧૦૫ : ઇન્સ્ટોલેશનમાં આવતી પ્રાથમિક મુશકેલીઓ અને તેનું નિવારણ : MY SQL

| ક્રમ | સમસ્યા | ઉકેલ |
|---|---|---|
| 1 | Error 1045 / Access Denied for User | MySQL માટે આપેલ Username અને Password સાચા છે કે નહીં તે તપાસો. MySQL Server ચાલુ છે કે નહીં તે પણ તપાસો. જરૂરી હોય તો Password ફરીથી સેટ કરો અને યોગ્ય User ને જરૂરી Permission આપો. |
| 2 | Fail to Install Error | અગાઉનું MySQL Installation સંપૂર્ણપણે Remove કરીને System Restart કરો. ત્યારબાદ Administrator તરીકે MySQL Installer ચલાવીને ફરીથી Installation કરો. જરૂરી Dependencies અને Storage પણ તપાસો. |
| 3 | Version Error / MySQL not Recognized | MySQL ની યોગ્ય Version Install છે કે નહીં તે તપાસો. Environment Variables માં MySQL ના `bin` Folder નો Path ઉમેરો. Command Prompt ફરીથી ખોલીને `mysql --version` દ્વારા Version ચકાસો. |
| 4 | mysql80 Issue | Windows Services માં `MySQL80` Service ચાલુ છે કે નહીં તે તપાસો. Service બંધ હોય તો Start કરો. જરૂરી હોય તો MySQL Configuration અને Port Settings તપાસીને Service Restart કરો. |
| 5 | Bad Handshake Error | MySQL Client અને Server ની Version અથવા Configuration માં અસંગતતા તપાસો. યોગ્ય Host, Port અને Authentication Method ઉપયોગમાં લો. MySQL Server Restart કરીને ફરીથી Connection કરો. |
| 6 | MySQL SERVER Error / Workbench Error | MySQL Server Running છે કે નહીં તે તપાસો અને Workbench માં યોગ્ય Hostname, Port, Username અને Password આપો. સામાન્ય રીતે Default Port `3306` હોય છે. Firewall અથવા અન્ય Service દ્વારા Port Block તો નથી ને તે પણ તપાસો. |
| 7 | No Packages Found | Internet Connection તપાસો અને MySQL Installer માં યોગ્ય Product તથા Version પસંદ કરો. Package Repository અથવા Download Location યોગ્ય છે કે નહીં તે તપાસો. જરૂર પડે તો MySQL Installer ફરીથી Download કરો. |
| 8 | .NET Framework issue | System માં જરૂરી .NET Framework Version Install અથવા Update કરો. Windows Update ચલાવો અને System Restart કરો. ત્યારબાદ MySQL Installer ફરીથી ચલાવો. |
| 9 | Too many connections Error | MySQL સાથે જોડાયેલા અનાવશ્યક Connections બંધ કરો. Application માં Database Connections યોગ્ય રીતે Close થાય છે કે નહીં તે તપાસો. જરૂર પડે તો MySQL માં `max_connections` ની યોગ્ય Value Configure કરો. |
| 10 | Any New ERROR | Error Message નો Screenshot અથવા સંપૂર્ણ Error Code નોંધો. Internet અથવા Official MySQL Documentation માં Error Code શોધો અને તેના આધારે Troubleshooting કરો. સમસ્યા ચાલુ રહે તો System Configuration અને Log Files તપાસો. |
