'use client'

import { motion } from 'framer-motion'

export function ExperienceSection() {
  const experienceItems = [
    {
      id: 1,
      position: '高级前端开发工程师',
      company: 'XXX科技有限公司',
      year: '2023年1月 - 至今',
      description: '负责公司核心产品的前端架构设计和开发，优化用户体验，提升性能。带领团队完成多个重要项目，引入现代化前端技术栈。',
      achievements: [
        '重构核心项目，性能提升30%',
        '设计并实施组件库，提高开发效率50%',
        '主导前端技术栈升级，从Vue 2迁移到Vue 3 + TypeScript'
      ]
    },
    {
      id: 2,
      position: '前端开发工程师',
      company: 'YYY互联网公司',
      year: '2021年7月 - 2022年12月',
      description: '参与电商平台的前端开发，实现响应式布局和交互功能。与产品和后端团队紧密合作，按时交付高质量产品。',
      achievements: [
        '负责商品详情页开发，转化率提升15%',
        '开发移动端适配方案，移动端流量增加40%',
        '实现多种支付方式的集成和优化'
      ]
    },
    {
      id: 3,
      position: 'Web开发实习生',
      company: 'ZZZ软件公司',
      year: '2021年2月 - 2021年6月',
      description: '参与公司内部系统的开发和维护，学习企业级开发流程和最佳实践。',
      achievements: [
        '完成用户管理模块的开发',
        '优化数据库查询，提高页面加载速度',
        '学习和应用React和Redux进行项目开发'
      ]
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