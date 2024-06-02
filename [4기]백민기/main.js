class Caluculator {
  constructor() {}

  // 메서드 만듬
  onPressNumber(number) {
    console.log(number);
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
const $previousPriview = document.querySelector(
  "[data-btn-cal-previous-preview]"
);
const $currentPriview = document.querySelector(
  "[data-btn-cal-current-preview]"
);

// 숫자 선택
$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    calc.onPressNumber($number);
  });
});

// 연산자 선택
$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    calc.onPressNumber($operation);
  });
});

const calc = new Caluculator();
