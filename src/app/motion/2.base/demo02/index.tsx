import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className='h-32'>
      <motion.div
        className='box w-32 h-32 rounded-2xl border-red-500 border-4 border-dashed ml-20'
        initial={{ display: 'none', opacity: 0 }}
        animate={{ display: 'block', opacity: 1 }}
      />
    </div>
  );
}
