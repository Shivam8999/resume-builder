import React, { useState } from 'react';

function Resume({ fName, lName, email, cNumber, desc, edu, exp, skills, color = 'text-slate-600' }) {
    // color = 'text-red-600';
    // if (color==){}
    return (
        <>
            <div className='w-full max-w-5xl border-2 justify-items-start sm:px-16 py-8 px-6 '>
                <div className='flex justify-between'>
                    <h1 className={`text-start md:text-6xl text-4xl font-medium w-min ${color}`}>{fName} </h1>
                    <div className={`self-end text-sm md:text-base ${color}`}>{email}</div></div>
                <div className='flex justify-between'>
                    <h1 className={`text-start md:text-6xl text-4xl font-medium w-min ${color}`}>{lName}</h1>
                    <div className={`self-start text-sm md:text-base ${color}`}>{cNumber}</div>
                </div>
                <hr />
                <div className='text-start py-4 text-sm md:text-base'>{desc}
                </div>
                <hr />
                <div className='text-start my-4'>
                    <div className={`md:text-2xl text-xl font-medium mb-2 ${color}`}>Education</div>
                    {edu.map((details) => {
                        return (
                            <div className='flex justify-between mt-2 text-sm md:text-base'>
                                <div className='max-w-48 sm:max-w-max'>{details.courseName} | {details.collegeName}</div>
                                <div className='flex justify-between'>
                                    <span className='mx-3'>{details.passPercent}%</span>
                                    <span>{details.startYear}-{details.endYear}</span>
                                </div>
                            </div>)
                    })}
                </div>
                <div className='text-start my-4'>

                    <div className={`md:text-2xl text-xl font-medium ${color}`}>Experience</div>
                    {
                        exp.map((ex) => {
                            return (<>
                                <div className='flex justify-between mt-2 text-sm md:text-base font-semibold'>
                                    <div className='mb-1'>{ex.role} | {ex.org}</div>
                                    <div className='flex justify-between'>
                                        <span>{ex.startMonth} {ex.startYear}- {ex.endMonth} {ex.endYear}</span>
                                    </div>
                                </div>
                                <div className='text-sm md:text-base'>
                                    {ex.desc}
                                </div>
                            </>);
                        })}
                </div>
                <div className='text-start my-4'>
                    <div className={`md:text-2xl text-xl font-medium mb-2 grid-cols-[auto_auto_auto] ${color}`}>Skills</div>
                    <div className='grid grid-cols-3 list-disc mx-5 text-sm md:text-base'>
                        {
                            skills.map((skill) => { return <li>{skill}</li> })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Resume