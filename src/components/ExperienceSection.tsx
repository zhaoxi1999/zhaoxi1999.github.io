'use client'

import { motion } from 'framer-motion'
import cv from '../../cv_data.json'
import type { CVData } from '../types/cv'

export function ExperienceSection() {
  const data = cv as CVData

  const formatRange = (start: string, end: string | null) => {
    const [sy, sm] = start.split('-')
    if (!end) return `${sy}年${sm}月 - 至今`
    const [ey, em] = end.split('-')
    return `${sy}年${sm}月 - ${ey}年${em}月`
  }

  const experienceItems = data.experience.map((e, idx) => ({
    id: idx + 1,
    position: e.title,
    company: e.company,
    year: formatRange(e.start, e.end),
    description: `${e.department} · ${e.title}`,
    achievements: (e.achievements && e.achievements.length ? e.achievements : []).concat(e.responsibilities)
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl text-white mb-6">
            工作经历
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-400 mt-6 max-w-2xl mx-auto">
            我的职业生涯和专业成就
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              className="relative"
            >
              {/* 时间线 */}
              {index < experienceItems.length - 1 && (
                <div className="absolute left-0 md:left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2 md:translate-x-0"></div>
              )}
              
              {/* 时间点 */}
              <div className="absolute left-0 md:left-1/2 top-12 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2 md:translate-x-0 border-4 border-black"></div>
              
              <div className={`relative ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.position}</h3>
                      <p className="text-xl text-blue-400 mt-2">{item.company}</p>
                    </div>
                    <span className="text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full text-sm">{item.year}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">主要成就：</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}