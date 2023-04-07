# 생각과제 💭

## 웹 최적화는 무엇일까?

웹 화면을 최대한 빠르게 표시하기 위한 주어진 조건 하의 다양한 노력들을 얘기합니다! 

## 최적화가 필요한 이유는 무엇일까?

화면 로딩 시간이 길거나 화면 전환 속도가 느린 것으로 인한 사용자의 이탈이 발생할 수 있기 때문에, 이로 인한 이탈을 방지하기 위해 웹 최적화는 필요합니다. 또 사용자의 이탈을 막게 되면 결국 트래픽을 증가시킬 수 있게 되고 이로 인해 수익률도 증가하게 될 것이기 때문에 사용자 입장 뿐만 아니라 서비스(기업)의 측면에서도 최적화는 필요합니다! 

## 이를 위해 어떤 개발을 해야 할까?

- HTML
    - DOM 트리의 자식 요소를 최대한 줄이기! (트리 깊이를 불필요하게 늘리지 말자)
    - inline 스타일 태그는 렌더링 완료 시점을 늦추기 때문에 최대한 지양하기
- CSS
    - 사용하지 않는 CSS 찾아서 모조리 제거하기 (특히 중요!! 적용되지 않는 CSS들 숨어있기 쉬움)
    - 셀렉터 최대한 간결하게 사용하기 (셀렉터가 복잡할 수록 시간 소모가 더 크다)
- 이미지
    - 이미지 스프라이트 사용하기! : 여러 이미지를 하나의 스프라이트 이미지로 묶어서 `background-position`을 통해 쪼개서 사용하는 방법
    - 아이콘 폰트 사용하기! : 아이콘으로 구성된 폰트 파일로, 벡터 이미지기 때문에 image보다 더 가벼워서 최적화에 도움된다 (색상이나 크기 등을 텍스트처럼 css로 설정할 수 있어서 편리하기도 함!)
    - JPEG, PNG 형식 대신 WebP, AVIF 포멧을 사용하면 용량을 감소시킬 수 있다!
- 이 외에 불필요한 코드를 제거하는 가장 기본적인 웹 최적화 방식을 **Tree Shaking** 이라고 부른다!

## 최적화를 위한 개발을 꼭 해야 할까?

- 반드시 해야한다고 생각합니다! 물론 처음 개발을 공부할 때엔 최적화까지 고려할 여력이 없을 수 있지만 (굴러가는 코드를 구현하는데에 급급할 때!! = 나..) 결국 개발자는 사용자를 위한 서비스를 구현해내는 것이 목적이잖아요! 향상된 사용자 경험을 제공하기 위해 기획과 디자이너의 노력들이 있다면, 개발자의 노력은 바로 이 **최적화**라고 생각합니다~~