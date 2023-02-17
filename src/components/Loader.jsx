import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Loader = () => {

  const count = useMotionValue(0)
const rounded = useTransform(count, latest => Math.round(latest))

useEffect(() => {
  const controls = animate(count, 100)

  return controls.stop
}, [])


  return (
    <motion.div>{rounded}</motion.div>
  )
}

export default Loader