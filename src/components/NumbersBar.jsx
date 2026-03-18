import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const useCounter = (target, duration, decimals, start) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const steps = 60
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += target / steps
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(decimals > 0 ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, duration, decimals, start])

  return count
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Exp', sub: '@ US Corps' },
  { value: 5, suffix: '+', label: 'Enterprise Apps', sub: 'Built & Shipped' },
  { value: 250, suffix: '+', label: 'Issues Resolved', sub: '@ Accenture' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', sub: 'Maintained', decimals: 1 },
]

const StatItem = ({ stat, start }) => {
  const count = useCounter(stat.value, 1500, stat.decimals || 0, start)
  return (
    <div className="flex flex-col items-center px-6 py-2">
      <span style={{ fontSize: '2.25rem', fontWeight: 800, color: '#00b4d8', lineHeight: 1.1 }}>
        {count}{stat.suffix}
      </span>
      <span style={{ fontSize: '0.85rem', color: '#f1f5f9', fontWeight: 600, marginTop: 4 }}>
        {stat.label}
      </span>
      <span style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 2 }}>
        {stat.sub}
      </span>
    </div>
  )
}

const NumbersBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#0a0f1a', width: '100%' }}
      className="py-10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center divide-x divide-slate-700/50">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={isInView} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default NumbersBar
