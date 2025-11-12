'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'contact@mywebsite.com',
      href: 'mailto:contact@mywebsite.com'
    },
    {
      icon: MapPin,
      label: '位置',
      value: '我的城市，中国',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: '邮箱' }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">联系我</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            我始终对新的机会和有趣的项目感兴趣。
            让我们讨论如何合作！
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">给我发送消息</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">名字</label>
                    <Input
                      placeholder="您的名字"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">姓氏</label>
                    <Input
                      placeholder="您的姓氏"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">邮箱</label>
                  <Input
                    type="email"
                    placeholder="您的邮箱@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">主题</label>
                  <Input
                    placeholder="项目讨论"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">消息</label>
                  <Textarea
                    placeholder="告诉我关于您的项目..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3">
                  发送消息
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">让我们联系</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                我目前接受自由职业项目和全职工作机会。
                无论您有项目合作意向，还是想聊一聊技术，
                我都很乐意听取您的想法。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">关注我</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} 作品集。使用React和Tailwind CSS用心设计和开发。
          </p>
        </motion.div>
      </div>
    </section>
  )
}