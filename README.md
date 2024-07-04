# kiosk

## UI

### 사용자 주문 UI

- [x] 각각의 메뉴를 누르면 메뉴에 해당되는 커피를 표시(4\*4)
- [x] 왼쪽 상단엔 관리자 페이지로 이동 할 수 있는 아이콘
  - [ ] 관리자 ID, PW를 입력해서 이동(우선순위 최하위)

### 관리자 UI

- [x] 이름, 이미지, 가격, 설명, 메뉴탭 등을 넣는 Input UI
- [x] 추가 버튼으로 제품 추가

### 기능

- [x] 관리자 페이지에서 제픔을 추가하면 즉시 사용자 화면에 추가된다.
- [ ] 사용자가 커피를 선택하면 장바구니에 담긴다
- [ ] 카테고리 별로 누르면 카테고리에 해당되는 커피들이 표시된다.

## 설계

### DB

테이블 : menus

```
id int AI(AUTO_INCREMENT) PK
name varchar(255)
explain_text varchar(255)
price decimal(10,2)
tab varchar(50)
img varchar(255)
```

- img는 S3에 업로드 한 후 해당 이미지를 가져옴
