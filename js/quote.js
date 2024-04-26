const quotes = [
{
    author:"키케로",
    quote:"삶이 있는 한 희망은 있다"
},
{
    author:"로망로랑",
    quote:"산다는것 그것은 치열한 전투이다"
},
{
    author:"사무엘존슨",
    quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다"
},
{
    author:"파울로 코엘료",
    quote:"언제나 현재에 집중할수 있다면 행복할것이다"
},
{
    author:"찰리 채플린",
    quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해"
},
{
    author:"엘버트 허버드",
    quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다"
},
{
    author:"켄러",
    quote:"신은 용기있는자를 결코 버리지 않는다"
},
{
    author:"로버트 엘리엇",
    quote:"피할수 없으면 즐겨라"
},
{
    author:"이드리스 샤흐",
    quote:"단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?"
},
{
    author:"엘사 맥스웰",
    quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에"
},
{
    author:"채근담",
    quote:"먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다"
},
{
    author:"마르쿠스 아우렐리우스 안토니우스",
    quote:"행복한 삶을 살기위해 필요한 것은 거의 없다."
},
{
    author:"제임스 오펜하임",
    quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다"
},
{
    author:"랄프 왈도 에머슨",
    quote:"너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다"
},
{
    author:"F.스콧 핏제랄드",
    quote:"한번의 실패와 영원한 실패를 혼동하지 마라"
},
{
    author:"괴테",
    quote:"눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다"
},
{
    author:"아인슈타인",
    quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다"
},
{
    author:"괴테",
    quote:"사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다"
},
{
    author:"베토벤",
    quote:"고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다"
},
{
    author:"생떽쥐베리",
    quote:"사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다"
},
{
    author:"솔론",
    quote:"만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로 가난한 사람이다"
},
{
    author:"호라티우스",
    quote:"그대의 하루 하루를 그대의 마지막 날이라고 생각하라"
},
{
    author:"데모스테네스",
    quote:"작은 기회로 부터 종종 위대한 업적이 시작된다"
},
{
    author:"나폴레옹",
    quote:"내 비장의 무기는 아직 손안에 있다. 그것은 희망이다"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const nowquote = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerText = nowquote.quote+"\n";
author.innerText = "-"+nowquote.author;