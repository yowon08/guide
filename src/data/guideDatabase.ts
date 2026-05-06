export type GuideLevel = "beginner" | "intermediate" | "advanced";

export type GuideDoc = {
  id: string;
  level: GuideLevel;
  title: string;
  subtitle: string;
  category: string;
  image?: string;
  body: string[];
};

export const levelInfo: Record<GuideLevel, { label: string; description: string }> = {
  beginner: {
    label: "입문자",
    description: "예스터데이를 처음 접한 사람을 위한 기본 안내",
  },
  intermediate: {
    label: "중급자",
    description: "캐릭터 제작과 사건 참여를 더 깊게 하고 싶은 사람",
  },
  advanced: {
    label: "고수",
    description: "세계관 핵심 설정과 대형 서사를 다루는 사람",
  },
};

export const guideDatabase: GuideDoc[] = [
  {
    id: "beginner-world",
    level: "beginner",
    title: "예스터데이 세계관이란?",
    subtitle: "처음 온 사람을 위한 가장 짧은 설명",
    category: "필수",
    image: "/guide/world.png",
    body: [
      "예스터데이는 현대판타지, 느와르, 히빌이 어우러진 포스트 아포칼립스 세계관입니다.",
      "방대한 세계관에 놀라지 마세요! 당장 모든 것을 알 필요는 없습니다.",
      "'입문자' 페이지에서는 최소한의 정보로 예스터데이를 즐길 수 있도록 안내해 드립니다!",
    ],
  },
  {
    id: "beginner-character",
    level: "beginner",
    title: "기본적인 상식",
    subtitle: "도시의 기본적인 상식",
    category: "상식",
    body: [
      "이능력 : 어느날, 갑자기 '아주 드물게' 사람들 사이에서 발현된 초능력입니다. 현재도 그 비율은 많지 않습니다!",
      "마물화 : 이능력을 너무 많이 사용하여 '임계점'을 초과할 경우, 무시무시한 괴물- 즉 마물이 되는 현상입니다!",
      "진노의 날 : 과거 갑작스럽게 폭주한 마물들로 인해 인류가 한 차례 멸망한 사건입니다.",
      "뉴샌디에이고 : 멸망한 터전에서 3명의 영웅이 모여 마물을 물리치고 다시 일으킨 도시입니다. 예스터데이의 주요 배경이죠!",
      "이니티움 : 초기 뉴샌디에이고의 반란군으로 시작한 반정부조직입니다! 현재 도시 밖에서 뉴샌디에이고를 노리고 있습니다.",
      "히어로 : 현재의 군대, 정부 등을 대체하고 있는 도시의 핵심 인물들입니다!",
      "빌런 : '이니티움'으로 대표되는 반정부 이능력자를 지칭합니다! 이니티움이 아니더라도 반정부 이능력자라면 빌런으로 간주됩니다.",
      "난민 : 뉴샌디에이고의 벽 주변에 불법으로 거주하고 있는 이들입니다. 도시는 이들을 방치하고 있으나, 사람으로 대우받지 못합니다."
    ],
  },
  {
    id: "beginner-start",
    level: "beginner",
    title: "처음 만들기 쉬운 캐릭터",
    subtitle: "뉴비 추천 스타팅 포지션",
    category: "추천",
    body: [
      "처음에는 일반 시민 출신 이능력자, 하급 기관원, 외곽 생존자, 특정 사건의 생존자 같은 유형이 좋습니다.",
      "처음부터 영주급, 기관장급, 세계관 핵심 흑막을 만들면 설정 충돌이 생기기 쉽습니다.",
      "작은 목표를 가진 캐릭터로 시작한 뒤, 이벤트를 통해 점점 세계관 중심부로 들어오는 방식이 가장 안정적입니다.",
    ],
  },
  {
    id: "intermediate-factions",
    level: "intermediate",
    title: "세력과 기관 이해하기",
    subtitle: "정보국, 치안국, 적경국 등",
    category: "세력",
    body: [
      "중급자부터는 캐릭터가 어떤 기관이나 세력과 연결되는지 생각하면 좋습니다.",
      "기관 소속 캐릭터는 개인의 욕망과 조직의 명령이 충돌할 때 서사가 강해집니다.",
      "소속이 없더라도 특정 기관을 불신하거나, 어떤 사건의 피해자이거나, 은폐된 기록과 관련되어 있다면 충분히 사건에 엮일 수 있습니다.",
    ],
  },
  {
    id: "intermediate-ability",
    level: "intermediate",
    title: "이능력 설계 기준",
    subtitle: "강함보다 역할이 먼저다",
    category: "능력",
    body: [
      "좋은 이능력은 단순히 강한 능력이 아니라 캐릭터의 성격과 서사를 드러내는 능력입니다.",
      "공격, 방어, 이동, 정보, 보조, 제약 중 어느 역할인지 먼저 정하세요.",
      "능력에는 약점, 조건, 대가, 오작동 가능성 중 하나 이상이 있는 편이 좋습니다.",
    ],
  },
  {
    id: "advanced-core",
    level: "advanced",
    title: "세계관 핵심 설정과 충돌시키기",
    subtitle: "도시, 영주, 마물화, 역사",
    category: "심화",
    body: [
      "고수 캐릭터는 세계관의 큰 구조와 직접 충돌할 수 있습니다.",
      "뉴샌디에이고 체제의 모순, 이니티움의 사상, 마물화의 윤리, 기관의 은폐 기록 같은 요소를 캐릭터 서사에 넣을 수 있습니다.",
      "다만 핵심 설정을 건드릴 때는 운영진과 조율이 필요합니다. 강한 캐릭터보다 세계관을 더 흥미롭게 만드는 캐릭터가 좋습니다.",
    ],
  },
];