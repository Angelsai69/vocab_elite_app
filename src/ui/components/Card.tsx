import { motion } from "framer-motion"
import { useState } from "react"

export default function Card({ word, definition }: any) {
  const [flip, setFlip] = useState(false)

  return (
    <motion.div
      className="card"
      onClick={() => setFlip(!flip)}
      whileTap={{ scale: 0.95 }}
    >
      {flip ? definition : word}
    </motion.div>
  )
}
