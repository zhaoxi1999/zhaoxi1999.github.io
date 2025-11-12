'use client'

import { motion } from 'framer-motion'

export function EducationSection() {
  const educationItems = [
    {
      id: 1,
      degree: '计算机科学学士',
      institution: 'XXX大学',
      year: '2017年9月 - 2021年6月',
      description: '主修计算机科学与技术，辅修软件工程。参与多个校内项目开发，获得优秀毕业生称号。'
    },
    {
      id: 2,
      degree: '高中',
      institution: 'XXX中学',
      year: '2014年9月 - 2017年6月',
      description: '理科学科，成绩优异，获得校级三好学生多次。'
    }
  ]

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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                  <p className="text-xl text-emerald-400 mt-2">{item.institution}</p>
                </div>
                <span className="text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full text-sm">{item.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}