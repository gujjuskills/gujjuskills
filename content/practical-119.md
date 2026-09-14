# પ્રેકટિકલ-૧૧૯ : IPV4 / IPV6 માટે IP એડ્રેસીંગ અને સબનેટ માસકિંગ પ્રેક્ટિસ કરો

![image](/images/practical-118.webp)

## IP એડ્રેસિંગ અને સબનેટ માસ્કિંગની પ્રેક્ટિસ માટે ઉદાહરણ

**ઉદ્દેશ્ય:**  
કમ્પ્યુટરમાં IPv4 IP Address અને Subnet Mask સેટ કરી નેટવર્ક કનેક્શન ચકાસવું.

**પ્રક્રિયા:**

1. Control Panel માંથી **Network and Sharing Center** ખોલો.
2. **Change Adapter Settings** પર ક્લિક કરો.
3. Network Adapter પર Right Click કરીને **Properties** પસંદ કરો.
4. **Internet Protocol Version 4 (TCP/IPv4)** પસંદ કરો.
5. **Use the following IP address** પસંદ કરો.
6. નીચેની વિગતો દાખલ કરો.

| વિગતો | મૂલ્ય |
|---|---|
| IP Address | `192.168.0.1` |
| Subnet Mask | `255.255.255.0` |
| Default Gateway | `192.168.0.254` |

7. **OK** પર ક્લિક કરીને સેટિંગ્સ સેવ કરો.
8. Command Prompt ખોલીને `ipconfig` કમાન્ડથી IP Address ચકાસો.

**નેટવર્કમાં ઈન્ટરનેટ છે કે નહીં તે ચેક કરવા Ping કઈ રીતે કરી શકાય?**


Command Prompt ખોલીને નીચેની કમાન્ડ લખો.

ping 8.8.8.8
