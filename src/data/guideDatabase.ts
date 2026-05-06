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
    label: "신입",
    description: "예스터데이를 처음 접한, 맑고 깨끗한 뉴비",
  },
  intermediate: {
    label: "기본",
    description: "이전 어느정도 배웠다! 캐릭터 제작과 사건 참여를 더 깊게 하고 싶은 사람",
  },
  advanced: {
    label: "고인물",
    description: "너무나 오래 있었다! 세계관의 핵심 설정과 대형 서사를 다루는 사람",
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
      "예스터데이는 이능력자, 도시국가, 기관, 마물화, 영주와 세력 충돌이 얽힌 포스트 아포칼립스 세계관입니다.",
      "처음부터 모든 설정을 외울 필요는 없습니다. 먼저 캐릭터가 어디에서 왔고, 무엇을 원하며, 무엇을 두려워하는지만 정해도 충분합니다.",
      "중요한 것은 설정 암기가 아니라 이 세계 안에서 캐릭터가 왜 움직이는지를 만드는 것입니다.",
    ],
  },
  {
    id: "beginner-character",
    level: "beginner",
    title: "캐릭터 제작 3단계",
    subtitle: "출신, 목표, 결핍부터 정하기",
    category: "제작",
    body: [
      "1단계는 출신입니다. 뉴샌디에이고 시민, 외곽 생존자, 기관 관계자, 난민, 범죄조직 출신 등으로 시작할 수 있습니다.",
      "2단계는 목표입니다. 복수, 생존, 출세, 속죄, 가족 보호, 진실 추적처럼 단순한 목표가 좋습니다.",
      "3단계는 결핍입니다. 죄책감, 열등감, 두려움, 집착, 잃어버린 관계 같은 요소가 있으면 역극에서 움직이기 쉬워집니다.",
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