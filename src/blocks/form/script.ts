const inputLocation: HTMLInputElement = document.getElementById('inputLocation') as HTMLInputElement;
const inputHeight: HTMLInputElement = document.getElementById('inputHeight') as HTMLInputElement;
const inputWidth: HTMLInputElement = document.getElementById('inputWidth') as HTMLInputElement;
const balkLeft: HTMLInputElement = document.getElementById('balkLeft') as HTMLInputElement;

inputLocation?.addEventListener('input', () => {
  balkLeft.style.top = `${parseInt(inputLocation.value, 10)}%`;
});

inputHeight?.addEventListener('input', () => {
  document.documentElement.style.setProperty('--height-leg', `${inputHeight.value}px`);
});

inputWidth?.addEventListener('input', () => {
  document.documentElement.style.setProperty('--width-construction', `${inputWidth.value}px`);
});
