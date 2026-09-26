import { motion } from 'framer-motion'

const path =
  'M0 150 C40 146, 60 110, 100 112 C140 114, 160 70, 200 78 C240 86, 260 124, 300 112 C340 100, 360 56, 400 60'

export default function MetabolicSignal({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8844F" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#A8844F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="signalStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8A873" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#A8844F" />
          <stop offset="100%" stopColor="#8F6C3C" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${path} L400 200 L0 200 Z`}
        fill="url(#signalFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      />
      <motion.path
        d={path}
        stroke="url(#signalStroke)"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}
