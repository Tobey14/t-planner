import React, { useState, useEffect } from 'react';
import Button from '../../components/home/Button';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/home/course/Card';
import courses from '../../assets/images/online_courses.jpg'
import test from '../../assets/images/online_test.jpg'
import gpa from '../../assets/images/gpa_calc.jpg'


const Home = () => {
    const Navigate = useNavigate();

    const goToLogin = () => {
        Navigate('/login')
    }

    return (
        <section className='home-page-main'>
            <div className="top-section">
                <div className="content">
                    <p className="logo_text">
                        T-planner
                    </p>

                    <p className="welcome_text">
                        Welcome to T-planner! Create, plan and manage your tasks using the best platform available to man. You can stay updated on your progress here too with our progress score feature.

                        If you need assistance, send a mail to tplanner@gmail.com.
                        Embrace this platform as your digital gateway to stop procrastination and deliver projects. Let's embark on an inspiring adventure together!
                    </p>

                    <Button width='150px' radius={30} height='30px' color="#FFFFFF" bg="#0A7091" text="Sign In" clickAction={goToLogin} />
                </div>
            </div>

            <div className="feature-section">
                <p className="logo_text">
                    Features
                </p>

                <div className="features">
                    <Card title={'Create Tasks'} image={courses} desc={'Create your tasks'}/>
                    <Card title={'Manage Tasks'} image={test} desc={'Manage your projects and tasks'}/>
                    <Card title={'Get Notification'} image={gpa} desc={'Be notified so you never miss tasks'}/>
                </div>

            </div>




            <div className="about-section">
                <p className="logo_text">
                    About
                </p>

                <p className="welcome_text">
                    This project is inspired by the need to develop a real life application that can be useful to procrastinators like me and others.
                    The plan is to build a master task planner with additional features like the progress score. 
                    <br />  This is a Portfolio Project for Holberton School with a link. 
                    <br /> <br />
                    The project repository is at https://github.com/Tobey14/t-planner and is built with the React javascript framework.

                    <br /><br />
                    Contributor(s): <br /> <br />

                    
                    
                    Onuigbo Tobechukwu Collins <br />
                        <ul>
                            <li>
                                Github : https://github.com/tobey14
                            </li>

                            <li>
                                LinkedIn : https://linkedin.com/tobey14
                            </li>
                        </ul> 
                    
                </p>

                

            </div>
        </section>
    )
}

export default Home;