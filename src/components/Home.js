import ExamBtn from './ExamBtn';
import './Home.css'


function Home() {

  return (
      <div className='container'>
          <div className='decbg'/>
          <div className='home_title'>
              <span className='home_title_text'>選擇試題</span>

              <form className='searchfiled'>
                <input type="text" name="search" placeholder="搜尋"/>
              </form>

              <div className='ExamBtnField'>
              
                <ExamBtn
                    CategoryName={'英文'}
                    ExamName={'基礎文法（一）'}
                    opstyle={{opacity:'1'}}
                    link={'./Exam'}
                />
                <ExamBtn
                    CategoryName={'英文'}
                    ExamName={'基礎文法（二）'}
                    opstyle={{opacity:'0.5',cursor: 'default'}}
                    link={''}
                />
                <ExamBtn
                    CategoryName={'英文'}
                    ExamName={'商用單字'}
                    opstyle={{opacity:'0.5',cursor: 'default'}}
                    link={''}
                />
                <ExamBtn
                    CategoryName={'日文'}
                    ExamName={'N4單字'}
                    opstyle={{opacity:'0.5',cursor: 'default'}}
                    link={''}
                />
                <ExamBtn
                    CategoryName={'日文'}
                    ExamName={'N5單字'}
                    opstyle={{opacity:'0.5',cursor: 'default'}}
                    link={''}
                />
                <ExamBtn
                    CategoryName={'日文'}
                    ExamName={'基礎文法（一）'}
                    opstyle={{opacity:'0.5',cursor: 'default'}}
                    link={''}
                />
                
                
                
              </div>

              

          </div>

      </div>
    );
  }
  
  export default Home;
  