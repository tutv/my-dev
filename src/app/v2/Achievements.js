import React, {Component} from 'react'

class Achievements extends Component {
    render() {
        return (
            <div className="Achievements Section">
                <h3 className="SectionTitle">Certifications and achievements</h3>

                <div className="MainSection">
                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                6.0 IELTS
                            </div>
                            <div className="TimeRange">May, 2019</div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                <a href="https://bit.ly/uet-hackathon-2017" rel="noreferrer" target="_blank">
                                    Second prize - UET Hackathon 2017
                                </a>
                            </div>
                            <div className="TimeRange">March, 2017</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Timy App - FRIES Team. I worked as a Full Stack Developer.
                            </div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                <a href="https://bit.ly/smart-hack-2016" rel="noreferrer" target="_blank">
                                    Special Award - Smart Hack 2016
                                </a>
                            </div>
                            <div className="TimeRange">June, 2016</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Edoo App - FRIES Team. I worked as a Frontend Developer.
                            </div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                <a target="_blank" rel="noreferrer" href="https://bit.ly/uet-hackathon-2015">
                                    Second prize - UET Hackathon 2015
                                </a>
                            </div>
                            <div className="TimeRange">December, 2015</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                "Lớp tôi" App - FRIES Team. I worked as a Backend Developer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Achievements
