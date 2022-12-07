# DOM(문서 객체 모델)

자바스크립트가 웹 문서를 동적으로 다룰 수 있도록 문서에 있는 각 요소를 객체 형태로 처리하는 것.

# DOM Tree

DOM은 웹 문서의 요소를 부모 요소와 자식 요소로 구분
웹 문서 구조를 부모/자식 관계로 표시하면 나무를 거꾸로 뒤집어 놓은 모습 -> DOM Tree

# DOM Tree Node

웹 문서의 태그는 요소 노드로 표현한다
태그가 품고 있는 텍스트는 해당 요소 노드(태그)의 자식 노드인 텍스트 노드로 표현한다.
태그의 속성은 모두 해당 요소 노드(태그)의 자식 노드인 속성노드로 표현한다.
주석은 주석 노드로 표현한다

# getElementById()

id 선택자를 사용해서 접근하는 것.
ex) <h1 id="heading">나는나는<h1>
-> <script>
    document.getElementById("heading").style.color = "red" -> h1요소에 접근해서 색상을 바꾸는것
    document.getElementById("heading").onclick = function(){
        this.style.fontSize = "5em";
    } -> h1요소에 접근해서 클릭하면 fontSize를 변경
    이런식으로 함수도 적용할 수 있다
</script>

# getElementsByClassName()

->클래스에 접근하는 것(클래스는 여러번 쓸 수 있기 때문에 s를 붙여준다)

# querySelector(), querySelectorAll()

앞서 말한 getElementById와 같은 내용이다