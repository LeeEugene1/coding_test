        // function solution(str){
        //     var answer = str.indexOf("yujin");
        //     console.log(answer)
        // }
        // str = "hello world yujin";
        // solution(str)

//1 indexOf
        // function solution(seoul){
        //     var answer = seoul.indexOf("kim");
        //     return '김서방은 ' + answer +'에 있다';
        // }
        // seoul = ['hi','kim']
        // solution(seoul)

//2 without indexOf
seoul = ['hi','Kim']

function solution(seoul){
    for(var i = 0; i<seoul.length; i++){
        if( seoul[i] === 'Kim'){
            console.log('김서방은 '+ i +'에 있다.')
        }
    }
}
solution(seoul)