import React from 'react'
import { AcademicCapIcon, HeartIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid/index.js';

const HeroSection = () => {
    return (
        <section className="bg-[url(/images/hero-home.png)] pt-32 pb-16 w-full">
            <div className="container mx-auto px-6 relative z-20 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">Door studenten. Voor studenten.</h1>
                    <p className="text-xl mb-8">Door middel van peer support zorgen wij voor een mentaal gezonder
                        Utrecht!</p>

                    <div className="space-y-2">
                        <div className="flex items-center">
                            <UserGroupIcon class={'size-6 mr-2'}/>
                            <span>1-op-1 support</span>
                        </div>
                        <div className="flex items-center">
                            <AcademicCapIcon class={'size-6 mr-2'}/>
                            <span>Studieruimtes</span>
                        </div>
                        <div className="flex items-center">
                            <HomeIcon class={'size-6 mr-2'}/>
                            <span>Zaalverhuur</span>
                        </div>
                        <div className="flex items-center">
                            <HeartIcon class={'size-6 mr-2'}/>
                            <span>Mental health events</span>
                        </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        <button className="btn btn-primary">
                            Lees verder

                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>

                        <button className="btn btn-secondary">
                            Neem contact op!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection