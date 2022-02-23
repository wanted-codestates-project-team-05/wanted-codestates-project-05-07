export const newForm = {
  id: 1,
  title: "테스트 폼 1",
  fields: [
    { id: "name", type: "text", required: true, label: "이름" },
    { id: "phone", type: "phone", required: true, label: "휴대폰 번호" },
    {
      id: "address",
      type: "address",
      required: true,
      label: "배송지",
    },
    {
      id: "input_0",
      type: "select",
      label: "옵션1",
      options: ["S", "L", "XL", "XXL"],
      required: true,
    },
    {
      id: "input_1",
      type: "file",
      label: "첨부파일",
      required: false,
      description: "<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>",
    },
    {
      id: "agreement_0",
      type: "agreement",
      label: "개인정보 수집 약관 동의",
      required: true,
      contents: "<p>[개인정보 수집 및 약관 내용]</p>",
    },
  ],
};
