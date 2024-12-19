import { motion } from 'framer-motion'

export default function App() {
  return (
    <motion.div
      className='box w-32 h-32 rounded-2xl border-red-500 border-4 border-dashed ml-20'
      animate={{ x: 200 }}
    />
  );
}
