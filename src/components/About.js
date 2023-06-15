import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'black', //text color
        backgroundColor: props.mode === 'dark'?'#342f2f':'white',    
    }

    
  return (
    <div classNameName='container' style={myStyle}>
           <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
           <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextUtils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It is a tool that allows you to analyse a text by counting the number of words, characters and calculating time to read. 
                It also allows users to convert text to different cases like uppercase, lowercase, titlecase.It also provides the faqcility to copy the entire text to the clipboard in a single click.
                It also allows user to convert the text to speech.It also provides a function to remove full stops which are primarily used by UN delegates to create reports.
                Our TextUtlis app is easy to use, text either copied and pasted in the textbox or typed can be converted to any desired form with a single click and free of charge.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Who can use it?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words. It helps writers to promote better harmonisation of the terminology being used. In addition, translators can easily calculate the price of a text based on their word rates.
                This tool is also intended for teachers, who can use it to assess the level of difficulty and skill required to understand a text. They can also easily extract a list of vocabulary to study.
                It is also useful for web page editors to optimise the content of a page by knowing in one click which expressions and keywords are the most used
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                About Developer
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils webpage has been developed by <strong>Mohammed Adhib M</strong> ,Pursuing B.Tech(IT) at Vellore Institute of Technology (VIT) Vellore, who is an aspiring web developer.
                This application has been developed under guidance of <a rel="noopener noreferrer" target='_blank' href='https://www.youtube.com/@CodeWithHarry'>Code with Harry</a> under his complete <a rel="noopener noreferrer" target='_blank' href='https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt'>React course</a>. This application is a single page web application
                made with React framework.
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}
