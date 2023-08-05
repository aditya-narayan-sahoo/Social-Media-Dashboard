const switchBtn = document.querySelector('.switch-mode');
const subTitle = document.querySelector('.sub-title');
const stateTxt = document.querySelector('.mode');
let flag = true;
if (flag) {
  stateTxt.textContent = 'Light Mode';
} else {
  stateTxt.textContent = 'Dark Mode';
  document.querySelector('body').classList.toggle('switcher');
  switchBtn.style.background = 'none';
  switchBtn.style.backgroundColor = 'hsl(230, 22%, 74%)';
  subTitle.style.color = 'hsl(228, 12%, 44%)';
}
switchBtn.addEventListener('click', () => {
  if (flag == 'true') {
    stateTxt.textContent = 'Dark Mode';
    document.querySelector('body').classList.toggle('light-mode');
    switchBtn.style.background = 'none';
    switchBtn.style.backgroundColor = 'hsl(230, 22%, 74%)';
    subTitle.style.color = 'hsl(228, 12%, 44%)';
    flag = 'false';

  } else {
    stateTxt.textContent = 'Light Mode';
    document.querySelector('body').classList.toggle('light-mode');
    switchBtn.style.background = `linear-gradient(94deg, hsl(210, 78%, 56%),hsl(146, 68%, 55%)`;
    subTitle.style.color = 'hsl(228, 12%, 44%)';
    flag = 'true';
  }
  return flag;
});
