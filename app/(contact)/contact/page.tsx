'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import FirstSlide from "components/FirstSlide";
import {Clock, Instagram, Mail, MapPin, MessageCircle, Phone, Send} from "lucide-react";
import {Button} from "components/components/ui/button";

const Page = () => {
    return (
        <>
            <FirstSlide/>
            <div className="mx-auto h-full container flex justify-center items-start">
                <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.2, delay: 0.1, ease: "easeOut"}}>
                    <h2 className="text-2xl md:text-5xl font-bold mt-12 uppercase text-center ">CONTACTS</h2>
                </motion.div>
            </div>
            {/* Contact Information */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Send us a Message
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                                        <option>Select a subject</option>
                                        <option>General Inquiry</option>
                                        <option>Registration Questions</option>
                                        <option>Corporate Team Registration</option>
                                        <option>Partnership Opportunities</option>
                                        <option>Volunteer Information</option>
                                        <option>Media & Press</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Reach out to us through any of these channels.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Mail,
                                        title: "Email",
                                        content: "info@runeatdubai.com",
                                        description: "For general inquiries",
                                        color: "text-blue-600"
                                    },
                                    {
                                        icon: Phone,
                                        title: "Phone",
                                        content: "+971 50 123 4567",
                                        description: "Available Mon-Fri, 9AM-6PM",
                                        color: "text-green-600"
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Location",
                                        content: "Dubai, United Arab Emirates",
                                        description: "Event venue TBA",
                                        color: "text-purple-600"
                                    },
                                    {
                                        icon: Clock,
                                        title: "Event Date",
                                        content: "Fall 2025",
                                        description: "Exact date coming soon",
                                        color: "text-orange-600"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
                                        className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-lg`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-gray-900 dark:text-white font-medium">{item.content}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href="https://www.instagram.com/run.eat.dubai/"
                                        target="_blank"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                        className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Find answers to the most common questions about RUN & EAT Dubai
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "When will the exact event date be announced?",
                                answer: "We will announce the exact date and venue in the coming months. Follow our social media for updates!"
                            },
                            {
                                question: "How much does registration cost?",
                                answer: "Registration fees will be announced soon. Early bird discounts will be available for early registrations."
                            },
                            {
                                question: "Can I register as a corporate team?",
                                answer: "Yes! Corporate team registration is available. Contact diana@runeatdubai.com for corporate team inquiries."
                            },
                            {
                                question: "What's included in the race package?",
                                answer: "Each participant receives an official race T-shirt, exclusive medal, and partner gifts. More details coming soon!"
                            },
                            {
                                question: "Are there different distances available?",
                                answer: "Yes! We offer 5km and 10km distances for adults, plus special kids races (500m and 1km)."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Join the Race?
                        </h2>
                        <p className="text-xl mb-8 text-green-100">
                            Don't miss out on Dubai's most delicious running event
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Register Now
                            </Button>
                            <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
);
};

export default Page;