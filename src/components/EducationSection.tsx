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
    degree: `${e.major} ${e.degree}`,
    institution: e.institution,
    school: e.school,
    year: formatRange(e.start, e.end),
    description: `相关课程：${e.courses.join('，')}` + (e.awards.length ? `。获奖：${e.awards.join('，')}` : '')
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

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
            >
              <div className="flex flex-row justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-emerald-400">{item.institution}</h3>
                  <p className="text-xl text-white mt-2">{item.degree}</p>
                  {item.school && (
                    <p className="text-sm text-gray-400 mt-1">{item.school}</p>
                  )}
                </div>
                <span className="ml-auto text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full text-sm">{item.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}