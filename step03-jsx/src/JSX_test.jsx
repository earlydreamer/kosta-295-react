
import './JSX_test.css';
function Jsx_test() {
    const message="Jsx문법 공부하기";
    const student={
    name:"희정",
    age:25,
    addr:"오리"
   };
    const styleCss={ //camelCase문법으로 css작성
        color:"white",
        backgroundColor:"blue"
    }
    //버튼 클릭했을때 호출될 함수
    const sayHello = ()=>{
        console.log("안녕하세요~~");
    }

    return (
        <>
        <h3 style = {{color:"red", border:"solid"}} className = "b">jsx test</h3> 
        <h3 style = {styleCss}>메시지:{message}</h3>
        {/* {student} //jsx는 오브젝트를 직접 찍을 수 없다 */}
        <h3 id="a">이름:{student.name}, 나이:{student.age}, 주소:{student.addr}</h3>
        <h3 className="b">이름:{student.name}, 나이:{student.age}, 주소:{student.addr}</h3>
        
        <button onClick={sayHello}>클릭</button>
        <button onClick={()=>{console.log("안1녕하세요~~")}}>클릭-익명</button>

        <hr/>
        {student.age >= 20 ? <h3>성인입니다.</h3> : <h3>미성년자입니다.</h3>}
        <hr/>
        {student.age >= 20 && <h3>환영합니다..</h3>        }
        null:{null}<br/>
        undefined:{undefined}<br/>
        true:{true}<br/>
        false:{false}<br/>
        
        </>
        
    )

}
export default Jsx_test; // 외부에서 컴포넌트 import 가능하도록 export
