'use client'

import { motion } from 'framer-motion'
import cv from '../../cv_data.json'
import type { CVData } from '../types/cv'

export function EducationSection() {
  const data = cv as CVData

  const formatRange = (start: string, end: string | null) => {
    const [sy, sm] = start.split('-')
    if (!end) return `${sy}年${sm}月 - 至今`
    const [ey, em] = end.split('-')
    return `${sy}年${sm}月 - ${ey}年${em}月`
  }

  const educationItems = data.education.map((e, idx) => ({
    id: idx + 1,
    major: e.major,
    degree: e.degree,
    institution: e.institution,
    school: e.school,
    year: formatRange(e.start, e.end),
    courses: e.courses,
    awards: e.awards
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl text-white mb-6">
            教育经历
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-400 mt-6 max-w-2xl mx-auto">
            我的学习历程和学术成就
          </motion.p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 md:p-8 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 hover:border-purple-700/30"
            >
              <div className="mb-3">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <div className="text-2xl font-bold text-emerald-400">
                    {item.institution}{item.school && `, ${item.school}`}
                  </div>
                  <div className="text-gray-300 font-medium whitespace-nowrap">
                    {item.year}
                  </div>
                </div>
                <div className="text-lg font-medium text-white">
                  {item.major} {item.degree}
                </div>
              </div>
              
              {item.courses.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium uppercase tracking-wide text-gray-400 mb-2">相关课程</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, idx) => (
                      <span key={idx} className="bg-gray-700/20 text-gray-300 text-sm px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {item.awards.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-gray-400 mb-2">获奖荣誉</h4>
                  <ul className="space-y-1 text-gray-300">
                    {item.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}