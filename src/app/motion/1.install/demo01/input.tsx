interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Input({
  value,
  children,
  set,
  min = -200,
  max = 200
}: InputProps) {
  return (
    <div className='flex space-x-4'>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <code>{children}:</code>
      <div>{value}</div>
    </div>
  );
}
