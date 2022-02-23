# 배포 사이트
https://wanted-codestates-project-05-07.vercel.app/

# Frontend WorkFlow

정상적인 사이트라면, id 값을 서버에 전달하면 해당 데이터를 응답으로 받을 수 있지만, 서버가 없는 상태에서 해당 서비스를 비슷하게 구현하기 위해 로컬에 데이터를 저장하여 만드는 방식을 채택했습니다. 

생성된 폼 목록 페이지와 입력된 데이터 목록 페이지를 하나의 최상위 컴포넌트로 두어 상태 관리가 좀 더 용이하도록 구현하였습니다. 

하위 컴포넌트인 폼 생성과 생성된 폼에 setState 함수를 props로 주어, 폼을 생성하거나 작성하면 상위 컴포넌트의 state를 변경하여 생성된 폼이나 사용자가 작성한 데이터를 조회할 수 있습니다.


# 생성된 폼 목록 페이지

폼 생성에서 만든 폼들의 목록을 보여주고 폼 생성으로 이동 할 수 있는 첫 번째 페이지입니다.

로컬에 저장되어 있는 폼 목록 데이터를 state로 선언합니다. 처음 페이지에 접근했을 때, 목록 데이터의 각 요소를 렌더링 시킵니다.

각 요소를 클릭 시 id값을 파라미터로 전달하여 다음 페이지인 생성된 폼에서 해당 데이터를 찾습니다.

# 폼 생성
## Field 추가

![addField](https://user-images.githubusercontent.com/85268135/155271181-dcb63b47-a214-4af6-9d66-e09ce335138c.gif)

필드 추가하기 버튼으로 Field 컴포넌트를 추가합니다.

## Field 제거

![closeField](https://user-images.githubusercontent.com/85268135/155271279-d79ec3fd-6da8-4309-9a86-39ce961120da.gif)

X 버튼을 클릭하여 Field 컴포넌트 제거가 가능합니다.

## Field 타입선택

![typeSelect](https://user-images.githubusercontent.com/85268135/155271475-f5c714e0-43f4-4239-a98d-ddd3453f232b.gif)

select박스를 이용하여 type 선택이 가능합니다.
선택한 type에 따라 입력창이 새로 생성됩니다.

## Field 체크박스

![checkBox](https://user-images.githubusercontent.com/85268135/155271687-16abe145-cde3-4450-95cf-b242010530ce.gif)

check박스 클릭이 가능합니다.

## Field 드롭다운 tag생성 가능

![tag](https://user-images.githubusercontent.com/85268135/155273554-c15da1cf-5e61-42b1-9b4c-6f1d3496a7c0.gif)

type이 드롭다운일 때 태그 입력창이 생성됩니다.
','키를 눌러 태그 생성이 가능합니다.

## 저장하기 클릭시 form정보 저장 후 홈으로 이동

![save](https://user-images.githubusercontent.com/85268135/155343989-b08c4dc7-cc93-44d6-b9a9-ff19b32e82d4.gif)

# 사용자 정보 폼 입력 페이지 

## 카카오 주소 검색 서비스 연동 완료
- 카카오 주소 검색서비스를 통해 주소를 검색할 수 있습니다. 
<img width="1111" alt="스크린샷 2022-02-24 오전 12 04 56" src="https://user-images.githubusercontent.com/70502670/155346205-d87c2705-0bf9-4350-bf00-9e5e8799acef.png" />

## 우편번호 입력 폼 모달/전체 화면 반응형 적용
- 조건에 맞체 모달의 크기를 반응형으로 적용합니다. 
<img width="365" alt="스크린샷 2022-02-24 오전 12 06 01" src="https://user-images.githubusercontent.com/70502670/155346411-a54a110e-b9e0-4e72-99b7-c1158417fd2a.png" />

## 제출 시 fake 네트워크 처리 연결
- 서버가 없지만 (promise, setTimeout)를 이용해 fake로 네트워크 처리를 하고 실패와 성공할 때에 따른 결과값을 출력합니다. 
<img width="693" alt="스크린샷 2022-02-24 오전 12 06 35" src="https://user-images.githubusercontent.com/70502670/155346538-0b0172c3-6de7-49c3-992a-434d46a794b4.png" />

## 제출버튼 input 값에 따라 활성화/비활성화
- input 값이 올바르지 않으면 제출 버튼은 활성화되지 않습니다, 

## 제출 버튼 로딩처리
- 제출 버튼 클릭 시 네트워크 처리에 따른 로딩처리를 구현했습니다. 

## 반응형 폼 UI
- 미디어 쿼리를 이용해 반응형으로 ui 를 만들었습니다. 

## select 박스 커스텀
- 예시와 같이 커스텀 ui로 셀렉트박스를 만들었습니다. 

## 파일 업로드 및 프로그래스바 추가
- 파일 크기에 비례하여 길이가 다른 프로그레스바 애니메이션을 만들었습니다.

## input 유효성 검사
- 예시와 같이 input 특성별 유효값 검사를 해줍니다. 
<img width="381" alt="스크린샷 2022-02-24 오전 12 08 28" src="https://user-images.githubusercontent.com/70502670/155346878-542fb738-b443-4555-960c-9e749d8b9954.png" />

## 약관 페이지 이동 

## App.js 에서 Props로 폼 질문 데이터 받아오기
- Home에서 입력된 form id 에 따라 해당 폼의 형태를 랜더링합니다. 

## App.js 에 prop로 사용자 폼 입력값 보내주기 

# 입력된 데이터 폼 페이지
- 입력된 데이터와 폼 목록을 네비게이팅 할 수 있는 헤더를 만들었습니다.
- 라우터를 사용하여 페이지 이동을 구현하였습니다.
- 입력된 데이터 목록 구현하였습니다.
- 페이지네이션 구현하였습니다.
<img width="680" alt="입력된 폼 페이지" src="https://user-images.githubusercontent.com/22316798/155348809-e3a35cd3-2184-4fed-ad7c-d2529c4af27d.png" />
