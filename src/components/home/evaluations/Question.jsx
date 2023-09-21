import React from 'react';

const Question = ({ questions }) => {
    const optionKeys = ['A', 'B', 'C', 'D'];

    return (
        <div>
            {questions.map((question, index) => {
                return <div className='eval-question' key={index}>
                    <p className="number">{index + 1} .</p>

                    <div className="questions">
                        <p className="question"> {question.title}?</p>

                        <div className="options">
                            {
                                question.options.map((option, index) => {
                                    return <p className="option"><span>{optionKeys[index]}. ) {option} </span> <input type="checkbox" name="" id="" /></p>
                                })
                            }
                        </div>

                    </div>

                </div>
            })}
        </div>


    )
}

export default Question;