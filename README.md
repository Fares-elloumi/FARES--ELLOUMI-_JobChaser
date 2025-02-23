# FARES-ELLOUMI-JobChaser
# u07-individuell-uppgift-JobChaser
## Vecka 1:

### Hur/Varför uppkom det? Vad är centralt i React?
React utvecklades av Facebook och först introducerades 2011. Anledningen till att React skapades var för att hantera utmaningar med prestanda och användarupplevelse i webbapplikationer som blev allt mer komplexa. React var designat för att lösa problem med DOM-manipulation och erbjuda ett mer effektivt sätt att bygga användargränssnitt genom att implementera en virtuell DOM som gör att bara de förändringar som har skett i tillståndet behöver uppdateras.

### Vad är JSX?
JSX (JavaScript XML) är en syntaxförlängning för JavaScript som används i React. Det gör det möjligt att skriva HTML-liknande kod direkt i JavaScript. JSX gör det enklare att skapa UI-element och ger en mer deklarativ och intuitiv syntax för att bygga komponenter.

### Vad är en komponent?
En komponent i React är en självständig enhet som representerar en del av användargränssnittet. Komponenter kan vara antingen funktionella eller klassbaserade och de kan återanvändas i hela applikationen. En komponent kan ha sitt eget tillstånd (state) och hantera props som gör att den kan interagera med andra komponenter.

### Vad är props?
Props (property) är ett sätt att skicka data och parametrar till komponenter. De gör det möjligt för komponenter att anpassa sig baserat på yttre data. Props är oföränderliga inom komponenten och gör det möjligt för komponenterna att vara flexibla och återanvändbara.

### Vad menas med one-way-dataflow?
One-way data flow (eller unidirectional data flow) innebär att data i React flödar i en riktning: från föräldern till barnet. Detta gör det enklare att förstå flödet av data och hur tillstånd (state) i en komponent påverkar den som renderas. Det gör också debugging enklare, eftersom man alltid vet var datan kommer ifrån.

### Hur kan man använda sig av konditionell rendering i React?
Konditionell rendering i React kan uppnås med vanliga JavaScript-strukturer som if, else och ternära operatorer för att visa olika UI baserat på tillstånd eller props.

### Vad menas med en återanvändbar komponent?
En återanvändbar komponent är en komponent som kan användas på flera ställen i en applikation utan att behöva duplicera kod. Genom att göra komponenter modulära och skicka in olika props kan utvecklare skapa allsidiga UI-element som kan anpassas till olika sammanhang. 


## Vecka 2:

### Vad är state i React?
State i React är ett objekt som används för att hantera data som kan förändras inom en komponent. När state ändras, renderas komponenten om vilket gör att gränssnittet alltid reflekterar den aktuella datan. State används för att lagra information som användarinteraktioner, indata och andra dynamiska aspekter av komponenten.

### Vad är det för skillnad mellan state och props?
State är lokalt för en komponent och kan ändras internt av den komponenten. Det är komponentens eget data och används för att hantera och spåra förändringar som sker grundat på användarinteraktioner.
Props är externa och oföränderliga (read-only) data som skickas ner från en förälder till dess barnkomponenter. Props används för att passera data och funktioner mellan komponenter, vilket gör dem återanvändbara och dynamiska.
### Vad menas med en kontrollerad komponent i React?
En kontrollerad komponent i React är en form av komponent där dess värde styrs av Reacts state. Med andra ord, istället för att elementets värde hanteras av DOM, hanteras det av komponentens state. Detta gör det enkelt att fånga indata och hantera dem, samt att styra dem via state.

### Vad är en callback handler?
En callback handler i React är en funktion som skickas som en prop eller används för att hantera en händelse. Den anropas som svar på en händelse, till exempel när en användare klickar på en knapp eller skriver in text i ett fält. Callback handlers följer oftast ett konventionellt mönster där de skickas ner till barnkomponenter, vilket gör det möjligt för dem att meddela föräldern om actioner.

### Vad menas med "lifting state up"?
"Lifting state up" innebär att flytta state från en barnkomponent till en gemensam förälderkomponent när flera barnkomponenter behöver dela på samma data. Genom att ha state på föräldern kan den hantera datan och skicka ner relevanta props till barnen, vilket gör dem mer synkroniserade och enklare att underhålla.

### Vad är syftet med useEffect-hook i React?
useEffect-hooken i React används för att utföra side effects i funktionella komponenter, vilket inkluderar datahämtningar, uppdateringar av DOM, och prenumerationer. Den körs efter att komponenten har renderats och kan återställas eller uppdateras när datan ändras.

### Vad är syftet kring den s.k dependency-arrayen i useEffect?
Dependency-arrayen i useEffect definierar när effekten ska köras. Om arrayen finns på slutet av useEffect, kommer den effektiva koden att köras igen om någon av de angivna "dependencies" förändras mellan renderingarna. Om ingen dependency-array ges, körs effekten efter varje rendering (vilket kan leda till prestandaproblem). Om en tom array ges ([]), körs effekten bara en gång när komponenten mountas (motsvarande componentDidMount).

## Vecka 3:

### Vilka fördelar finns det med att använda NextJS? Nackdelar?
Fördelar: Next.js erbjuder snabbare prestanda med SSR och SSG, bättre SEO, enkel filbaserad routing och inbyggd API-hantering.
Nackdelar: Kan vara mer komplext än vanlig React, större byggstorlek och kräver en servermiljö för vissa funktioner.

### Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"?
Routing handlar om att hantera navigationen mellan olika sidor i en webbapplikation. Det gör det möjligt att ladda olika komponenter beroende på URL:en.
Vanlig React: Använder bibliotek som React Router, där utvecklare manuellt definierar routes och hanterar sidnavigering.
Next.js: Har filbaserad routing, där sidor skapas automatiskt utifrån filstrukturen i pages/-mappen, vilket gör det enklare och mer organiserat.

### Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?
Reacts ekosystem består av verktyg, bibliotek och ramverk som underlättar utvecklingen av React-applikationer. Det inkluderar allt från state management till UI-komponentbibliotek och routing.
Viktiga bibliotek i Reacts ekosystem:

-React Router – Hanterar navigering och routing i React-appar.
-Redux / Zustand / Recoil – Hanterar global state management.
-React Query – Effektiv hantering av serverdata och cachning.
-Material-UI / Tailwind CSS – UI-komponentbibliotek och styling.
-Next.js – Ramverk för server-rendering och förbättrad prestanda.

### Vad är syftet med useContext? Vilket problem med props löser den?
UseContext används för att hantera global state och dela data mellan komponenter utan att behöva skicka props genom flera nivåer i komponentträdet.
Den löser "prop drilling", vilket är när props måste skickas genom flera mellanliggande komponenter bara för att nå en djupare nivå. Med useContext kan data hämtas direkt av den komponent som behöver den, vilket gör koden renare och enklare att underhålla.

## Vecka 4:

### Vad är Redux Toolkit? 
Redux Toolkit (RTK) är ett officiellt verktyg för Redux som förenklar hantering av global state i React-applikationer. Det minskar mängden kod och förbättrar utvecklarupplevelsen genom att erbjuda enklare syntax, inbyggd "immer" för immutabla uppdateringar och asynkron hantering.

### När, i vilka situationer vill man använda Redux Toolkit?
Man vill använda Redux Toolkit när man deladar state mellan många komponenter, många komponenter behöver samma data och när appen har asynkrona flöden, såsom API-anrop.
