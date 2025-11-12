'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: '代码整洁',
      description: '编写可维护、可扩展且高效的代码，经得起时间的考验。'
    },
    {
      icon: Lightbulb,
      title: '创新精神',
      description: '不断探索新技术和创新解决方案，应对复杂问题。'
    },
    {
      icon: Users,
      title: '团队协作',
      description: '与团队高效合作，打造卓越的用户体验。'
    },
    {
      icon: Coffee,
      title: '专注投入',
      description: '致力于持续学习，紧跟行业发展趋势。'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">关于我</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              热衷于创造有意义的数字体验
            </h3>
            <p className="text-gray-300 leading-relaxed">
              拥有超过5年的Web开发经验，我有幸与初创公司和知名企业合作，将他们的数字愿景变为现实。我的旅程始于对网站工作原理的好奇，并逐渐演变为对创建流畅、高性能应用程序的热情。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我专注于React、Node.js和现代JavaScript框架，但我始终渴望学习新技术，帮助我构建更好的解决方案。当我不编程时，你会发现我在为开源项目做贡献、撰写技术文章或探索Web技术的最新发展。
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['问题解决者', '团队合作者', '快速学习者', '注重细节'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}