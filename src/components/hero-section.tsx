import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import CountUp from './count-up'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-32">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <div></div>
                        </AnimatedGroup>
                        <div className="mx-auto max-w-none px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                                <h1 className="mt-4 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[6.00rem] font-medium">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span">
                                        {"We turn AI into your "}
                                    </TextEffect>
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.2}
                                        as="span"
                                        className="italic"
                                        style={{ fontFamily: 'var(--font-dancing-script)', fontWeight: 'normal' }}
                                        >
                                        unfair
                                    </TextEffect>
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.4}
                                        as="span">
                                        {" advantage"}
                                    </TextEffect>
                                </h1>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Altara transforms your business with in-house AI automation — cutting weeks of work into minutes, streamlining operations, and driving real revenue growth.
                                </TextEffect>

                                <form
                                    action=""
                                    className="mx-auto mt-10 max-w-sm lg:mt-12">
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                                        <input
                                            placeholder="Your mail address"
                                            className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                className="rounded-(--radius)">
                                                <span className="hidden md:block">Get Started</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-4 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-8">
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
            <section className="py-12 md:py-12">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            +<CountUp to={55} duration={2.5} separator="," />%
                        </div>
                        <p>Reduced Operational Costs</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            <CountUp to={4} duration={2.5} />x
                        </div>
                        <p>Faster Solution Deployment</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            <CountUp to={200} duration={2.5} separator="," />%
                        </div>
                        <p>Avg. ROI within first 90 days</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


