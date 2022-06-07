import './ExamPage.css'

function Topic(props) {
    return (
        <>
        <div className='topicbox'>
            <svg id='correct' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='correcticon'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 34C26.3889 34 34 26.3888 34 17C34 7.61116 26.3889 0 17 0C7.61115 0 0 7.61116 0 17C0 26.3888 7.61115 34 17 34ZM17 28C23.0751 28 28 23.0751 28 17C28 10.9249 23.0751 6 17 6C10.9249 6 6 10.9249 6 17C6 23.0751 10.9249 28 17 28Z" fill="#70B729"/>
            </svg>
            <svg id='wrong' width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='correcticon'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2573 15L0.00427246 25.2531L4.24692 29.4957L14.5 19.2426L24.7531 29.4957L28.9957 25.2531L18.7426 15L28.9956 4.74696L24.753 0.504333L14.5 10.7574L4.24695 0.504349L0.00430298 4.74699L10.2573 15Z" fill="#FF6060"/>
            </svg>


            <span className='topicnum'>{props.topicnum}</span><br/><br/><br/>
            <span className='topiccontent'>{props.topiccontent}</span>

        </div>

        <div className='ansbox'>
            <div id='ans1' className='ansBtn' onClick={props.ansBtnclick1}>{props.ansBtn1}</div>
            <div id='ans2' className='ansBtn' onClick={props.ansBtnclick2}>{props.ansBtn2}</div>
            <div id='ans3' className='ansBtn' onClick={props.ansBtnclick3}>{props.ansBtn3}</div>
            <div id='ans4' className='ansBtn' onClick={props.ansBtnclick4}>{props.ansBtn4}</div>
            
        </div>

        <div className='PageBtnField'>
            <div className='NextBtn' onClick={props.clicknext}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108.69 108.69'>
                    <circle fill='rgba(251, 204, 77, 1)' cx='54.35' cy='54.35' r='54.35'/>
                    <path fill='rgba(249, 249, 249, 1)' d='M32.32,58.21H66L52,72.07a4.26,4.26,0,1,0,6,6.06L79.37,57h0a2.39,2.39,0,0,0,.22-.23l.06-.07a4.21,4.21,0,0,0,.89-1.88h0a2.76,2.76,0,0,0,.06-.4,3.11,3.11,0,0,0,0-.43,3.22,3.22,0,0,0,0-.43,2.63,2.63,0,0,0-.06-.39v0a4.22,4.22,0,0,0-.89-1.87l-.06-.07-.22-.24h0L58.78,30.56a4.25,4.25,0,0,0-3-1.23,4.26,4.26,0,0,0-3,7.3L66,49.69H32.32a4.26,4.26,0,1,0,0,8.52Z'/>
                </svg>
            </div>   
        </div>
        </>
    );
  }
  
  export default Topic;
  