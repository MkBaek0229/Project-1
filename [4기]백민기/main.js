class Calculator {
  constructor($previousPreview, $currentPreview) {
    this.$previousPreview = $previousPreview;
    this.$currentPreview = $currentPreview;
    this.previousOperation = "";
    this.currentOperation = "";
  }

  // 숫자 입력
  onPressNumber(number) {
    this.$currentPreview.textContent += number;
  }

  onPressOperation(operation) {
    if (this.$currentPreview.textContent === "") return;

    if (this.$previousPreview.textContent !== "") {
      this.onEqual();
    }

    this.$previousPreview.textContent =
      this.$currentPreview.textContent + " " + operation;
    this.$currentPreview.textContent = "";
    this.previousOperation = operation;
  }

  onEqual() {
    let result = 0;
    const previous = parseFloat(
      this.$previousPreview.textContent.split(" ")[0]
    );
    const current = parseFloat(this.$currentPreview.textContent);

    switch (this.previousOperation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
      default:
        return;
    }

    this.$previousPreview.textContent = "";
    this.$currentPreview.textContent = result.toString();
    this.previousOperation = "";
  }

  onReset() {
    this.$previousPreview.textContent = "";
    this.$currentPreview.textContent = "";
    this.previousOperation = "";
    this.currentOperation = "";
  }

  onDelete() {
    this.$currentPreview.textContent = this.$currentPreview.textContent.slice(
      0,
      -1
    );
  }
}

// 사칙연산
const $plus = document.querySelector("[data-btn-plus]");
const $minus = document.querySelector("[data-btn-minus]");
const $divide = document.querySelector("[data-btn-divide]");
const $multiply = document.querySelector("[data-btn-multiply]");
const $equal = document.querySelector("[data-btn-equal]");

// AC, DEL
const $reset = document.querySelector("[data-btn-reset]");
const $delete = document.querySelector("[data-btn-delete]");

// 숫자 및 연산
const $numbers = document.querySelectorAll("[data-btn-number]");
const $operations = document.querySelectorAll("[data-btn-operation]");

// 프롬프트
const $previousPreview = document.querySelector("[data-previous-preview]");
const $currentPreview = document.querySelector("[data-current-preview]");
const calc = new Calculator($previousPreview, $currentPreview);

// 숫자 선택
$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    calc.onPressNumber(e.target.textContent);
  });
});

// 연산자 선택
$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    const operation = e.target.textContent.trim();
    if (operation === "=") {
      calc.onEqual();
    } else {
      calc.onPressOperation(operation);
    }
  });
});

// 리셋, 삭제
$reset.addEventListener("click", () => {
  calc.onReset();
});
$delete.addEventListener("click", () => {
  calc.onDelete();
});
