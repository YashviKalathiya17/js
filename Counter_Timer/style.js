(i = 0), (a = 0);

start.onclick = () => {
  if (a == 0) {
    a = a + 1;
    c = setInterval(start, 100);
    function start() {
      output.innerHTML = "Output: " + i;
      i++;
    }
  }
};

pause.onclick = () => {
  if (a == 1) {
    a = a - 1;
    clearInterval(c);
  }
};

restore.onclick = () => {
  clearInterval(c);
  i = 0;
  a = 0;
  output.innerHTML = "Output: " + 0;
};
