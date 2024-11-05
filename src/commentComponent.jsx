import React from "react";
import quotation from './images/bg-pattern-quotation.svg'
import daniel from './images/image-daniel.jpg'
import jonathan from './images/image-jonathan.jpg'
import jeanette from './images/image-jeanette.jpg'
import patrick from './images/image-patrick.jpg'
import kira from './images/image-kira.jpg'

const Card = ({ profile, name, comment, description, bgColor, profBorder, textColor }) => {
    return (
        <div className={`${bgColor} rounded-lg pl-8 pt-5 pb-8 pr-7 relative mb-6 sm:mb-0 sm:pb-6 sm:h-full shadow-xl`}>
            <img src={quotation} className="hidden absolute top-0 right-5 sm:right-[5.1rem]"/>
            <div className="flex items-center">
                <img src={profile} className={`${profBorder} rounded-full w-8 border-solid border-2`}/>
                <div className="ml-4">
                    <p className={`${textColor} text-[13px] font-regular`}>{name}</p>
                    <p className={`${textColor} text-[11px] font-regular opacity-[50%]`}>Verified Graduate</p>
                </div>
            </div>
            <p className={`${textColor} font-medium text-[20px] leading-6 mt-4 z-[1] relative`}>{comment}</p>
            <p className={`${textColor} opacity-[60%] text-[11.1px] mt-5 leading-[1.2rem] sm:opacity-[70%]`}>{description}</p>
        </div>
    );
};

export default function CommentComponent () {
    return (
        <div className="px-7 py-20 sm:grid sm:grid-cols-4 sm:pl-[10.5rem] sm:pr-[10.5rem] sm:gap-y-[23px] sm:gap-x-9">
            <div className="first-child sm:col-start-1 sm:col-end-3 sm:order-first">
                <Card 
                    profile={daniel}
                    name="Daniel Clifford"
                    comment="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                    in the company I joined. I honestly feel I got every penny’s worth."
                    description="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                    transition and have heard some people who had an amazing experience here. I signed up 
                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                    The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
                    bgColor="bg-[#804dda]"
                    profBorder="border-[#9e7fe6]"
                    textColor='text-white'
                />
            </div>
            <div className="sm:order-2 sm:col-span-1">
                <Card 
                    profile={jonathan}
                    name="Jonathan Walters"
                    comment="The team was very supportive and kept me motivated"
                    description="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                    for a big company. This was one of the best investments I’ve made in myself. ”"
                    bgColor="bg-[#48556a]"
                    profBorder="border-[#48556a]"
                    textColor="text-white"
                />
            </div>
            <div className="sm:order-4 sm:col-span-1 sm:row-span-1">
                <Card 
                    profile={jeanette}
                    name="Jeanette Harmon"
                    comment="An overall wonderful and rewarding experience"
                    description="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                    while doing something I love. ”"
                    bgColor="bg-white"
                    profBorder="border-white"
                    textColor="text-[#273044]"
                />
            </div>
            <div className="sm:order-last col-span-2">
                <Card 
                    profile={patrick}
                    name="Patrick Abrams"
                    comment="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                    learning from their experiences was easy."
                    description="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                    gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                    junior developer. The standard is above the rest. You will get the personal attention you need from 
                    an incredible community of smart and amazing people. ”"
                    bgColor="bg-[#19212e]"
                    profBorder="border-[#9e7fe6]"
                    textColor="text-white"
                />
            </div>
            <div className="sm:order-3 sm:row-span-2">
                <Card 
                    profile={kira}
                    name="Kira Whittle"
                    comment="Such a life-changing experience. Highly recommended!"
                    description="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                    professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                    student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                    did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                    project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                    could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                    experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                    100% recommend! ”"
                    bgColor="bg-white"
                    profBorder="border-white"
                    textColor="text-[#273044]"
                />
            </div>
        </div>
    );
};