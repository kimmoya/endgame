// Calculator 클래스 생성 후 인스턴스 생성
//constructor 메서드는 class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드입니다.

class Calculator {
    constructor(inputArea) { 
        this.inputArea = inputArea
        this.operatorCheck = true
        // this.operatorChange = 0;
        this.allClear()
    }
    //숫자를 추가해주기 위한 곳
    addNumber(number){
        this.inputAreaContent += number
        this.operatorCheck = false
        // this.operatorchange = 0;
    }
    addOperator(operator){
        // this.operatorchange++;
        if (this.operatorCheck) return false
        this.inputAreaContent += operator
        this.operatorCheck = true
        if(this.inputAreaContent === operator){
            oper = this.inputAreaContent
            this.inputAreaContent = ''
        }
    }
    addZero(zero){
        if (this.inputAreaContent[0] === '0'){
            this.inputAreaContent = '0'
            console.log('error')
        }else{
            this.inputAreaContent += zero
        }
    }
    backKey(){
        this.inputArea.value = this.inputAreaContent.substring(0, inputArea.value.length-1)
        this.inputAreaContent = this.inputArea.value
        console.log(this.inputArea.value)
        console.log(this.inputAreaContent)
    }

    updateDisplay() {
        this.inputArea.value = this.inputAreaContent
    }
    allClear(){
        this.inputAreaContent = ''
        this.inputArea.value = 0
    }
    firstNumber(){
        temp = this.inputArea.value
        this.inputAreaContent = ''
        this.inputArea.value = null
    }
    secondNumber(){
        temp2 = this.inputArea.value
        this.inputAreaContent = ''
        this.inputArea.value = null
        console.log(temp2, this.inputArea.value)
    }

    finishEqu(fnish) {
        if(oper){
            if(oper === '+'){
                fnish = Number(temp) + Number(temp2)
                this.inputArea.value = fnish
            }else if(oper === '-'){
                fnish = Number(temp) - Number(temp2)
                this.inputArea.value = fnish
            }else if(oper === '*'){
                fnish = Number(temp) * Number(temp2)
                this.inputArea.value = fnish
            }else if(oper === '/'){
                fnish = Number(temp) / Number(temp2)
                this.inputArea.value = fnish
            }
        }
    }
}

const buttons = document.querySelectorAll('button')
const inputArea = document.querySelector('input')
const resultArea = document.querySelector('result')

const calculator = new Calculator(inputArea)

let temp;
let temp2;
let oper;
let finish;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.dataset.type === 'operator') {
            if(inputArea.value){
            calculator.firstNumber()
            console.log(temp)
            calculator.addOperator(button.innerText)
            // calculator.updateDisplay()
            console.log(oper)
            }            
        }else if(button.dataset.type === 'ac'){
            calculator.allClear()
            console.log('AC')
        }else if(button.dataset.type === 'zeroo'){
            calculator.addZero(button.innerText)
            calculator.updateDisplay()
            console.log('zero')
        }else if(button.dataset.type === 'back-key'){
            calculator.backKey()
            console.log('back')
        }else if(button.dataset.type === 'equ'){
            calculator.secondNumber()
            console.log(temp, oper, temp2)
            calculator.finishEqu()
        }
        else {
            calculator.addNumber(button.innerText)
            calculator.updateDisplay()
            console.log()
        }
    })
})



// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         switch (button.dataset.type) {
//             case 'operator':
//                 if (calculator.addOperator(button.innerText)) {
//                     calculator.updateDisplay()
//                 } 
//                 console.log('operator')
//                 break
//             case 'ac':
//                 calculator.allClear()
//                 console.log('ac')
//                 break
//             case 'equ':
//                 console.log('equals')
//                 break
//             case 'back-key':
//                 console.log('back-key')
//                 break
//             case 'zero':
//                 console.log('zero')
//                 break
//             default:
//                 calculator.addNumber(button.innerText)
//                 calculator.updateDisplay()
//                 console.log('number')
//                 break
//         }
//     })      
// })


        // if (this.operatorCheck){
        //     this.inputArea.value = this.inputAreaContent.substring(0, inputArea.value.length-1)
        //     this.inputAreaContent = this.inputArea.value
        //     // this.inputArea.value += this.inputArea
        //     console.log(this.inputArea)
        //     console.log(this.inputAreaContent)
        // }
        // if(this.inputAreaContent[0] == 'operator') {
        //     console.log('bb')
        // } 


            // changeOperator(){
    //     if (this.operatorchange >= 2){
    //         const a = this.inputAreaContent.substr(inputArea.value.length - 1);
      
    //         if(/\d/.test(a) === false) {
    //           this.inputAreaContent = this.inputAreaContent.substr(0, inputArea.value.length-1)+ operator
    //         }
    //     }
    //   }
//     changeOperator(operator){
//         const a = this.inputAreaContent.substr(inputArea.value.length - 1);
  
//         if(/\d/.test(a) === false) {
//           this.inputAreaContent = this.inputAreaContent.substr(0, inputArea.value.length-1)+ operator
//         }
//   }

        // this.operatorCheck = true
    
    // OperatorPlus(plus){

    // }