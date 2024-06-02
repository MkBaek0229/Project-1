class Caluculator {
  $previousPriviewPrompt = "";
  $currentPriviewPrompt = "";
  previousOperation = "";
  currentOperation = "";

  constructor($previousPriview, $currentPriview) {
    this.$previousPriviewPrompt = $previousPriview;
    this.$currentPriviewPrompt = $currentPriview;
  }

  // 숫자입력
  onPressNumber(number) {
    this.$currentPriviewPrompt.textContent += number;
  }

  onPressOperation(operation) {
    this.$previousPriviewPrompt.textContent =
      this.$currentPriviewPrompt.textContent + " " + operation;
    this.$currentPriviewPrompt.textContent = "";
    //previousOperation, currentOperation 작업
  }

  onEqual() {
    // 밑에 메서드 이용해서 완성하기
    this.handlePlus();
  }
  handlePlus() {}
  handleMinus() {}
  handleMultifly() {}
  handleDivide() {}

  onReset() {
    this.$previousPriviewPrompt.textContent = "";
    this.$currentPriviewPrompt.textContent = "";
    this.previousOperation = "";
    this.currentOperation = "";
  }

  onDelete() {
    console.log("삭제");
  }
}

// 사칙연산
const $plus = document.querySelector("[data-btn-plus]");
const $minus = document.querySelector("[data-btn-minus]");
const $divide = document.querySelector("[data-btn-divide]");
const $multifly = document.querySelector("[data-btn-multifly]");
const $equal = document.querySelector("[data-btn-equal]");

// AC, DEL
const $reset = document.querySelector("[data-btn-reset]");
const $delete = document.querySelector("[data-btn-delete]");

// 숫자 및 연산
const $numbers = document.querySelectorAll("[data-btn-number]");
const $operations = document.querySelectorAll("[data-btn-operation]");

// 프롬프트
const $previousPriview = document.querySelector("[data-previous-preview]");
const $currentPriview = document.querySelector("[data-current-preview]");
const calc = new Caluculator($previousPriview, $currentPriview);

// 숫자 선택
$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    calc.onPressNumber(e.target.textContent);
  });
});

// 연산자 선택
$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    if (e.target.textContent === "+") {
      calc.onPressOperation("+");
    } else if (e.target.textContent === "-") {
      calc.onPressOperation("-");
    } else if (e.target.textContent === "*") {
      calc.onPressOperation("*");
    } else if (e.target.textContent === "÷") {
      calc.onPressOperation("÷");
    }
  });
});

//리셋, 삭제
$reset.addEventListener("click", (e) => {
  calc.onReset();
});
$delete.addEventListener("click", (e) => {
  calc.onDelete();
});
