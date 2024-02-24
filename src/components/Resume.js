import React from 'react';

function Resume({ fName, lName, email, cNumber, desc, edu, exp, skills }) {
    return (
        <>
            <div className='w-full max-w-5xl border-2 justify-items-start px-16 py-8 text'>
                <div className='flex justify-between'><h1 className='text-start text-6xl font-medium w-min'>{fName} </h1><div className='self-end'>{email}</div></div>
                <div className='flex justify-between'>
                    <h1 className='text-start text-6xl font-medium w-min'>{lName}</h1>
                    <div className='self-start'>{cNumber}</div>
                </div>
                <hr />
                <div className='text-start py-4'>{desc}
                </div>
                <hr />
                <div className='text-start my-4'>
                    <div className='text-2xl font-medium mb-2'>Education</div>
                    {edu.map((details) => {
                        return (
                            <div className='flex justify-between mt-2'>
                                <div className=''>{details.courseName} | {details.collegeName}</div>
                                <div className='flex justify-between'>
                                    <span className='mx-3'>{details.passPercent}%</span>
                                    <span>{details.startYear}-{details.endYear}</span>
                                </div>
                            </div>)
                    })}
                </div>
                <div className='text-start my-4'>

                    <div className='text-2xl font-medium'>Experience</div>
                    {
                        exp.map((ex) => {
                            return (<>
                                <div className='flex justify-between mt-2'>
                                    <div className='mb-1'>{ex.role} | {ex.org}</div>
                                    <div className='flex justify-between'>
                                        <span>{ex.startMonth} {ex.startYear}- {ex.endMonth} {ex.endYear}</span>
                                    </div>
                                </div>
                                <div>
                                    {ex.desc}
                                </div>
                            </>);
                        })}
                </div>
                <div className='text-start my-4'>
                    <div className='text-2xl font-medium mb-2 grid-cols-[auto_auto_auto]'>Skills</div>
                    <div className='grid grid-cols-3 list-disc mx-5'>
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