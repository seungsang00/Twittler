var DATA = [
  { user: 'NIKI', message: '야자타임 시작할까요??', created_at: '2019-01-03 12:30:20' },
  { user: 'JUNGWON', message: '레쭈고!', created_at: '2019-01-03 12:30:21' },
  { user: 'SUNOO', message: '음...? 갑자기??', created_at: '2019-01-03 12:33:20' },
  { user: 'SUNGHOON', message: '그런건 지금하면 재미없어', created_at: '2019-01-03 12:35:20' },
  { user: 'HEESEUNG', message: '절대 반대!!', created_at: '2019-01-03 12:36:15' },
  { user: 'JAKE', message: 'ㅋㅋㅋㅋ 재밌을것 같은데?', created_at: '2015-01-03 12:37:01' },
  { user: 'JAY', message: 'No', created_at: '2019-01-03 18:30:20' },
  { user: 'HEESEUNG', message: '야식으로 라면 먹을사람???', created_at: '2019-01-31 01:30:20' },
];

var randomUser = ['ingikim', 'satya', 'sundar', 'steve', 'tim', 'jeff'];
var randomMessage = [
  '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.',
  '헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.',
  '헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.',
  '모든 국민은 직업선택의 자유를 가진다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 행정권은 대통령을 수반으로 하는 정부에 속한다.',
  '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
  '국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.',
  '인간이 얼음에 고행을 따뜻한 가장 이것이다. 꽃이 곧 동력은 끝에 동산에는 그것은 거선의 별과 인생의 것이다. 구하지 착목한는 스며들어 인생의 것이다.',
  '새 가슴에 있는 만천하의 있다. 몸이 뜨거운지라, 청춘의 소리다.이것은 같으며, 피다. 설산에서 힘차게 옷을 피다. 놀이 그들의 인간의 주는 소금이라',
  '귀는 우리는 피에 무엇이 이것이다. 구하지 우리는 그들은 약동하다. 따뜻한 발휘하기 사람은 충분히 사막이다.'
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date(); // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
}

Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
  return format;
}

// Date.prototype.format(time) = function(time) {
//   let now = new Date(); // 현재 날짜 정보를 now 객체로 만듭니다.
//   let createdTime = new Date(time); // 작성날짜 정보를 인자로 받아와 작성날짜에 대한 정보를 createdTime 객체로 만듭니다
// let year = createdTime.getFullYear().toString();
//   let month = (createdTime.getMonth() + 1).toString().padStart(2, '0');
//   let date = createdTime.getDate().toString().padStart(2, '0');
//   // 트윗을 작성한 시각부터 현재까지의 시간을 계산하기 위해 날짜정보를 밀리초로 가져오는 getTime() 함수를 사용합시다.
//   let toNow = now.getTime(); // 현재 날짜 정보를 밀리초로 바꿈
//   let toCreated = createdTime.getTime(); // 작성한 날짜 정보를 밀리초로 바꿈
//   let passedTime = toNow - toCreated; // 트윗을 작성한 시점부터 현재까지 흐른 시간(밀리초로 바꿈)
//   let passedMin = Math.round(passedTime / (1000 * 60));
//   let passedHour = Math.round(passedTime / (1000 * 60 * 60));
//   let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
//   // 화면에 표시할 기준을 잡아봅시다.
//   // 1분 미만이면 '방금' // 1분 이상 1시간 미만이면 `${min}분 전` // 1시간 이상 1일 미만이면 `${hour}시간 전` // 1일 이상일 경우 `${yyyy}.${mm}.${dd}` 으로 표시해줍시다.
//   if (passedDay > 0) {
//       return `${year}.${month}.${date}`;
//   } else if (passedHour > 0) {
//       return `${passedHour}시간 전`;
//   } else if (passedMin > 0) {
//       return `${passedMin}분 전`;
//   } else {
//       return '방금';
//   }
// }