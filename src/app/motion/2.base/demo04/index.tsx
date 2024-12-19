import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className='h-32'>
      <motion.div
        className='box h-32 rounded-2xl border-red-500 border-4 border-dashed ml-20'
        initial={{ width: '5px' }}
        animate={{ width: '50%' }}
      />
    </div>
  );
}
