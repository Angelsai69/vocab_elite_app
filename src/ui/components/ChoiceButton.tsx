import { motion } from "framer-motion"

export default function ChoiceButton({ text, onClick }: any) {
  return (
    <motion.button
      className="card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  )
}
