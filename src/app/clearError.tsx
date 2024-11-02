'use client';

export default function clearError() {
  return (
    <div></div>
  )
}

const consoleError = console.error;

console.error = function (...args) {
  const message = args.join(' ');

  if (
    typeof message === 'string' &&
    message.startsWith('Warning: ') &&
    !message.includes('Warning: componentWillReceiveProps has been renamed')
  ) {
    return;
  }
  consoleError.apply(console, args);
};
