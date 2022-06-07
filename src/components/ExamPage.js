import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery'; 
import './ExamPage.css'
import Topic from './Topic';

const data =[
    {
      "id": 1,
      "num": "01",
      "topic": "His office is on the second ______ of the building.",
      "ans1": "floor",
      "ans2": "level",
      "ans3": "ground",
      "ans4": "stage",
      "correct": 1
    },
    {
      "id": 2,
      "num": "02",
      "topic": "I'd like ______ information, please.",
      "ans1": "an",
      "ans2": "some",
      "ans3": "piece",
      "ans4": "a piece",
      "correct": 2
    },
    {
      "id": 3,
      "num": "03",
      "topic": "There aren't ______ people here.",
      "ans1": "much",
      "ans2": "many",
      "ans3": "a lot",
      "ans4": "some",
      "correct": 2
    },
    {
      "id": 4,
      "num": "04",
      "topic": "She looks ______ she's going to be sick.",
      "ans1": "as if",
      "ans2": "as",
      "ans3": "likes",
      "ans4": "if",
      "correct": 1
    },
    {
      "id": 5,
      "num": "05",
      "topic": "I come ______ England.",
      "ans1": "from",
      "ans2": "at",
      "ans3": "to",
      "ans4": "beyond",
      "correct": 1
    }
  ]

let examnum = 0;

function ExamPage() {
    
    const ansarray=['#ans1','#ans2','#ans3','#ans4'];
    const [numa, setNum] = useState(data[examnum].num);
    function TopicDetect(){
        examnum += 1;
        $('#correct').css('display','none');
        $('#wrong').css('display','none');
        if(examnum<5){
            setNum(data[examnum].num)
            for(var a=0;a<ansarray.length;a++){
                $(ansarray[a]).css({'background':'#f7f6f4','color':'#333'});
  
            }
            
        }else{
            $(".blackbg").css('display','block');
            $(".blackbg").scrollTop(0);
        }
    }

    
    let ansed = false;
    function AnsDetect(e){
        if(ansed){

        }else{
        
            if(e==data[examnum].correct){
                //correct
                console.log('O'+'正解：'+data[examnum].correct+'作答:'+e);  
                $(ansarray[e-1]).css({'background':'#fbcc4d','color':'#f7f6f4'});
                $('#correct').css({'display':'block'});

            }else{
                //wrong
                console.log('X'+'正解：'+data[examnum].correct+'作答:'+e);
                $(ansarray[e-1]).css({'background':'rgba(251, 204, 77, 0.3)','color':'rgba(249, 249, 249, 0.8)'});
                $(ansarray[data[examnum].correct-1]).css({'background':'#fbcc4d','color':'#f7f6f4'});
                $('#wrong').css({'display':'block'});
                
            }

            ansed=true;
        }

    }

    return (
      <div className='container'>
            <div className='ExamPageBg'></div>

            <div className='NavBar'>
                <div className='navbaricon'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48.15 42.35' fill='rgba(241, 240, 238, 1)'>
                        <path d='M42,13.3V38a1.45,1.45,0,0,0-.09.22A4.63,4.63,0,0,1,37.17,42H29.64a3.08,3.08,0,0,1-3.18-3.2V30.51a1.63,1.63,0,0,0-1.82-1.84H17.45c-1.28,0-1.87.59-1.87,1.88v8.22A3.09,3.09,0,0,1,12.4,42c-2.5,0-5-.06-7.48,0A4.83,4.83,0,0,1,0,37c.07-7.62,0-15.23,0-22.85a3.36,3.36,0,0,1,1.76-3.13Q10.38,5.86,19,.64a3.57,3.57,0,0,1,4.08,0q8.31,5.07,16.67,10.07A4.39,4.39,0,0,1,42,13.3Z'/>
                    </svg>
                </div>
                <div className='navbaricon'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48.15 42.35' fill='rgba(241, 240, 238, 1)'>
                        <g>
                            <rect class='cls-1' width='48.15' height='8.22' rx='4.11' ry='4.11'/>
                            <rect class='cls-1' y='17.06' width='48.15' height='8.22' rx='4.11' ry='4.11'/>
                            <rect class='cls-1' y='34.13' width='48.15' height='8.22' rx='4.11' ry='4.11'/>
                        </g>
                    </svg>
                </div>

            </div>
            <div className='ExamField'>
                <Topic
                    topicnum={numa}
                    topiccontent={data[examnum].topic}
                    ansBtn1={data[examnum].ans1}
                    ansBtn2={data[examnum].ans2}
                    ansBtn3={data[examnum].ans3}
                    ansBtn4={data[examnum].ans4}

                    clicknext={()=>TopicDetect()}

                    ansBtnclick1={()=>AnsDetect(1)}
                    ansBtnclick2={()=>AnsDetect(2)}
                    ansBtnclick3={()=>AnsDetect(3)}
                    ansBtnclick4={()=>AnsDetect(4)}
                />

                
                
            </div>

            <div className='blackbg'>
                <div className='endbox'>
                    <span className='endbox_title'>測驗結束</span>
                    <NavLink to='/' className='menubtn' onClick={()=>window.location.reload(false)}>再測一次</NavLink>
                </div>
            </div>
            

      </div>
    );
  }
  
  export default ExamPage;
  